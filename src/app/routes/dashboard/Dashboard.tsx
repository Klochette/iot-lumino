import React from "react";
import styles from "./Dashboard.module.scss";
import { ReactComponent as ProfilPicture } from "assets/images/profil_pic-nexus.svg";
import { useAppSelector } from "app/store";
import StudentDashboard from "features/studentDashboard/StudentDashboard";

const Dashboard = (): JSX.Element => {
    const { userType, identifier } = useAppSelector((state) => state.user);

    return (
        <section className={styles.homeSection}>
            <header className={styles.headerHome}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        <strong className={styles.titleBold}>Bonjour,</strong>
                        <br />
                        {userType === "admin" ? "Admin" : identifier}
                        &nbsp;
                        {userType === "admin" ? "🍓" : "👋"}
                    </h1>
                </div>
                <ProfilPicture className={styles.profilPicture} />
            </header>
            {userType === "student" && <StudentDashboard />}
        </section>
    );
};

export default Dashboard;
