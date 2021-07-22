import React from "react";

import styles from "./Navbar.module.scss";

import { ReactComponent as Home } from "assets/images/bytesize_home.svg";
import { ReactComponent as User } from "assets/images/carbon_user-filled.svg";
import { ReactComponent as Alert } from "assets/images/fluent_alert-24-filled.svg";
import { ReactComponent as Door } from "assets/images/fluent_conference-room-24-filled.svg";

import { ReactComponent as HomeFilled } from "assets/images/homeFilled.svg";
import { ReactComponent as UserFilled } from "assets/images/userFilled.svg";
import { ReactComponent as AlertFilled } from "assets/images/alertFilled.svg";
import { ReactComponent as DoorFilled } from "assets/images/doorFilled.svg";

import { Link, useHistory ,useLocation } from "react-router-dom";
import { useAppSelector } from "app/store";
import { useState } from "react";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";

const Navbar = (): JSX.Element => {
    const { userType } = useAppSelector((state) => state.user);
    const [location, setLocation] = useState<string>('dashboard');
    const currentLocation = useLocation<string|undefined>()

    useEffect(() => {
        setLocation(currentLocation.pathname);
    },[currentLocation])

    return (
        <div className={styles.navbar}>
            <Link to={`/${userType}/dashboard`}>
                {location.includes('dashboard') ?
                    <HomeFilled /> : <Home />
                }
            </Link>{" "}
            <Link to={`/${userType}/rooms`}>
                {location.includes('rooms') ?
                    <DoorFilled /> : <Door />
                }
            </Link>{" "}
            <Link to={`/${userType}/notifications`}>
                {location.includes('notifications') ?
                    <AlertFilled /> : <Alert />
                }
            </Link>{" "}
            <Link to={`/${userType}/settings`}>
                {location.includes('settings') ?
                    <UserFilled /> : <User />
                }
            </Link>
        </div>
    );
};

export default Navbar;
