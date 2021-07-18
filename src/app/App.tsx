import React from "react";

import Router from "app/routes/Router";
import style from "app/App.module.scss";
import "scss/styles.scss";
import { SwitchTheme } from "features/switchTheme/SwitchTheme";
import { useAppSelector } from "./store";
import clsx from "clsx";

const App = (): JSX.Element => {
    const { isDarkMode } = useAppSelector((state) => state.switchTheme);

    return (
        <>
            <h1 className={clsx(style.title, isDarkMode && style.dark)}>
                Lumino
            </h1>
            <SwitchTheme />
            <Router />
        </>
    );
};

export default App;
