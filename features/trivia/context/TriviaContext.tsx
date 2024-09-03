import React, {createContext, useState, useContext} from 'react';
import {useCountdown} from '../hooks';
import {useRouter} from 'expo-router';

interface TriviaResponse {
  response_code: number;
  results: TriviaData[];
}

export interface TriviaData {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

interface TriviaContextValue {
  triviaData: TriviaData[];
  currentQuestionIndex: number;
  score: number;
  isQuizOver: boolean;
  isLoadingTrivia: boolean;
  loadTrivia: () => Promise<void>;
  onAnswerQuestion: (answer: string) => void;
  choice: string;
  timeLeft: number;
  currentTrivia: TriviaData | null;
}

export const TriviaContext = createContext<TriviaContextValue>({
  triviaData: [],
  currentQuestionIndex: 0,
  score: 0,
  isQuizOver: false,
  isLoadingTrivia: true,
  loadTrivia: () => Promise.resolve(),
  onAnswerQuestion: () => {},
  choice: '',
  timeLeft: 0,
  currentTrivia: null,
});

export const TriviaProvider = ({children}: {children: React.ReactNode}) => {
  const {navigate} = useRouter();

  const [triviaData, setTriviaData] = useState<TriviaData[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [isLoadingTrivia, setIsLoadingTrivia] = useState(true);
  const [choice, setChoice] = useState('');

  const {timeLeft, isActive, reset, start} = useCountdown(10);

  const loadTrivia = async () => {
    try {
      setIsLoadingTrivia(true);
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986');
      const data = (await response.json()) as TriviaResponse;

      if (data.results) {
        setTriviaData(data.results);
        start();
        setIsLoadingTrivia(false);
      }
    } catch (error) {
      setTriviaData([]);
      setIsLoadingTrivia(false);
    }
  };

  const onChangeQuestion = () => {
    const totalQuestion = triviaData.length - 1;
    if (currentQuestionIndex < totalQuestion) {
      if (timeLeft == 0 && !isActive) {
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setChoice('');

          reset();
          start();
        }, 1000);
      }
      return;
    }

    if (currentQuestionIndex === totalQuestion && timeLeft === 0) {
      setTimeout(() => {
        setIsQuizOver(true);
        navigate('/(trivia)/result');
      }, 1000);
    }
  };

  const onAnswerQuestion = (answer: string) => {
    setChoice(answer);
    const currentQuestion = triviaData[currentQuestionIndex];
    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
  };

  React.useEffect(() => {
    onChangeQuestion();
  }, [timeLeft, isActive]);

  const contextValue: TriviaContextValue = {
    triviaData,
    currentQuestionIndex,
    score,
    isQuizOver,
    loadTrivia,
    onAnswerQuestion,
    choice,
    timeLeft,
    currentTrivia: triviaData[currentQuestionIndex],
    isLoadingTrivia,
  };

  return <TriviaContext.Provider value={contextValue}>{children}</TriviaContext.Provider>;
};

export const useTriviaContext = () => {
  return useContext(TriviaContext);
};
