import { useAppDispatch } from "app/store";
import React from "react";
import { toggleTheme } from "./SwitchThemeSlice";

export const SwitchTheme = (): JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <button onClick={() => dispatch(toggleTheme())}>toggle theme</button>
    );
};
