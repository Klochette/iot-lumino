import { useAppDispatch, useAppSelector } from "app/store";
import SwitchTheme from "features/switchTheme/SwitchTheme";
import React from "react";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { logout } from "features/user/userSlice";
import { Link } from "react-router-dom";

type NavbarProps = {
    loginPage?: boolean;
};

const Navbar = ({ loginPage }: NavbarProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const { isDarkMode } = useAppSelector((state) => state.switchTheme);

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <div className={clsx(styles.navbar, isDarkMode && styles.dark)}>
            <div className={styles.switch}>
                🌞
                <SwitchTheme />
                🌙
            </div>
            {!loginPage && (
                <Link to={"/login"}>
                    <button onClick={onLogout}>Logout</button>
                </Link>
            )}
        </div>
    );
};

export default Navbar;
