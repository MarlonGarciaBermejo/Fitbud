export interface Colors {
  bg: string;
  primary: string;
  secondary: string;
  tertiary: string;
  black: string;
  white: string;
  success: string;
  error: string;
  info: string;
  danger: string;
  panel: string;
  panelDark: string;
  primaryText: string;
  secondaryText: string;
  [x: string]: string;
}

export interface Padding {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface BoxShaow {
  shadowColor: string;
  shadowOpacity: number;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowRadius: number;
}

export interface BoxShadow {
  shadowColor: string;
  shadowOpacity: number;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowRadius: number;
}

export const defaultColors: Colors = {
  bg: "#e6e6e6",
  primary: "#5072A7",
  secondary: "#FF6B8A",
  tertiary: "#FFC107",
  black: "#333333",
  white: "#ffffff",
  success: "#66BB6A",
  error: "#EF5350",
  info: "#42A5F5",
  danger: "#EC407A",
  panel: "#f7f7f7",
  panelDark: "#e0e0e0",
  primaryText: "#212121",
  secondaryText: "#737373",
  lightGrey: "#CCCCCC",
  lightGrey8: "#EBEBEB",
  lightGrey3: "#F8F8FC",
  lightGrey2: "#F9F9F9",
  lightGrey4: "#999999",
  pink: "#FF3399",
};

export const padding = {
  xs: 4,
  sm: 10,
  md: 16,
  lg: 30,
  xl: 52,
};
export const margin = {
  xs: 4,
  sm: 10,
  md: 16,
  lg: 30,
  xl: 52,
};
