import React from "react";
import DashboardAdminCard from "./DashboardAdminCard";
import styles from "./AdminDashboard.module.scss";
import { ReactComponent as Light } from "assets/images/ic_outline-light.svg";
import { Link } from "react-router-dom";
import { CircleSlider } from "react-circle-slider";
import { useState } from "react";

const AdminDashboard = (): JSX.Element => {
    const [value, setValue] = useState(0);

    const onChangeValue = (e: number) => {
        setValue(e);
    };

    return (
        <>
            <DashboardAdminCard variant="dark">
                <>
                    <div className={styles.turnOffLights}>
                        <h2>Éteindre toutes les lumières ?</h2>
                        <button>Éteindre</button>
                    </div>
                    <Light className={styles.iconLight} />
                </>
            </DashboardAdminCard>
            <DashboardAdminCard variant="light">
                <h2>Température</h2>
                <p>Changer la température de toutes les salles</p>
                <div className={styles.slider}>
                    <CircleSlider
                        min={0}
                        max={40}
                        knobRadius={15}
                        showTooltip={true}
                        gradientColorFrom="#F38181"
                        gradientColorTo="#F38181"
                        knobColor="#8FB8DE"
                        progressWidth={5}
                        value={value}
                        onChange={onChangeValue}
                    />
                </div>
                <button>Confirmer</button>
            </DashboardAdminCard>
            <DashboardAdminCard variant="light">
                <h2>Paramètres des salles</h2>
                <Link to={"/admin/rooms"}>
                    <button>Configurer</button>
                </Link>
            </DashboardAdminCard>
        </>
    );
};

export default AdminDashboard;
