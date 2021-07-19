import { useAppDispatch, useAppSelector } from "app/store";
import SwitchTheme from "features/switchTheme/SwitchTheme";
import React from "react";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { logout } from "features/user/userSlice";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "assets/images/bytesize_home.svg";
import { ReactComponent as User } from "assets/images/carbon_user-filled.svg";
import { ReactComponent as Alert } from "assets/images/fluent_alert-24-filled.svg";
import { ReactComponent as Door } from "assets/images/fluent_conference-room-24-filled.svg";

const Navbar = (): JSX.Element => {
    const { isDarkMode } = useAppSelector((state) => state.switchTheme);

    return (
        <div className={styles.navbar}>
            <Home />
            <Door />
            <Alert />
            <User />
        </div>
    );
};

export default Navbar;
