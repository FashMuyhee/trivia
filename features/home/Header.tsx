import {View, Dimensions, ImageBackground, Image} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BellIcon, CirclePlusIcon, EraserIcon, Flex, Text, WavingIcon} from '@/components';

type Props = {};

export const Header = (props: Props) => {
  const {height} = Dimensions.get('screen');
  const {colors} = useTheme<Theme>();
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        height: height * 0.4,
        width: '100%',
      }}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
        }}
        resizeMode="cover"
        imageStyle={{
          borderBottomRightRadius: 60,
          backgroundColor: colors.blueSecondary,
        }}
        source={require('@/assets/images/home-header.png')}>
        {/* NAVBAR */}
        <Flex paddingHorizontal="m">
          <Flex style={{marginTop: top}} height={50} flexDirection="row" alignItems="center" justifyContent="space-between">
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
                height={30}
                style={{paddingHorizontal: 5, columnGap: 5}}>
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
                height={30}
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
        {/* USER */}
        <Flex paddingHorizontal="m" mt="s">
          <Flex alignItems="center" flexDirection="row" columnGap="xs">
            <Text fontSize={24} fontFamily="dmsans" color="white">
              Hello John
            </Text>
            <WavingIcon />
          </Flex>
          <Text fontSize={16} color="white">
            Let’s play and Earn
          </Text>
        </Flex>
      </ImageBackground>
    </View>
  );
};
