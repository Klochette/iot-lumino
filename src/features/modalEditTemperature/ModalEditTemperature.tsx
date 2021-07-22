import React from "react";
import styles from "./ModalEditTemperature.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/closeModalIcon.svg";
import { CircleSlider } from "react-circle-slider";

type ModalEditTemperatureType = {
    rooms?: number[];
    onClick: (
        e: React.MouseEvent<
            SVGSVGElement | HTMLDivElement | HTMLButtonElement,
            MouseEvent
        >,
        confirm?: boolean
    ) => void;
};

const ModalEditTemperature = ({
    rooms,
    onClick,
}: ModalEditTemperatureType): JSX.Element => {
    return (
        <div className={styles.modal} onClick={onClick}>
            <div
                className={styles.modal_main}
                onClick={(e) => e.stopPropagation()}
            >
                <CloseIcon onClick={onClick} className={styles.icon} />
                <h2>Modifier la température des salles</h2>
                <CircleSlider
                    min={0}
                    max={40}
                    knobRadius={15}
                    showTooltip={true}
                    gradientColorFrom="#F38181"
                    gradientColorTo="#F38181"
                    knobColor="#8FB8DE"
                    progressWidth={5}
                    value={21}
                />
                <button
                    className={styles.keep}
                    onClick={(e) => onClick(e, true)}
                >
                    Modifier
                </button>
                <p className={styles.cancel} onClick={onClick}>
                    Annuler
                </p>
            </div>
        </div>
    );
};

export default ModalEditTemperature;
