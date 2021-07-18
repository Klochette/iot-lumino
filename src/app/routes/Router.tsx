import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cgu from "./CGU/CGU";
import ChangePassword from "./changePassword/ChangePassword";
import Dashboard from "./dashboard/Dashboard";
import EditConfidentiality from "./editConfidentiality/EditConfidentiality";
import EditGroups from "./editGroups/EditGroups";
import Login from "./login/Login";
import NotFound from "./notFound/NotFound";
import Notifications from "./notifications/Notifications";
import Rooms from "./rooms/Rooms";
import Settings from "./settings/Settings";

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"}>
                    <Login />
                </Route>
                <Route exact path={"/:userType/dashboard"}>
                    <Dashboard />
                </Route>
                <Route exact path={"/:userType/rooms"}>
                    <Rooms />
                </Route>
                <Route exact path={"/:userType/notifications"}>
                    <Notifications />
                </Route>
                <Route exact path={"/:userType/settings"}>
                    <Settings />
                </Route>
                <Route exact path={"/:userType/settings/account/password"}>
                    <ChangePassword />
                </Route>
                <Route exact path={"/:userType/settings/groups"}>
                    <EditGroups />
                </Route>
                <Route
                    exact
                    path={"/:userType/settings/preferences/confidentiality"}
                >
                    <EditConfidentiality />
                </Route>
                <Route exact path={"/:userType/settings/preferences/cgu"}>
                    <Cgu />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
