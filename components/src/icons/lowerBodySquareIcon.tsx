import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Defs, Path, Rect, Svg } from "react-native-svg";

interface LowerBodySquareIconProps {
  style?: StyleProp<ViewStyle>;
}

export const LowerBodySquareIcon: React.FC<LowerBodySquareIconProps> = ({ style }) => {
  return (
    <Svg width="94" height="91" viewBox="0 0 94 91" fill="none" style={style}>
      <Rect width="94" height="91" rx="14" fill="url(#paint0_linear_22_55)" />
      <Defs>
        <linearGradient id="paint0_linear_22_55" x1="47" y1="0" x2="47" y2="91" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0E65B5" stop-opacity="0.97" />
          <stop offset="1" stop-color="#000D53" />
        </linearGradient>
      </Defs>
    </Svg>
  );
};
