import { useAppSelector } from "app/store";
import { SwitchTheme } from "features/switchTheme/SwitchTheme";
import React from "react";
import styles from "./Navbar.module.scss";
import clsx from "clsx";

const Navbar = (): JSX.Element => {
    const { isDarkMode } = useAppSelector((state) => state.switchTheme);
    return (
        <div className={clsx(styles.navbar, isDarkMode && styles.dark)}>
            <div className={styles.switch}>
                🌞
                <SwitchTheme />
                🌙
            </div>
        </div>
    );
};

export default Navbar;
