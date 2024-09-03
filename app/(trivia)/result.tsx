import React from 'react';
import {BgScreen, useTriviaContext} from '@/features/trivia';
import {Text} from '@/components';

type Props = {};

const Result = (props: Props) => {
  const {score} = useTriviaContext();
  return (
    <BgScreen>
      <Text mt="xl">{score}</Text>
    </BgScreen>
  );
};

export default Result;
