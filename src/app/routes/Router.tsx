import Navbar from "features/navbar/Navbar";
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
                    <Navbar loginPage />
                    <Login />
                </Route>
                <Route exact path={"/:userType/dashboard"}>
                    <Navbar />
                    <Dashboard />
                </Route>
                <Route exact path={"/:userType/rooms"}>
                    <Navbar />
                    <Rooms />
                </Route>
                <Route exact path={"/:userType/notifications"}>
                    <Navbar />
                    <Notifications />
                </Route>
                <Route exact path={"/:userType/settings"}>
                    <Navbar />
                    <Settings />
                </Route>
                <Route exact path={"/:userType/settings/account/password"}>
                    <Navbar />
                    <ChangePassword />
                </Route>
                <Route exact path={"/:userType/settings/groups"}>
                    <Navbar />
                    <EditGroups />
                </Route>
                <Route
                    exact
                    path={"/:userType/settings/preferences/confidentiality"}
                >
                    <Navbar />
                    <EditConfidentiality />
                </Route>
                <Route exact path={"/:userType/settings/preferences/cgu"}>
                    <Navbar />
                    <Cgu />
                </Route>
                <Route>
                    <Navbar />
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
