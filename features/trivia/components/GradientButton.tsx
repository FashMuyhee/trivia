import {Flex, Text} from '@/components';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import {Platform, Pressable} from 'react-native';
import {useRouter} from 'expo-router';

export const GradientButton = () => {
  const {bottom} = useSafeAreaInsets();

  const {replace} = useRouter();

  return (
    <Pressable
      onPress={() => replace('/')}
      style={{
        position: 'absolute',
        bottom: bottom + (Platform.select({ios: 0, android: 5}) ?? 0),
        alignSelf: 'center',
        height: 70,
        width: '100%',
      }}>
      <Flex bg="cyan" borderRadius={100} alignItems="center" height={63} width="100%" justifyContent="center" paddingHorizontal="s">
        <Text textAlign="center" fontSize={18} color="black2" fontFamily="bold">
          Go Home
        </Text>
      </Flex>
      <LinearGradient
        colors={['rgba(254, 230, 94, 1)', 'rgba(237, 123, 43, 1)']}
        start={{x: 1, y: 1}}
        style={{
          height: 44,
          width: '95%',
          borderRadius: 30,
          alignSelf: 'center',
          position: 'absolute',
          backgroundColor: 'yellow',
          bottom: 1,
          zIndex: -1,
        }}
      />
    </Pressable>
  );
};
