import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                {/* to add a route :
                <Route exact path={"/"}>
                    <View />
                </Route> 
                */}
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
