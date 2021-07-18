import React, { useState } from "react";

import style from "commons/switch/Switch.module.scss";
import clsx from "clsx";

type SwitchType = {
    isChecked: boolean;
    onSwitch?: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const Switch = ({ onSwitch, isChecked }: SwitchType): JSX.Element => {
    return (
        <label className={style.switch}>
            <input type="checkbox" onClick={onSwitch} checked={isChecked} />
            <span className={clsx(style.slider, style.round)}></span>
        </label>
    );
};

export default Switch;
