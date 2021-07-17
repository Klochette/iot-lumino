import { LuminoTheme } from "types";
import { createGlobalStyle, ThemeProps } from "styled-components";

export const lightTheme: LuminoTheme = {
    colors: {
        background: "white",
        text: "black",
    },
};

export const darkTheme: LuminoTheme = {
    colors: {
        background: "black",
        text: "white",
    },
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: ThemeProps<LuminoTheme>) =>
        props.theme.colors.background};
    color: ${(props: ThemeProps<LuminoTheme>) => props.theme.colors.text};
  }
`;
