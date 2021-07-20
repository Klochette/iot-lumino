import React from "react";
import { RoomType } from "types";
import styles from "./ModalDelete.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/closeModalIcon.svg";

type ModalDeleteType = {
    room: RoomType;
    onClick: (
        e: React.MouseEvent<
            SVGSVGElement | HTMLDivElement | HTMLButtonElement,
            MouseEvent
        >
    ) => void;
};

const ModalDelete = ({ room, onClick }: ModalDeleteType): JSX.Element => {
    return (
        <div className={styles.modal} onClick={onClick}>
            <div
                className={styles.modal_main}
                onClick={(e) => e.stopPropagation()}
            >
                <CloseIcon onClick={onClick} className={styles.icon} />
                <div className={styles.bookedRoomImg}>
                    <p>{room.nameRoom}</p>
                </div>
                <h2>Souhaitez-vous annuler la réservation ?</h2>
                <div className={styles.divider}></div>
                <p className={styles.cancel}>Annuler la réservation</p>
                <button className={styles.keep} onClick={onClick}>
                    Garder la réservation
                </button>
            </div>
        </div>
    );
};

export default ModalDelete;
