import React from "react";
import { RoomType } from "types";
import styles from "./ModalDelete.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/closeModalIcon.svg";

type ModalDeleteType = {
    room: RoomType;
    title?: string;
    keep: string;
    onClick?: (
        e: React.MouseEvent<
            SVGSVGElement | HTMLDivElement | HTMLButtonElement,
            MouseEvent
        >,
        confirmed?: boolean,
        idBooking?: number
    ) => void;
};

const ModalDelete = ({
    room,
    title,
    onClick,
    keep,
}: ModalDeleteType): JSX.Element => {
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
                <h2>{title}</h2>
                <div className={styles.divider}></div>
                <p
                    className={styles.cancel}
                    onClick={(e) =>
                        onClick && onClick(e, true, room?.id_booking)
                    }
                >
                    Annuler la réservation
                </p>
                <button className={styles.keep} onClick={onClick}>
                    {keep}
                </button>
            </div>
        </div>
    );
};

export default ModalDelete;
