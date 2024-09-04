import React from 'react';
import {Svg, Path} from 'react-native-svg';

export const CancelIcon = ({color = '#FFCBD2'}: {color?: string}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3a.994.994 0 01-1.41 0L12 13.41 9.11 16.3a.997.997 0 11-1.41-1.41L10.59 12 7.7 9.11A.997.997 0 119.11 7.7L12 10.59l2.89-2.89a.997.997 0 011.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"
        fill={color}
      />
    </Svg>
  );
};
