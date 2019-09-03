import * as React from "react";
import { createContext, useContext } from "react";

export interface Theme {
  designSystem: {
    borderRadius: number;
  };
}

export const DefaultTheme = {
  designSystem: {
    borderRadius: 2
  }
};

export const ThemeContext = createContext<Theme>(DefaultTheme);

export const ThemeProvider = (props: {
  theme: Theme;
  children?: JSX.Element;
}) => (
  <ThemeContext.Provider value={props.theme}>
    {props.children}
  </ThemeContext.Provider>
);

export const useTheme = () => {
  return useContext(ThemeContext);
};
