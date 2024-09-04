import {LayoutChangeEvent, Pressable, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/config';
import {Text} from '@/components';

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};

export const TabBarItem = ({active, options, onLayout, onPress}: TabBarComponentProps) => {
  const {colors} = useTheme<Theme>();

  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, {duration: 250}),
        },
        {
          translateY: withTiming(active ? -10 : 0, {duration: 250}),
        },
      ],
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(active ? -10 : 10, {duration: 250}),
        },
      ],
    };
  });

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.container}>
      <Animated.View style={[styles.circle, animatedCircleStyle, {backgroundColor: colors.bluePrimary}]} />
      {options.tabBarIcon && (
        <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
          {options?.tabBarIcon({
            color: 'white',
            focused: false,
            size: 0,
          })}
        </Animated.View>
      )}
      <Text
        fontSize={12}
        fontFamily="dmsans"
        textAlign={'center'}
        numberOfLines={1}
        style={{position: 'absolute', bottom: 0, color: active ? 'cyan' : '#E4F1FA'}}>
        {options.tabBarLabel?.toString()}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 77,
    width: 70,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 30,
    height: 50,
    width: 50,
    marginBottom: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 10,
  },
  icon: {
    height: 20,
    width: 27,
  },
});
