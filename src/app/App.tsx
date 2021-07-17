import React from "react";

import { ThemeProvider } from "styled-components";

import Router from "app/routes/Router";
import style from "app/App.module.scss";
import "scss/styles.scss";
import { darkTheme, GlobalStyle, lightTheme } from "themes";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <p className={style.app}>Lumino</p>
            <Router />
        </ThemeProvider>
    );
}

export default App;
