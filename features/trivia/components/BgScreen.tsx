import {ImageBackground, View} from 'react-native';
import React from 'react';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/config';

type Props = {
  children: React.ReactNode;
};

export const BgScreen = ({children}: Props) => {
  const {spacing} = useTheme<Theme>();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('@/assets/images/home-header.png')}
        style={{height: '100%', width: '100%', backgroundColor: '#2c5897', paddingHorizontal: spacing.m}}
        resizeMode="repeat">
        {children}
      </ImageBackground>
    </View>
  );
};
