import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Path, Svg } from "react-native-svg";

interface HomeIconProps {
  style?: StyleProp<ViewStyle>;
}

export const HomeIcon: React.FC<HomeIconProps> = ({ style }) => {
  return (
    <Svg width="25" height="31" viewBox="0 0 30 36" fill="none" style={style}>
      <Path
        d="M10.3333 27.9465H7.22222C3.78578 27.9465 1 25.1606 1 21.7242V11.9361C1 9.76025 2.1365 7.74251 3.99723 6.61479L11.775 1.90099C13.7573 0.699669 16.2427 0.699669 18.225 1.90099L26.0028 6.61479C27.8635 7.74251 29 9.76025 29 11.9361V21.7242C29 25.1606 26.2142 27.9465 22.7778 27.9465H19.6667M10.3333 27.9465V21.7242C10.3333 19.1468 12.4226 17.0576 15 17.0576C17.5774 17.0576 19.6667 19.1468 19.6667 21.7242V27.9465M10.3333 27.9465H19.6667"
        stroke="#202020"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
