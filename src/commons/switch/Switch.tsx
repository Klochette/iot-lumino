import React from "react";

import style from "commons/switch/Switch.module.scss";
import clsx from "clsx";

type SwitchType = {
    onSwitch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Switch = ({ onSwitch }: SwitchType): JSX.Element => {
    return (
        <label className={style.switch}>
            <input type="checkbox" onChange={onSwitch} />
            <span className={clsx(style.slider, style.round)}></span>
        </label>
    );
};

export default Switch;
