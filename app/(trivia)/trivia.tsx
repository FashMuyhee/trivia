import React from 'react';
import {BgScreen, Options, Question, TopHeader} from '@/features/trivia/components';
import {demoQuestion} from '@/features/trivia';
import {useCountdown} from '@/features/trivia/hooks';
import {useRouter} from 'expo-router';

type Props = {};

const Trivia = (props: Props) => {
  const {navigate} = useRouter();
  const [index, setIndex] = React.useState(8);
  const [choice, setChoice] = React.useState('');
  const timePerQuestion = 2;
  const {timeLeft, isActive, reset, start} = useCountdown(timePerQuestion);

  const question = demoQuestion[index];

  const onChangeQuestion = () => {
    const totalQuestion = demoQuestion.length - 1;
    if (index < totalQuestion) {
      if (timeLeft == 0 && !isActive) {
        setTimeout(() => {
          setIndex(index + 1);
          reset();
          start();
        }, 1000);
      }
      return;
    }

    if (index === totalQuestion && timeLeft === 0) {
      setTimeout(() => {
        navigate('/(trivia)/result');
      }, 1000);
    }
  };

  React.useEffect(() => {
    onChangeQuestion();
  }, [timeLeft, isActive]);

  React.useEffect(() => {
    start();
  }, []);

  return (
    <BgScreen>
      <TopHeader timer={{currentTime: timeLeft, endTime: timePerQuestion}} />
      <Question no={index + 1} question={question.question} />
      <Options
        choice={choice}
        onSelectChoice={setChoice}
        correctAnswer={question.correct_answer}
        incorrectAnswers={question.incorrect_answers}
      />
    </BgScreen>
  );
};

export default Trivia;
