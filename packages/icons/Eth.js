import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

export default function Eth(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 300 300">
      <Circle fill="#627EEA" cx={150} cy={150} r={148} />
      <Path
        fill="#C0CBF6"
        d="M150.418 124.27l71.885 31.123-71.885-115.309M150.418 259.736l71.639-97.127-71.639 35.612"
      />
      <Path fill="#8197EE" d="M150.418 155.393h71.639l-71.639-31.538" />
      <Path
        fill="#FFF"
        d="M150.418 124.27l-72.721 31.123 72.721-115.309M150.418 259.916l-72.475-97.127 72.475 35.611"
      />
      <Path
        fill="#C0CBF6"
        d="M150.418 155.393H77.943l72.475-31.717M150.418 155.393H77.943l72.475 33.232"
      />
      <Path fill="#8197EE" d="M150.418 155.393h71.639l-71.639 33.232" />
    </Svg>
  );
}
