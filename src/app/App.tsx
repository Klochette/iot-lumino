import React from "react";

import Router from "app/routes/Router";
import style from "app/App.module.scss";
import "scss/styles.scss";
import { useAppSelector } from "./store";
import Navbar from "features/navbar/Navbar";

const App = (): JSX.Element => {
    const { isDarkMode } = useAppSelector((state) => state.switchTheme);

    return (
        <>
            <Navbar />
            <Router />
        </>
    );
};

export default App;
