import React from "react";

import styles from "./DashboardEmptyCards.module.scss";

import { ReactComponent as Leaf } from "assets/images/leafNotification.svg";
import { Link } from "react-router-dom";

type DashboardEmptyCardType = {
    link?: string;
    text: string;
    buttonText?: string;
};

const DashboardEmptyCard = ({
    link,
    text,
    buttonText,
}: DashboardEmptyCardType): JSX.Element => {
    return (
        <div className={styles.whiteCard}>
            <Leaf className={styles.leaf} />
            <h2 className={styles.whiteCardTitle}>{text}</h2>
            {buttonText && link && (
                <Link to={link}>
                    <button className={styles.whiteCardButton}>
                        {buttonText}
                    </button>
                </Link>
            )}
            {buttonText && !link && (
                <button className={styles.whiteCardButton}>{buttonText}</button>
            )}
        </div>
    );
};

export default DashboardEmptyCard;
