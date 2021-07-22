import React from "react";
import styles from "./DashboardGroup.module.scss";
import bastien from "assets/images/bastien.png";
import aurore from "assets/images/aurore.png";
import quentinG from "assets/images/quentinG.png";
import reda from "assets/images/reda.png";
import quentinT from "assets/images/quentinT.png";
import guillaume from "assets/images/guillaume.png";

const DashboardGroup = (): JSX.Element => {
    return (
        <section className={styles.whiteCard}>
            <div className={styles.wrapperTop}>
                <h2 className={styles.whiteCardTitle}>Mes groupes</h2>
            </div>
            <div className={styles.wrapperTopGroup}>
                <div className={styles.wrapperGroupName}>
                    <div className={styles.groupName}>FLX</div>
                </div>
                <div className={styles.wrappperAfter}>
                    <div className={styles.peopleGroup}>
                        <div className={styles.people}>
                            <img
                                className={styles.profilPic}
                                alt="de profil"
                                src={bastien}
                            />
                            <p className={styles.peopleName}>
                                Bastien
                                <br /> BAQUIER
                            </p>
                        </div>
                        <div className={styles.people}>
                            <img
                                className={styles.profilPic}
                                alt="de profil"
                                src={quentinG}
                            />
                            <p className={styles.peopleName}>
                                Quentin
                                <br /> GANCHER
                            </p>
                        </div>
                        <div className={styles.people}>
                            <img
                                className={styles.profilPic}
                                alt="de profil"
                                src={aurore}
                            />
                            <p className={styles.peopleName}>
                                Aurore
                                <br /> VILAR
                            </p>
                        </div>
                        <div className={styles.people}>
                            <img
                                className={styles.profilPic}
                                alt="de profil"
                                src={quentinT}
                            />
                            <p className={styles.peopleName}>
                                Quentin
                                <br /> PERDU
                            </p>
                        </div>
                        <div className={styles.people}>
                            <img
                                className={styles.profilPic}
                                alt="de profil"
                                src={guillaume}
                            />
                            <p className={styles.peopleName}>
                                Guillaume
                                <br />
                                RAK-LECER
                            </p>
                        </div>
                        <div className={styles.people}>
                            <img
                                className={styles.profilPic}
                                alt="de profil"
                                src={reda}
                            />
                            <p className={styles.peopleName}>
                                Reda
                                <br /> HAMOUFE
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DashboardGroup;
