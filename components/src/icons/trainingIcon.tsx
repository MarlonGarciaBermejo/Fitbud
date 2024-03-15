import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Rect, Svg, Image, Pattern, Defs, Use } from "react-native-svg";

interface TrainingIconProps {
  style?: StyleProp<ViewStyle>;
}

export const TrainingIcon: React.FC<TrainingIconProps> = ({ style }) => {
  return (
    <Svg width="375" height="290" viewBox="0 0 326 170" fill="none" style={style}>
      <Rect width="326" height="170" rx="14" fill="url(#pattern0)" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <Use xlinkHref="#image0_70_2" transform="matrix(0.000254625 0 0 0.000488281 -0.0214724 0)" />
        </Pattern>
        <Image
          id="image0_70_2"
          width="4096"
          height="2048"
        />
      </Defs>
    </Svg>
  );
};