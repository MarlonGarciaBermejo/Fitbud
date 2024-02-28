import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Path, Svg } from "react-native-svg";

interface BackIconProps {
  style?: StyleProp<ViewStyle>;
}

export const BackIcon: React.FC<BackIconProps> = ({ style }) => {
  return (
    <Svg width="20" height="25" viewBox="0 0 10 19" fill="none" style={style}>
      <Path
        d="M9 1.54883L1 9.54883L9 17.5488"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
