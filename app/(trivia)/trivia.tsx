import React from 'react';
import {BgScreen, Options, Question, TopHeader} from '@/features/trivia/components';
import {TriviaData, useTriviaContext} from '@/features/trivia';
import {Flex, Text} from '@/components';
import {ActivityIndicator} from 'react-native';

const Trivia = () => {
  const {choice, isLoadingTrivia, currentQuestionIndex, timeLeft, loadTrivia, onAnswerQuestion, currentTrivia} = useTriviaContext();
  const question = currentTrivia as TriviaData;

  React.useEffect(() => {
    loadTrivia();
  }, []);

  return (
    <BgScreen>
      <TopHeader timer={{currentTime: timeLeft, endTime: 10}} />
      {isLoadingTrivia ? (
        <Flex flex={1} rowGap="s" alignItems="center" justifyContent="center">
          <ActivityIndicator color="white" size="large" />
          <Text color="white" variant="subHeading">
            Loading Trivia
          </Text>
        </Flex>
      ) : (
        <>
          <Question no={currentQuestionIndex + 1} question={question.question} />
          <Options
            choice={choice}
            onSelectChoice={onAnswerQuestion}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
          />
        </>
      )}
    </BgScreen>
  );
};

export default Trivia;
