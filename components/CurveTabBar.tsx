import React, {useReducer} from 'react';
import {LayoutChangeEvent, Platform, StyleSheet, View} from 'react-native';
import Animated, {useDerivedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TabBarItem} from './TabBarItem';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/config';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export const CurveTabBar = ({state: {index: activeIndex, routes}, navigation, descriptors}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();
  const {colors} = useTheme<Theme>();

  const reducer = (state: any, action: {x: number; index: number}) => {
    return [...state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };

  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) return 0;
    return [...layout].find(({index}) => index === activeIndex)!.x - 10;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(xOffset.value, {duration: 250})}],
    };
  });

  return (
    <View style={{paddingBottom: bottom + Platform.select({ios: 0, android: 10}), backgroundColor: colors.blueDark}}>
      <AnimatedSvg width={90} height={35} viewBox="0 0 90 35" style={[styles.activeBackground, animatedStyles]}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0c8.586 3.422 13.514 10.406 18.337 17.24C24.694 26.25 30.869 35 45 35c13.799 0 19.745-8.632 25.859-17.509C75.757 10.381 80.762 3.113 89.999 0H0z"
          fill="#f9f9f9"
        />
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const {options} = descriptors[route.key];

          return (
            <TabBarItem
              key={route.key}
              active={active}
              options={options}
              onLayout={e => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
