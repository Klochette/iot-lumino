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

import { Link } from "react-router-dom";
import { useAppSelector } from "app/store";
import { useState } from "react";

const Navbar = (): JSX.Element => {
    const { userType } = useAppSelector((state) => state.user);
    const [location, setLocation] = useState<string|undefined>('dashboard');

    return (
        <div className={styles.navbar}>
            <Link onClick={() => setLocation('dashboard')} to={`/${userType}/dashboard`}>
                {location === 'dashboard' ?
                    <HomeFilled /> : <Home />
                }
            </Link>{" "}
            <Link onClick={() => setLocation('rooms')} to={`/${userType}/rooms`}>
                {location === 'rooms' ?
                    <DoorFilled /> : <Door />
                }
            </Link>{" "}
            <Link onClick={() => setLocation('notifications')} to={`/${userType}/notifications`}>
                {location === 'notifications' ?
                    <AlertFilled /> : <Alert />
                }
            </Link>{" "}
            <Link onClick={() => setLocation('settings')} to={`/${userType}/settings`}>
                {location === 'settings' ?
                    <UserFilled /> : <User />
                }
            </Link>
        </div>
    );
};

export default Navbar;
