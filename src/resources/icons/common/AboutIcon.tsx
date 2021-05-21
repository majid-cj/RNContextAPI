import React, {FC} from 'react';
import SVG, {Path} from 'react-native-svg';
import {IconsProps} from './types';

export const AboutIcon: FC<IconsProps> = ({color = '#fff', size = 32}) => {
  return (
    <SVG x="0px" y="0px" viewBox="0 0 350 350" width={size} height={size}>
      <Path
        fill={color}
        d="M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z"
      />
      <Path
        fill={color}
        d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z"
      />
    </SVG>
  );
};
