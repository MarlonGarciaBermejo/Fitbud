import React from "react";
import { Button, StyleProp, ViewStyle } from "react-native";
import { Path, Svg } from "react-native-svg";

interface ButtonNavBarIconProps {
  style?: StyleProp<ViewStyle>;
}

export const ButtonNavBarIcon: React.FC<ButtonNavBarIconProps> = ({ style }) => {
  return (
    <Svg width="361" height="67" viewBox="0 0 361 67" fill="none" style={style}>
      <Path
        d="M0 33C0 14.7746 14.7746 0 33 0H328C346.225 0 361 14.7746 361 33V34C361 52.2254 346.225 67 328 67H33C14.7746 67 0 52.2254 0 34V33Z"
        fill="#051E35"
      />
    </Svg>
  );
};
