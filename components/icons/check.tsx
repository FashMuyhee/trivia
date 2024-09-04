import React from 'react';
import {Svg, Path} from 'react-native-svg';

export const CheckIcon = ({color = '#62F694'}: {color?: string}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 256 256" fill={color}>
      <Path d="M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm45.66 85.66l-56 56a8 8 0 01-11.32 0l-24-24a8 8 0 0111.32-11.32L112 148.69l50.34-50.35a8 8 0 0111.32 11.32z" />
    </Svg>
  );
};
