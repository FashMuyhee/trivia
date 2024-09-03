import React from 'react';
import {Flex, StopWatchIcon, Text} from '@/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {useSharedValue, useAnimatedProps, withTiming} from 'react-native-reanimated';
import Svg, {Circle, G} from 'react-native-svg';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/config';

type TimeProgressProps = {
  currentTime: number;
  endTime: number;
};

type Props = {
  timer: TimeProgressProps;
};
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const percentageHelper = (amount: number, max: number) => {
  const percent = (amount * 100) / max;

  return percent / 100;
};

const TimeProgress = ({currentTime, endTime = 250}: TimeProgressProps) => {
  const strokeWidth = 4;
  const size = 43;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const animatedVal = useSharedValue(circumference);
  const {colors} = useTheme<Theme>();

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(animatedVal.value, {
        duration: 400,
      }),
    };
  });

  React.useEffect(() => {
    const strokeDashoffset = circumference * (1 - percentageHelper(currentTime, endTime));
    animatedVal.value = strokeDashoffset;
  }, [currentTime]);

  return (
    <Flex
      style={{
        height: size,
        minWidth: size,
        alignItems: 'center',
      }}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* @ts-ignore */}
        <G rotation="-90" origin={`${size / 2},${size / 2}`}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={colors.white}
            strokeLinecap="round"
            strokeDashoffset={20}
            fill="transparent"
          />
          <AnimatedCircle
            animatedProps={animatedProps}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={colors.glowGreen}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={0}
            fill="transparent"
          />
        </G>
      </Svg>
      <Text
        color="white"
        fontFamily="medium"
        style={{
          fontSize: 10,
          position: 'absolute',
          bottom: size * 0.35,
        }}>
        {endTime - currentTime}
      </Text>
    </Flex>
  );
};

export const TopHeader = ({timer}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <Flex style={{marginTop: top}} justifyContent="space-between" mb="s" height={50} flexDirection="row" alignItems="center">
      <Flex width="33.33%" style={{columnGap: 5}} alignItems="center" flexDirection="row">
        <StopWatchIcon />
        <Text color="white">00.00.40</Text>
      </Flex>
      <TimeProgress {...timer} />
      <Flex width="33.33%" />
    </Flex>
  );
};
