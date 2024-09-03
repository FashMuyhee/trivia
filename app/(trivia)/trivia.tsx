import {View, Text} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';
import {BgScreen, Question, TopHeader} from '@/features/trivia';

type Props = {};

const Trivia = (props: Props) => {
  return (
    <BgScreen>
      <TopHeader timer={{currentTime: 1, endTime: 20}} />
      <Question no="1" question="Who was the First President of the United States ?" />
    </BgScreen>
  );
};

export default Trivia;
