import React from "react";

import Router from "app/routes/Router";

import style from "app/App.module.scss";
import "scss/styles.scss";

function App() {
    return (
        <div>
            <p className={style.app}>Lumino</p>
            <Router />
        </div>
    );
}

export default App;
