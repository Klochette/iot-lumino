import React from "react";
import styles from "./Dashboard.module.scss";
import { ReactComponent as ProfilPicture } from "assets/images/profil_pic-nexus.svg";
import { ReactComponent as CloseIcon } from "assets/images/close-circle.svg";

const Dashboard = (): JSX.Element => {
    return (
        <section className={styles.homeSection}>
            <header className={styles.headerHome}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        <strong className={styles.titleBold}>Bonjour,</strong>
                        <br />
                        Gros bogosse
                    </h1>
                </div>
                <ProfilPicture className={styles.profilPicture} />
            </header>
            <div className={styles.bookedRoom}>
                <h2>Salle réservée</h2>
                <div className={styles.containerBookedRoom}>
                    <div className={styles.bookedRoomImg}>
                        <p>A105</p>
                        <CloseIcon className={styles.closeIcon} />
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.pictoGroupe}>
                            <p>KTA</p>
                        </div>
                        <button className={styles.buttonGroupe}>
                            Partager la salle au groupe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
