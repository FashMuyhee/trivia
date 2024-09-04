import React from 'react';
import {BgScreen, GradientButton, Message, Scoreboard, useTriviaContext} from '@/features/trivia';
import {Text} from '@/components';
import {StatusBar} from 'expo-status-bar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

type Props = {};

const Result = (props: Props) => {
  const {score, triviaData} = useTriviaContext();
  const {top} = useSafeAreaInsets();
  return (
    <BgScreen>
      <StatusBar />
      <Text
        fontSize={24}
        fontFamily="dmsans"
        color="white"
        style={{marginTop: top + (Platform.select({ios: 0, android: 10}) ?? 0)}}
        textAlign="center">
        Results
      </Text>
      <Scoreboard score={score} total={triviaData.length} />
      <Message isWellDone={score === triviaData.length} />
      <GradientButton />
    </BgScreen>
  );
};

export default Result;
