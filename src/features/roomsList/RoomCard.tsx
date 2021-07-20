import React from "react";
import styles from "./RoomCard.module.scss";
import { ReactComponent as ArrowUp } from "assets/images/bi_three-dots.svg";
import clsx from "clsx";
import {
    useApiBookARoomMutation,
    useApiBookingFromARoomQuery,
} from "services/api/api";

import { RoomType } from "types";
import { useState } from "react";

type RoomProps = { room: RoomType };

export const Room = ({ room }: RoomProps): JSX.Element => {
    const { nameRoom, nbPlace, isBooked } = room;
    const [isOpen, setOpen] = useState(false);
    const { data, isLoading } = useApiBookingFromARoomQuery(nameRoom);
    const [bookARoom] = useApiBookARoomMutation();
    const color = isBooked === 1 ? "red" : nbPlace ? "yellow" : "green";

    const bookARoomFunction = async () => {
        try {
            const args = {
                start: "8",
                end: "9",
                nameRoom,
                studentEmail: "nawel.berrichi@hetic.net",
            };
            const bookedRoomFunction = await bookARoom(args).unwrap();
            console.log(bookedRoomFunction);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.accordion}>
            <div
                className={clsx(
                    styles.title,
                    isOpen && styles.isOpen,
                    styles[color]
                )}
                onClick={() => setOpen(!isOpen)}
            >
                <h2>{nameRoom}</h2>
                <div className={clsx(styles.endIcons, styles[color])}>
                    <h2>?/{nbPlace}</h2>
                    <ArrowUp />
                </div>
            </div>
            <div
                className={clsx(
                    styles.content,
                    isOpen && styles.collapsed,
                    styles[color]
                )}
            >
                <div className={clsx(styles.items, styles[color])}>
                    {isBooked === 1 && (
                        <>
                            <p>Aucune réservation programmée</p>
                            <button
                                className={styles[color]}
                                onClick={bookARoomFunction}
                            >
                                réserver
                            </button>
                        </>
                    )}
                    {isBooked === 0 && (
                        <>
                            <ul>
                                {data &&
                                    data.status.map((booking) => (
                                        <li>
                                            Réservée de : {booking.start}h à{" "}
                                            {booking.end}h
                                        </li>
                                    ))}
                            </ul>
                            <button className={styles[color]}>Réserver</button>
                        </>
                    )}
                    {isBooked === 2 && <p>Cette salle est à accès libre.</p>}
                </div>
            </div>
        </div>
    );
};
