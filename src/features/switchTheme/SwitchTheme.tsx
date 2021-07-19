import React from "react";
import { useAppDispatch, useAppSelector } from "app/store";
import Switch from "commons/switch/Switch";
import { toggleTheme } from "./SwitchThemeSlice";

const SwitchTheme = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { isDarkMode } = useAppSelector((state) => state.switchTheme);

    const onSwitchClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked && !isDarkMode) {
            dispatch(toggleTheme());
        } else if (!e.target.checked && isDarkMode) {
            dispatch(toggleTheme());
        }
    };

    return <Switch onSwitch={onSwitchClick} />;
};

export default SwitchTheme;
