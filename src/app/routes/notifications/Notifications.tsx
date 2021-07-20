import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Notifications.module.scss";
import { ReactComponent as Leaf } from "assets/images/leafNotification.svg";
import { ReactComponent as RedDots } from "assets/images/three-dots.svg";
import { ReactComponent as Chevron } from "assets/images/bi_three-dots.svg";

const Notifications = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return (
        <section className={styles.notifications}>
            <h1 className={styles.title}>Notifications</h1>
            {/* <div className={styles.contentContainer}>
                <Leaf className={styles.leaf} />
                <p className={styles.textNoNotification}>
                    Vous n'avez aucune notification pour le moment.
                </p>
            </div> */}
            <div className={styles.notificationNew}>
                <h2>Nouveau</h2>
                <div className={styles.notificationCard}>
                    <div className={styles.cardRoom}>
                        <p>A005</p>
                    </div>
                    <div className={styles.cardRightBlock}>
                        <p className={styles.cardMessage}>
                            C'est bon mon petit pote, ta salle a bien été
                            réservé.
                        </p>
                        <p className={styles.cardTime}>5 min</p>
                    </div>
                    <RedDots className={styles.cardDots} />
                </div>
                <div className={styles.notificationOld}>
                    <h2>Ancien</h2>
                    <Chevron className={styles.chevron} />
                </div>
            </div>
        </section>
    );
};

export default Notifications;
