import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Path, Svg } from "react-native-svg";

interface FeedbackBlackIconProps {
  style?: StyleProp<ViewStyle>;
}

export const FeedbackBlackIcon: React.FC<FeedbackBlackIconProps> = ({ style }) => {
  return (
    <Svg width="41" height="30" viewBox="0 0 41 30" fill="none" style={style}>
      <Path
        d="M11.2498 9.40002L20.4998 15.875L29.7498 9.40002"
        stroke="black"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 24.2V5.7C2 3.65655 3.65655 2 5.7 2H35.3C37.3435 2 39 3.65655 39 5.7V24.2C39 26.2435 37.3435 27.9 35.3 27.9H5.7C3.65655 27.9 2 26.2435 2 24.2Z"
        stroke="black"
        stroke-width="2.5"
      />
    </Svg>
  );
};
