import { LuminoTheme } from "types";
import { createGlobalStyle, ThemeProps } from "styled-components";

export const lightTheme: LuminoTheme = {
    colors: {
        success: "green",
        warning: "orange",
    },
};

export const darkTheme: LuminoTheme = {
    colors: {
        success: "blue",
        warning: "yellow",
    },
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: ThemeProps<LuminoTheme>) =>
        props.theme.colors.success};
    color: ${(props: ThemeProps<LuminoTheme>) => props.theme.colors.warning};
  }
`;
