import React from "react";

import styles from "./DashboardEmptyCards.module.scss";

import { ReactComponent as Leaf } from "assets/images/leafNotification.svg";

type DashboardEmptyCardType = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    text: string;
    buttonText?: string;
};

const DashboardEmptyCard = ({
    onClick,
    text,
    buttonText,
}: DashboardEmptyCardType): JSX.Element => {
    return (
        <div className={styles.whiteCard}>
            <Leaf className={styles.leaf} />
            <h2 className={styles.whiteCardTitle}>{text}</h2>
            {buttonText && (
                <button onClick={onClick} className={styles.whiteCardButton}>
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default DashboardEmptyCard;
