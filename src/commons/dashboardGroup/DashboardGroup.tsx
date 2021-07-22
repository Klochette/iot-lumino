import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import styles from "./DashboardGroup.module.scss";
import { useState } from "react";
import { useApiBookARoomMutation, useApiGetBokingByRoomIdQuery } from "services/api/api";

// import ReactComponent from "*.png"
// import { ReactComponent as Ppl1 }  from "assets/images/ppl1.png";
import { ReactComponent as PeopleFirst } from "assets/images/peopleFirst.svg";
import { ReactComponent as PeopleSecond } from "assets/images/peopleSecond.svg";
import { ReactComponent as PeopleThird } from "assets/images/peopleThird.svg";


const DashboardGroup = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();

    return (
        <section className={styles.whiteCard}>
            <div className={styles.wrapperTop}>
                <h2 className={styles.whiteCardTitle}>Mes groupes</h2>
                <p className={styles.whiteCardEdit}>Éditer</p>
            </div>
            <div className={styles.wrapperTopGroup}>
                <div className={styles.wrapperGroupName}>
                    <div className={styles.groupName}>FLX</div>
                </div>
                <div className={styles.wrappperAfter}>
                    <div className={styles.peopleGroup}>
                        <div className={styles.people}>
                            <PeopleFirst />
                            <p className={styles.peopleName}>Bastien<br /> BAQUIER</p>
                        </div>
                        <div className={styles.people}>
                            <PeopleSecond />
                            <p className={styles.peopleName}>Quentin<br /> GANCHER</p>
                        </div>
                        <div className={styles.people}>
                            <PeopleThird />
                            <p className={styles.peopleName}>Aurore<br /> VILAR</p>
                        </div>
                        <div className={styles.people}>
                            <PeopleFirst />
                            <p className={styles.peopleName}>Quentin<br /> PEDRU</p>
                        </div>
                        <div className={styles.people}>
                            <PeopleSecond />
                            <p className={styles.peopleName}>Guillaume<br /> RAK-LECER</p>
                        </div>
                        <div className={styles.people}>
                            <PeopleThird />
                            <p className={styles.peopleName}>Reda<br /> HANOUCHE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DashboardGroup;