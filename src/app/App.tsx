import React from "react";

import { ThemeProvider } from "styled-components";

import Router from "app/routes/Router";
import style from "app/App.module.scss";
import "scss/styles.scss";
import { darkTheme, GlobalStyle, lightTheme } from "themes";
import { SwitchTheme } from "features/switchTheme/SwitchTheme";
import { useAppSelector } from "./store";

const App = (): JSX.Element => {
    const isLightMode = useAppSelector(
        (state) => state.switchTheme.isLightMode
    );

    return (
        <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
            <GlobalStyle />
            <h1 className={style.title}>Lumino</h1>
            <SwitchTheme />
            <Router />
        </ThemeProvider>
    );
};

export default App;
