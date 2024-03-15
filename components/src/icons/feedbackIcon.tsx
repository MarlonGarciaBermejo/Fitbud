import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Path, Svg } from "react-native-svg";

interface FeedbackIconProps {
  style?: StyleProp<ViewStyle>;
}

export const FeedbackIcon: React.FC<FeedbackIconProps> = ({ style }) => {
  return (
    <Svg width="42" height="32" viewBox="0 0 36 26" fill="none" style={style}>
      <Path
        d="M9.49976 7.80005L17.9998 13.75L26.4998 7.80005"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 21.4V4.4C1 2.52223 2.52223 1 4.4 1H31.6C33.4778 1 35 2.52223 35 4.4V21.4C35 23.2778 33.4778 24.8 31.6 24.8H4.4C2.52223 24.8 1 23.2778 1 21.4Z"
        stroke="white"
      />
    </Svg>
  );
};
