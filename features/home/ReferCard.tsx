import React from 'react';
import {Flex, ShareIcon, Text} from '@/components';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/config';
import {Dimensions, Pressable} from 'react-native';

export const ReferCard = () => {
  const {spacing} = useTheme<Theme>();
  const {width} = Dimensions.get('screen');

  const w = width - spacing.l * 2;
  return (
    <Flex
      width={w}
      alignSelf="center"
      bg="bluePrimary"
      height={150}
      borderRadius={spacing.m}
      justifyContent="center"
      mt="l"
      mb="l"
      pl="m"
      overflow="hidden">
      <Flex width="75%" justifyContent="center">
        <Flex rowGap="xs">
          <Text fontSize={16} lineHeight={20} variant="subHeading" color="white">
            Refer & Earn with your Friends
          </Text>

          <Text fontSize={12} fontFamily="light" color="white">
            Share with your friends and loved ones to come and play
          </Text>
        </Flex>
        <Pressable
          style={{borderRadius: 20, height: 30, marginTop: 10, width: 91, justifyContent: 'center', borderWidth: 1, borderColor: 'white'}}>
          <Text textAlign="center" fontSize={10} color="white">
            Invite Friends
          </Text>
        </Pressable>
      </Flex>
      <Flex justifyContent="center" zIndex={-1} width={95} height={142} position="absolute" right={0}>
        <ShareIcon />
      </Flex>
    </Flex>
  );
};
