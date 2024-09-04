import {View, Dimensions, TouchableWithoutFeedback, Pressable} from 'react-native';
import React from 'react';
import {Flex, Text} from '@/components';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/config';
import {useRouter} from 'expo-router';

const RingTop = () => (
  <Flex
    position="absolute"
    right={-50}
    top={-39}
    borderRadius={150 / 2}
    height={130}
    width={130}
    borderWidth={8}
    style={{borderColor: '#BCDDF4'}}
  />
);

const RingBottom = () => (
  <Flex
    position="absolute"
    left={-25}
    bottom={5}
    borderRadius={150 / 2}
    height={130}
    width={130}
    borderWidth={8}
    style={{borderColor: '#BCDDF4'}}
  />
);
export const GameCard = () => {
  const {navigate} = useRouter();
  const {spacing} = useTheme<Theme>();
  const {height, width} = Dimensions.get('screen');

  const parentH = height * 0.35;
  const w = width - spacing.l * 2;
  return (
    <Flex
      style={{
        shadowColor: '#00000026',
        shadowOffset: {
          height: 16,
          width: 4,
        },
        shadowRadius: 40,
        shadowOpacity: 1,
      }}
      elevation={1}
      height={230}
      width={w}
      alignSelf="center"
      position="absolute"
      top={parentH * 0.7}
      borderRadius={20}
      overflow="hidden"
      bg="white">
      <RingTop />
      <RingBottom />
      <Flex flex={1} justifyContent="center">
        <Flex
          style={{backgroundColor: '#51A2E0'}}
          borderRadius={spacing.m}
          alignItems="center"
          justifyContent="center"
          height={18}
          position="absolute"
          right={15}
          top={21}
          width={18}>
          <Text fontSize={12} color="white">
            ?
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Text fontSize={16} fontFamily="medium" color="blueDark">
            Game Prize
          </Text>
          <Text fontFamily="dmsans" fontSize={40} textAlign="center" color="blueDark">
            ₦1,000,000
          </Text>
          <Text variant="small" style={{color: '#3B3B3B'}}>
            Next Game: Tomorrow, 8PM
          </Text>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        height={63}
        px="m"
        bg="bluePrimary"
        borderBottomRightRadius={20}
        borderBottomLeftRadius={20}>
        <Pressable
          onPress={() => navigate('/(trivia)/result')}
          style={{
            backgroundColor: 'white',
            width: 95,
            borderRadius: spacing.l,
            height: 28,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Text variant="small" color="blueDark">
            Join Game
          </Text>
        </Pressable>
        <Flex alignItems="center" flexDirection="row" style={{columnGap: 3}}>
          <Text fontFamily="bold" color="white">
            Entry Fee
          </Text>
          <Text variant="small" color="white">
            ₦ 100.00
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
