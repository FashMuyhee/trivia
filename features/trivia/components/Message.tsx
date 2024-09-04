import {Flex, Text} from '@/components';
import React from 'react';
import {Image} from 'react-native';
import mad from '@/assets/images/mad.png';
import smile from '@/assets/images/smile.png';

type Props = {
  isWellDone: boolean;
};

export const Message = ({isWellDone}: Props) => {
  return (
    <Flex
      bg="white"
      borderRadius={10}
      alignItems="center"
      height={256}
      width="100%"
      borderColor="cyan"
      rowGap="xs"
      paddingHorizontal="s"
      mt="m"
      borderWidth={5}>
      <Image style={{width: 100, height: 100, marginTop: 10}} source={isWellDone ? smile : mad} />
      <Text textAlign="center" fontFamily="medium">
        {isWellDone ? 'Excellent work!' : 'Better luck next time'}
      </Text>
      <Text textAlign="center" fontSize={18} fontFamily="medium">
        {isWellDone ? 'Congratulations You Won 🎉' : 'Sorry you Didn’t win'}
      </Text>
    </Flex>
  );
};
