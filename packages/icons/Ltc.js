import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

export default function Ltc(props) {
  return (
  <Svg width={props.size} height={props.size} viewBox="0 0 300 300">
    <Circle fill="#BFBBBB" cx={150} cy={150} r={148} />
    <Path
      fill="#FFF"
      d="M221.432 195.214H136.8l10.045-33.869 1.193-4.01 22.76-7.144.033-.011 7.175-24.227-22.762 7.09 1.863-6.264 17.292-58.302h-39.878l-1.237 4.05-22.82 74.454-.039.015-24.611 7.668-.025.008-1.192 4.016-6.068 20.458 24.428-7.669-2.077 6.776-13.255 43.27h125.571l8.275-26.309z"
    />
  </Svg>
  );
}
