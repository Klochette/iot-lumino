import React, { useEffect } from "react";
import styles from "./Room.module.scss";
import { useState } from "react";
import {
    useApiBookARoomMutation,
    useApiGetBokingByRoomIdQuery,
} from "services/api/api";

import Loader from "commons/loader/Loader";

import clsx from "clsx";

const BookARoom = (): JSX.Element => {
    const { data, isLoading } = useApiGetBokingByRoomIdQuery(4);
    const [bookARoomPost] = useApiBookARoomMutation();
    const [isBooked, setIsBooked] = useState(data?.data);

    const [start, setStart] = useState<number | undefined>();
    const [end, setEnd] = useState<number | undefined>();

    const bookARoom = async () => {
        try {
            if (start && end) {
                const a = start.toString();
                const b = end.toString();
                const booking = {
                    start: a,
                    end: b,
                    nameRoom: "A105",
                    studentEmail: "nawel.borini@hetic.net",
                };
                await bookARoomPost(booking).unwrap();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [error, setError] = useState<Boolean | undefined>(false);

    const fixStartEnd = (int: any) => {
        if (start !== undefined && Number(int) > start) {
            console.log(int, start);
            setEnd(int);
        }

        if (start === undefined || Number(int) < start) {
            setStart(int);
        }

        if (end === Number(int)) {
            for (const keys in isBooked) {
                if (
                    start &&
                    end &&
                    isBooked[keys] === "userBooked" &&
                    Number(keys) > start &&
                    Number(keys) < end
                ) {
                    setEnd(Number(keys));
                }
            }
        }
    };

    useEffect(() => {
        if (data && data.data) {
            setIsBooked(data.data);
        }
    }, [data]);

    useEffect(() => {
        for (const keys in isBooked) {
            if (
                start &&
                end &&
                Number(keys) >= start &&
                Number(keys) <= end &&
                isBooked[keys] === false
            ) {
                setIsBooked({ ...isBooked, [Number(keys)]: "userBooked" });
            } else if (
                (start && end && Number(keys) < start) ||
                (start &&
                    end &&
                    Number(keys) > end &&
                    isBooked[keys] === "userBooked")
            ) {
                setIsBooked({ ...isBooked, [Number(keys)]: false });
            }

            if (
                start &&
                end &&
                Number(keys) > start &&
                Number(keys) < end &&
                isBooked[keys] === true
            ) {
                setError(true);
            } else if (
                start &&
                end &&
                Number(keys) > start &&
                Number(keys) < end &&
                isBooked[keys] !== false
            ) {
                setError(false);
            }
        }
    }, [isBooked]);

    return (
        <section className={styles.section}>
            <div className={styles.topWrapper}>
                <div className={styles.topWrapper__book}>
                    <h1>Reservation</h1>
                </div>
                <div className={styles.topWrapper__room}>
                    <p className={styles.room}>Salle</p>
                    <p className={styles.roomName}>A10</p>
                </div>
            </div>
            <div className={styles.bottomWrapper}>
                {error && (
                    <p className={styles.errorMsg}>
                        Ce créneau horaire n'est pas disponible, veuillez en
                        sélectionner un autre.
                    </p>
                )}
                <p className={styles.bottomWrapper__start}>
                    {start === undefined
                        ? "Sélectionnez votre départ"
                        : "Sélectionnez votre arrivée"}
                </p>
                <ul className={styles.bottomWrapper__list}>
                    {isBooked &&
                        Object.keys(isBooked).map(function (key: any, index) {
                            return (
                                <li
                                    className={clsx(
                                        styles.bottomWrapper__listItem,
                                        styles[isBooked[key]]
                                    )}
                                    onClick={() => {
                                        fixStartEnd(Number(key));

                                        isBooked[key] === "userBooked"
                                            ? setIsBooked({
                                                  ...isBooked,
                                                  [key]: false,
                                              })
                                            : setIsBooked({
                                                  ...isBooked,
                                                  [key]: "userBooked",
                                              });
                                    }}
                                >
                                    {key}:00
                                </li>
                            );
                        })}
                </ul>

                <button
                    className={styles.ctn}
                    onClick={() => {
                        bookARoom();
                    }}
                >
                    Réservez
                </button>
            </div>
        </section>
    );
};
export default BookARoom;
