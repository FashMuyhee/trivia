import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

export const StoreIcon = () => {
  return (
    <Svg width={23} height={22} viewBox="0 0 23 22" fill="none">
      <G clipPath="url(#clip0_3052_53)" stroke="#F9F9F9" strokeWidth={1.71429} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M2.857 13.357v7.072a.786.786 0 00.786.785h15.714a.786.786 0 00.786-.785v-7.072m-7.072 0v7.857m-10.214-5.5h10.215M1.286 6.286l2.357-5.5h15.714l2.357 5.5H1.286zm0 0v1.571A3.143 3.143 0 004.429 11h.44A3.143 3.143 0 008.01 7.857V6.286" />
        <Path d="M15.036 6.286v1.571m0 0A3.143 3.143 0 0111.893 11h-.786a3.143 3.143 0 01-3.143-3.143V6.286m7.072 1.571A3.143 3.143 0 0018.179 11h.393a3.143 3.143 0 003.142-3.143V6.286" />
      </G>
      <Defs>
        <ClipPath id="clip0_3052_53">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
