import React from "react";
import styles from "./DashboardAdminCard.module.scss";
import clsx from "clsx";

type DasboardAdminCardType = JSX.ElementChildrenAttribute & {
    variant: "dark" | "light";
};

const DashboardAdminCard = ({
    variant,
    children,
}: DasboardAdminCardType): JSX.Element => {
    return (
        <div className={clsx(styles.cards, styles[variant])}>{children}</div>
    );
};

export default DashboardAdminCard;
