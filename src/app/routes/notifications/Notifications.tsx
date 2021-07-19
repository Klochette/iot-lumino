import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Notifications.module.scss";
import { ReactComponent as Leaf } from "assets/images/leafNotification.svg";

const Notifications = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return (
        <section className={styles.notifications}>
            <h1 className={styles.title}>Notifications</h1>
            <div className={styles.contentContainer}>
                <Leaf className={styles.leaf} />
                <p className={styles.textNoNotification}>
                    Vous n'avez aucune notification pour le moment.
                </p>
            </div>
        </section>
    );
};

export default Notifications;
