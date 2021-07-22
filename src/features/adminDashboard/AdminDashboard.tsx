import React, { useRef } from "react";
import DashboardAdminCard from "./DashboardAdminCard";
import styles from "./AdminDashboard.module.scss";
import { ReactComponent as Light } from "assets/images/ic_outline-light.svg";
import { Link } from "react-router-dom";
import { CircleSlider } from "react-circle-slider";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/store";
import { toogleLight } from "features/lights/LightsSlice";
import ModalConfirmed from "features/modalConfirmed/ModalModalConfirmed";

const AdminDashboard = (): JSX.Element => {
    const [value, setValue] = useState(0);
    const dispatch = useAppDispatch();
    const { isOn } = useAppSelector((state) => state.lights);
    const [counter, setCounter] = useState(4);

    const [confirmed, setConfirmed] = useState(false);

    const onChangeValue = (e: number) => {
        setValue(e);
    };

    const countRef = useRef(null);

    const handleLights = () => {
        setCounter(counter - 1);
        //@ts-ignore
        countRef.current = setInterval(() => {
            //@ts-ignore
            setCounter((timer) => {
                if (timer > 0) return timer - 1;
            });
        }, 1000);
        setTimeout(() => {
            dispatch(toogleLight());
            //@ts-ignore
            clearInterval(countRef.current);
            setCounter(4);
        }, 5000);
    };

    return (
        <>
            <DashboardAdminCard variant="dark">
                <>
                    <div className={styles.turnOffLights}>
                        {isOn && counter === 4 && (
                            <>
                                <h2>Éteindre toutes les lumières ?</h2>
                                <button onClick={handleLights}>Éteindre</button>
                            </>
                        )}
                        {!isOn && counter === 4 && (
                            <>
                                <h2>Allumer toutes les lumières ?</h2>
                                <button onClick={handleLights}>Allumer</button>
                            </>
                        )}
                        {isOn && counter !== 4 && counter !== 0 && (
                            <h2>
                                Toutes les lumières vont s'éteindre dans{" "}
                                <span>{counter}</span>s
                            </h2>
                        )}
                        {!isOn && counter !== 4 && counter !== 0 && (
                            <h2>
                                Toutes les lumières vont s'allumer dans{" "}
                                <span>{counter}</span>s
                            </h2>
                        )}
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
                <button
                    onClick={() => {
                        setConfirmed(true);
                        setTimeout(() => setConfirmed(false), 1500);
                    }}
                >
                    Confirmer
                </button>
            </DashboardAdminCard>
            <DashboardAdminCard variant="light">
                <h2>Paramètres des salles</h2>
                <Link to={"/admin/rooms"}>
                    <button>Configurer</button>
                </Link>
            </DashboardAdminCard>
            {confirmed && <ModalConfirmed />}
        </>
    );
};

export default AdminDashboard;
