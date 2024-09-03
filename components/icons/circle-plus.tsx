import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CirclePlusIcon = () => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 1.5A6.508 6.508 0 001.5 8c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5S11.584 1.5 8 1.5zm0 1c3.043 0 5.5 2.457 5.5 5.5s-2.457 5.5-5.5 5.5A5.492 5.492 0 012.5 8c0-3.043 2.457-5.5 5.5-5.5zM7.5 5v2.5H5v1h2.5V11h1V8.5H11v-1H8.5V5h-1z"
        fill="#17478B"
      />
    </Svg>
  );
};
