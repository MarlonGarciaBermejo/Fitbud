import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Path, Svg } from "react-native-svg";

interface LogoutIconProps {
  style?: StyleProp<ViewStyle>;
}

export const LogoutIcon: React.FC<LogoutIconProps> = ({ style }) => {
  return (
    <Svg width="25" height="31" viewBox="0 0 30 36" fill="none" style={style}>
      <Path
        d="M12.6433 15.6844H23.2867M23.2867 15.6844L18.7252 20.2458M23.2867 15.6844L18.7252 11.1229"
        stroke="#202020"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.2867 6.56144V5.04096C23.2867 3.36148 21.9253 2 20.2457 2H5.04096C3.36148 2 2 3.36148 2 5.04096V26.3277C2 28.0072 3.36148 29.3686 5.04096 29.3686H20.2457C21.9253 29.3686 23.2867 28.0072 23.2867 26.3277V24.8072"
        stroke="#202020"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
