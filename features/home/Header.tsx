import {View, ImageBackground, Platform, Dimensions} from 'react-native';
import React from 'react';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Flex, Text, WavingIcon} from '@/components';
import {StatusBar} from 'expo-status-bar';

type Props = {};

export const Header = (props: Props) => {
  const {colors} = useTheme<Theme>();
  const {top} = useSafeAreaInsets();
  const {height, width} = Dimensions.get('screen');

  const mt = top + 60 + (Platform.select({ios: 0, android: 30}) ?? 0);
  return (
    <View
      style={{
        height: height * 0.35,
        width: '100%',
      }}>
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
        {/* USER info*/}
        <Flex paddingHorizontal="l" style={{marginTop: mt}}>
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
