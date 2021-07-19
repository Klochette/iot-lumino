import React from "react";

import styles from "./Navbar.module.scss";

import { ReactComponent as Home } from "assets/images/bytesize_home.svg";
import { ReactComponent as User } from "assets/images/carbon_user-filled.svg";
import { ReactComponent as Alert } from "assets/images/fluent_alert-24-filled.svg";
import { ReactComponent as Door } from "assets/images/fluent_conference-room-24-filled.svg";
import { Link } from "react-router-dom";
import { useAppSelector } from "app/store";

const Navbar = (): JSX.Element => {
    const { userType } = useAppSelector((state) => state.user);

    return (
        <div className={styles.navbar}>
            <Link to={`/${userType}/dashboard`}>
                <Home />
            </Link>{" "}
            <Link to={`/${userType}/rooms`}>
                <Door />
            </Link>{" "}
            <Link to={`/${userType}/notifications`}>
                <Alert />
            </Link>{" "}
            <Link to={`/${userType}/settings`}>
                <User />
            </Link>
        </div>
    );
};

export default Navbar;
