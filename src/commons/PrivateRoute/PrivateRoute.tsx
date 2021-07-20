import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { UserType } from "types";

type PrivateRouteType = {
    userType?: UserType;
    component: JSX.Element;
};

const PrivateRoute = ({
    userType,
    component,
}: PrivateRouteType): JSX.Element => {
    const { userType: paramUser } = useParams<{ userType?: UserType }>();

    if (!userType) {
        return <Redirect to={"/login"} />;
    } else if (userType !== paramUser) {
        return <Redirect to="/notFound" />;
    } else {
        return component;
    }
};

export default PrivateRoute;
