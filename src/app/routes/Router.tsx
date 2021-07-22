import { useAppSelector } from "app/store";
import PrivateRoute from "commons/PrivateRoute/PrivateRoute";
import Navbar from "features/navbar/Navbar";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Cgu from "./CGU/CGU";
import ChangePassword from "./changePassword/ChangePassword";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import NotFound from "./notFound/NotFound";
import Notifications from "./notifications/Notifications";
import Rooms from "./rooms/Rooms";
import BookARoom from "./room/BookARoom";

import Settings from "./settings/Settings";

const Router = (): JSX.Element => {
    const { userType } = useAppSelector((state) => state.user);
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path={"/"}>
                    <Redirect to={"/login"} />
                </Route>
                <Route exact path={"/login"}>
                    {userType ? (
                        <Redirect to={`${userType}/dashboard`} />
                    ) : (
                        <Login />
                    )}
                </Route>
                <Route exact path={"/:userType/dashboard"}>
                    <PrivateRoute
                        userType={userType}
                        component={<Dashboard />}
                    />
                </Route>
                <Route exact path={"/:userType/rooms"}>
                    <PrivateRoute userType={userType} component={<Rooms />} />
                </Route>
                <Route exact path={"/:userType/rooms/:nameRoom/:idRoom/book"}>
                    <PrivateRoute
                        userType={userType}
                        component={<BookARoom />}
                    />
                </Route>
                <Route exact path={"/:userType/notifications"}>
                    <PrivateRoute
                        userType={userType}
                        component={<Notifications />}
                    />
                </Route>
                <Route exact path={"/:userType/settings"}>
                    <PrivateRoute
                        userType={userType}
                        component={<Settings />}
                    />
                </Route>
                <Route exact path={"/:userType/settings/account/password"}>
                    <PrivateRoute
                        userType={userType}
                        component={<ChangePassword />}
                    />
                </Route>
                <Route exact path={"/:userType/settings/preferences/cgu"}>
                    <PrivateRoute userType={userType} component={<Cgu />} />
                </Route>
                <Route exact path={"/notFound"}>
                    <NotFound />
                </Route>
                <Route>
                    <Redirect to="/notFound" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
