import {Flex, Text} from '@/components';
import React from 'react';
import {cleanString} from '../utils';

type Props = {
  no: number;
  question: string;
};

export const Question = ({no, question}: Props) => {
  return (
    <Flex
      bg="white"
      borderRadius={10}
      justifyContent="center"
      alignItems="center"
      height={182}
      width="100%"
      borderColor="cyan"
      rowGap="m"
      paddingHorizontal="s"
      mt="s"
      borderWidth={5}>
      <Text fontSize={20} fontFamily="bold" textAlign="center">
        Question {no}
      </Text>
      <Text textAlign="center" fontSize={16} fontFamily="medium">
        {cleanString(question)}
      </Text>
    </Flex>
  );
};
