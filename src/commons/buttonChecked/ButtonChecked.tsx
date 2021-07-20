import React from "react";

import clsx from "clsx";

import styles from "commons/buttonChecked/ButtonChecked.module.scss";

import { ReactComponent as CheckedIcon } from "assets/images/checkedIcon.svg";

type ButtonCheckedType = {
    label: string;
    labelFor: string;
    checked: boolean;
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ButtonChecked = ({
    label,
    labelFor,
    checked,
    onClick,
}: ButtonCheckedType): JSX.Element => {
    return (
        <label
            htmlFor={labelFor}
            className={clsx(styles.input, checked && styles.checked)}
        >
            <input
                onChange={onClick}
                checked={checked}
                type="checkbox"
                id={labelFor}
                value={labelFor}
                name="filter"
            />
            {label}
            {checked && <CheckedIcon className={styles.icon} />}
        </label>
    );
};

export default ButtonChecked;
