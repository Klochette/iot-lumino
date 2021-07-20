import React, { useState } from "react";
import styles from "./RoomCard.module.scss";
import { ReactComponent as ArrowUp } from "assets/images/bi_three-dots.svg";
import clsx from "clsx";
import {
    useApiBookARoomMutation,
    useApiBookingFromARoomQuery,
} from "services/api/api";

//type RoomProps = { room: RoomType };
type RoomProps = { room: any };

const RoomCard = ({ room }: RoomProps): JSX.Element => {
    const { nameRoom, nbPlace, isBooked, freeAccess } = room;
    const [isOpen, setOpen] = useState(false);
    const { data, isLoading } = useApiBookingFromARoomQuery(nameRoom);
    const [bookARoom] = useApiBookARoomMutation();
    const addColor = () => {
        if (freeAccess) {
            return "yellow";
        } else {
            if (isBooked) {
                return "red";
            } else {
                return "green";
            }
        }
    };

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
                    styles[addColor()]
                )}
                onClick={() => setOpen(!isOpen)}
            >
                <h2>{nameRoom}</h2>
                <div className={clsx(styles.endIcons, styles[addColor()])}>
                    <h2>?/{nbPlace}</h2>
                    <ArrowUp />
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
                            <button
                                className={styles[addColor()]}
                                onClick={bookARoomFunction}
                            >
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
                                {isLoading && <p>Loading</p>}
                            </ul>
                            <button className={styles[addColor()]}>
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
