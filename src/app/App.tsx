import React from "react";

import Router from "app/routes/Router";
import style from "app/App.module.scss";
import "scss/styles.scss";
import { useAppSelector } from "./store";

const App = (): JSX.Element => {
    const { isDarkMode } = useAppSelector((state) => state.switchTheme);

    return (
        <>
            <Router />
        </>
    );
};

export default App;
