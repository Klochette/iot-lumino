import React from "react";
import { useAppDispatch } from "app/store";
import Switch from "commons/switch/Switch";
import { toggleTheme } from "./SwitchThemeSlice";

export const SwitchTheme = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const onSwitchClick = () => {
        dispatch(toggleTheme());
    };

    return <Switch onSwitch={onSwitchClick} />;
};
