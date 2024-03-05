import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Path, Svg } from "react-native-svg";

interface ProfileIconProps {
  style?: StyleProp<ViewStyle>;
}

export const ProfileIcon: React.FC<ProfileIconProps> = ({ style }) => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 30" fill="none" style={style}>
      <Path
        d="M1 28.2165V26.5155C1 19.9393 6.33106 14.6083 12.9072 14.6083C19.4834 14.6083 24.8145 19.9393 24.8145 26.5155V28.2165"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9072 14.6083C16.6649 14.6083 19.7113 11.5619 19.7113 7.80414C19.7113 4.04631 16.6649 1 12.9072 1C9.14934 1 6.10303 4.04631 6.10303 7.80414C6.10303 11.5619 9.14934 14.6083 12.9072 14.6083Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
