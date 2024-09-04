import {Platform, Image, Dimensions} from 'react-native';
import React from 'react';
import {Flex, EraserIcon, CirclePlusIcon, BellIcon, Text} from '@/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const TopNavbar = () => {
  const {top} = useSafeAreaInsets();
  const {width} = Dimensions.get('screen');

  return (
    <Flex width={width} paddingHorizontal="l">
      <Flex
        style={{marginTop: top + (Platform.select({ios: 0, android: 10}) ?? 0)}}
        height={50}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Flex alignItems="center" justifyContent="center" height={40} width={40} bg="white" borderRadius={20}>
          <Image style={{height: 26, width: 26}} source={require('@/assets/images/users/1.png')} />
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end" flexDirection="row" columnGap="s" height={40} width="50%">
          <Flex
            borderWidth={1.2}
            borderColor="white"
            borderRadius={24}
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            height={28}
            width={47}
            style={{columnGap: 5}}>
            <EraserIcon />
            <Text fontFamily="bold" color="white">
              0
            </Text>
          </Flex>
          <Flex
            bg="white"
            borderRadius={24}
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            height={28}
            style={{paddingHorizontal: 7, columnGap: 5}}>
            <Text variant="small" fontFamily="bold" color="bluePrimary">
              ₦5,000.00
            </Text>
            <CirclePlusIcon />
          </Flex>
          <BellIcon />
        </Flex>
      </Flex>
    </Flex>
  );
};
