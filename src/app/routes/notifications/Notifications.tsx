import React from "react";
import styles from "./Notifications.module.scss";
import { ReactComponent as RedDots } from "assets/images/three-dots.svg";

const Notifications = (): JSX.Element => {
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
                            Votre salle a bien été réservé de 13h à 17h.
                        </p>
                        <p className={styles.cardTime}>5 min</p>
                    </div>
                    <RedDots className={styles.cardDots} />
                </div>
                <div className={styles.notificationOld}>
                    <h2>Ancien</h2>
                </div>
                <div className={styles.notificationCard}>
                    {/* A CHANGER */}
                    <div className={styles.cardRoom}>
                        <p>A005</p>
                    </div>

                    <div className={styles.cardRightBlock}>
                        <p className={styles.cardMessage}>
                            Bastien Baquier vous invite à rejoindre le groupe
                            Fluxéo.
                        </p>
                        <p className={styles.cardTime}>22 h</p>
                    </div>
                    <RedDots className={styles.cardDots} />
                </div>
                <div className={styles.notificationCard}>
                    <div className={styles.cardRoomBooked}>
                        <p>B111</p>
                    </div>
                    <div className={styles.cardRightBlock}>
                        <p className={styles.cardMessage}>
                            Vous avez annulé la réservation de la salle B111.
                        </p>
                        <p className={styles.cardTime}>2 j</p>
                    </div>
                    <RedDots className={styles.cardDots} />
                </div>
                <div className={styles.notificationCard}>
                    <div className={styles.cardRoomBooked}>
                        <p>A006</p>
                    </div>
                    <div className={styles.cardRightBlock}>
                        <p className={styles.cardMessage}>
                            Votre reservation se termine dans 10min.
                        </p>
                        <p className={styles.cardTime}>1 s</p>
                    </div>
                    <RedDots className={styles.cardDots} />
                </div>
            </div>
        </section>
    );
};

export default Notifications;
