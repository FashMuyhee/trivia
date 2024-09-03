import React from 'react';
import {Link} from 'expo-router';
import {BgScreen, Options, Question, TopHeader} from '@/features/trivia/components';
import {demoQuestion} from '@/features/trivia';

type Props = {};

const Trivia = (props: Props) => {
  const question = demoQuestion[0];
  return (
    <BgScreen>
      <TopHeader timer={{currentTime: 1, endTime: 20}} />
      <Question no="1" question={question.question} />
      <Options correctAnswer={question.correct_answer} incorrectAnswers={question.incorrect_answers} />
    </BgScreen>
  );
};

export default Trivia;
