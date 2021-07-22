import React, { useState } from "react";

import clsx from "clsx";

import { RoomType } from "types";

import {
    useApiBookingFromARoomQuery,
    useApiGetBokingByRoomIdQuery,
} from "services/api/api";

import styles from "features/roomsList/RoomCard.module.scss";

import { ReactComponent as ArrowUp } from "assets/images/bi_three-dots.svg";
import { ReactComponent as ArrowDown } from "assets/images/arrowDown.svg";

type RoomProps = { room: RoomType; key: number };

const RoomCard = ({ room, key }: RoomProps): JSX.Element => {
    const [isOpen, setOpen] = useState(false);

    const { nameRoom, nbPlace, freeAccess, id_room } = room;

    const { data, isLoading } = useApiBookingFromARoomQuery(nameRoom);
    const { data: roomBooking, isLoading: roomBookingLoading } =
        useApiGetBokingByRoomIdQuery(id_room);
    const getIsFull = () => {
        if (roomBooking && roomBooking.data)
            for (const key in roomBooking.data) {
                if (roomBooking.data[key] === false) return false;
            }
        return true;
    };
    const isFull = getIsFull();

    const addColor = () => {
        if (freeAccess) {
            return "yellow";
        } else {
            //@ts-ignore
            if (data && data.status[0] !== "oui") {
                return "red";
            } else {
                return "green";
            }
        }
    };

    return (
        <div key={key} className={styles.accordion}>
            <div
                className={clsx(
                    styles.title,
                    isOpen && styles.isOpen,
                    styles[addColor()]
                )}
                onClick={() => setOpen(!isOpen)}
            >
                <h2>{nameRoom}</h2>
                <div className={clsx(styles.endIcons, styles[addColor()])}>
                    <h2>?/{nbPlace}</h2>
                    {isOpen && <ArrowUp className={styles.icon} />}
                    {!isOpen && <ArrowDown />}
                </div>
            </div>
            <div
                className={clsx(
                    styles.content,
                    isOpen && styles.collapsed,
                    styles[addColor()]
                )}
            >
                <div className={clsx(styles.items, styles[addColor()])}>
                    {addColor() === "green" && (
                        <>
                            <p>Aucune réservation programmée</p>
                            <button className={styles[addColor()]}>
                                réserver
                            </button>
                        </>
                    )}
                    {addColor() === "red" && (
                        <>
                            <ul>
                                {data &&
                                    data.status.map((booking) => (
                                        <li key={booking.id_booking}>
                                            Réservée de : {booking.start}h à{" "}
                                            {booking.end}h
                                        </li>
                                    ))}
                                {isLoading && roomBookingLoading && (
                                    <p>Loading</p>
                                )}
                            </ul>
                            <button
                                className={styles[addColor()]}
                                disabled={isFull}
                            >
                                Réserver
                            </button>
                        </>
                    )}
                    {addColor() === "yellow" && (
                        <p>Cette salle est à accès libre.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
