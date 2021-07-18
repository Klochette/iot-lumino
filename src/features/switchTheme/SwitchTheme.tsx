import React from "react";
import { useAppDispatch, useAppSelector } from "app/store";
import Switch from "commons/switch/Switch";
import { toggleTheme } from "./SwitchThemeSlice";
import { useState } from "react";

export const SwitchTheme = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { isDarkMode } = useAppSelector((state) => state.switchTheme);
    const [isChecked, setIsChecked] = useState(isDarkMode);

    const onSwitchClick = (e: any) => {
        setIsChecked(!isDarkMode);
        dispatch(toggleTheme());
    };

    return <Switch onSwitch={onSwitchClick} isChecked={isChecked} />;
};
