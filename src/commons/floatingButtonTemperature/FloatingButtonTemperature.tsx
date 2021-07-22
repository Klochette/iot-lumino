import React from "react";
import styles from "./FloatingButtonTemperature.module.scss";
import { ReactComponent as IconTemperature } from "assets/images/iconTemperature.svg";
import { ReactComponent as IconTemperatureDisabled } from "assets/images/iconTemperatureDisable.svg";
import clsx from "clsx";

type FloatingButtonTemperatureType = {
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const FloatingButtonTemperature = ({
    onClick,
    disabled,
}: FloatingButtonTemperatureType): JSX.Element => {
    return (
        <div
            className={clsx(styles.button, disabled && styles.disabled)}
            onClick={onClick}
        >
            {disabled ? <IconTemperatureDisabled /> : <IconTemperature />}
        </div>
    );
};

export default FloatingButtonTemperature;
