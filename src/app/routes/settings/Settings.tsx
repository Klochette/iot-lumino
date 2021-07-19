import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Settings.module.scss";
import { ReactComponent as Pdp } from "assets/images/pdp.svg";
import { useAppSelector } from "app/store";
import { ReactComponent as LuminoLogo } from "assets/images/logoLumino.svg";
import { ReactComponent as NexusLogo } from "assets/images/logoNexus.svg";

const Settings = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    const {identifier, email} = useAppSelector((state) => state.user)
    return (
    <section className={styles.container}>
        <div className={styles.header}>
            <div className = {styles.title}>Profil</div>
            <Pdp className={styles.picture}/>
        </div>
        <div className = {styles.info}>
            <div className={styles.name}>{identifier}</div>
            <div className={styles.mail}>{email}</div>
        </div>
        <div className = {styles.settings}>
            <div className={styles.account}>
                <p>Compte</p>
                <div className={styles.password}>Changer de mot de passe</div>
            </div>
            <div className={styles.groups}></div>
            <div className={styles.notifications}></div>
            <div className={styles.preferences}></div>
            <div className={styles.disconnect}></div>
            <div className={styles.credits}>
                <LuminoLogo className={styles.luminoLogo} />
                <NexusLogo />
                <p>Made with 💛&nbsp;by Lumino</p>
            </div>

        </div>
    </section>
    );
};

export default Settings;
