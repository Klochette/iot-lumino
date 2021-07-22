import React from "react";
import { RoomType } from "types";
import styles from "./ModalDeleteNotif.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/closeModalIcon.svg";

type ModalDeleteNotifType = {
    room?: RoomType;
    notif?: any;
    title?: string;
    cancel?: string;
    keep?: string;
    onClick?: (
        e: React.MouseEvent<
            SVGSVGElement | HTMLDivElement | HTMLButtonElement,
            MouseEvent
        >,
        confirmed?: boolean,
        idBooking?: number
    ) => void;
    onClickToDelete?: (
        e: React.MouseEvent<
            SVGSVGElement | HTMLDivElement | HTMLButtonElement,
            MouseEvent
        >
    ) => void;
};

const ModalDeleteNotif = ({
    room,
    notif,
    title,
    cancel,
    keep,
    onClick,
    onClickToDelete,
}: ModalDeleteNotifType): JSX.Element => {
    return (
        <div className={styles.modal} onClick={onClick}>
            <div
                className={styles.modal_main}
                onClick={(e) => e.stopPropagation()}
            >
                <CloseIcon onClick={onClick} className={styles.icon} />
                <div className={styles.bookedRoomImg}>
                    <p>{room?.nameRoom ?? notif.room}</p>
                </div>
                <h2>{title}</h2>
                <div className={styles.divider}></div>
                <p className={styles.cancel} onClick={onClickToDelete}>
                    {cancel}
                </p>
                <button className={styles.keep} onClick={onClick}>
                    {keep}
                </button>
            </div>
        </div>
    );
};

export default ModalDeleteNotif;
