import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Path, Svg } from "react-native-svg";

interface HelpIconProps {
  style?: StyleProp<ViewStyle>;
}

export const HelpIcon: React.FC<HelpIconProps> = ({ style }) => {
  return (
    <Svg width="34" height="34" viewBox="0 0 29 29" fill="none" style={style}>
      <Path
        d="M14.5 28C21.9558 28 28 21.9558 28 14.5C28 7.04415 21.9558 1 14.5 1C7.04415 1 1 7.04415 1 14.5C1 21.9558 7.04415 28 14.5 28Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.45 10.45C10.45 5.72497 17.875 5.72502 17.875 10.45C17.875 13.825 14.5 13.1499 14.5 17.1999"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path d="M14.5 22.6148L14.5147 22.5985" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};
