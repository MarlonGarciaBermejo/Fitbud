import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Defs, LinearGradient, Path, Rect, Stop, Svg } from "react-native-svg";

interface UpperBodySquareIconProps {
  style?: StyleProp<ViewStyle>;
}

export const UpperBodySquareIcon: React.FC<UpperBodySquareIconProps> = ({ style }) => {
  return (
    <Svg width="94" height="91" viewBox="0 0 94 91" fill="none" style={style}>
      <Rect width="94" height="91" rx="14" fill="url(#paint0_linear_19_38)" />
      <Defs>
        <LinearGradient id="paint0_linear_19_38" x1="47" y1="0" x2="47" y2="91" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#830000" stop-opacity="0.97" />
          <Stop offset="1" stop-color="#280000" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
