import {CancelIcon, CheckIcon, Flex, Text} from '@/components';
import {Theme} from '@/config';
import {useTheme} from '@shopify/restyle';
import React from 'react';

type Props = {
  score: number;
  total: number;
};

export const Scoreboard = ({score, total}: Props) => {
  const {colors} = useTheme<Theme>();
  return (
    <Flex
      bg="white"
      borderRadius={10}
      justifyContent="center"
      alignItems="center"
      height={76}
      width="100%"
      borderColor="cyan"
      rowGap="xs"
      paddingHorizontal="s"
      mt="s"
      borderWidth={5}>
      <Text textAlign="center" fontSize={12} fontFamily="medium">
        Total Time Used: 01:00
      </Text>
      <Flex flexDirection="row" alignItems="center">
        <Flex columnGap="xs" flexDirection="row" justifyContent="center" alignItems="center" width="48%">
          <Text fontFamily="bold">{score} Correct</Text>
          <CheckIcon color={colors.lemon} />
        </Flex>
        <Flex height="100%" width={1} bg="black" />
        <Flex columnGap="xs" flexDirection="row" justifyContent="center" alignItems="center" width="48%">
          <Text fontFamily="bold">{total - score} Incorrect</Text>
          <CancelIcon color={colors.errorAccent} />
        </Flex>
      </Flex>
    </Flex>
  );
};
