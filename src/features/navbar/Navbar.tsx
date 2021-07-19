import React from "react";

import styles from "./Navbar.module.scss";

import { ReactComponent as Home } from "assets/images/bytesize_home.svg";
import { ReactComponent as User } from "assets/images/carbon_user-filled.svg";
import { ReactComponent as Alert } from "assets/images/fluent_alert-24-filled.svg";
import { ReactComponent as Door } from "assets/images/fluent_conference-room-24-filled.svg";

const Navbar = (): JSX.Element => {
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
