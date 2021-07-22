import React, { useEffect } from "react";
import styles from "./Room.module.scss";
import { useState } from "react";
import {
    useApiBookARoomMutation,
    useApiGetBokingByRoomIdQuery,
    useApiGetRoomQuery,
} from "services/api/api";

import Loader from "commons/loader/Loader";

import clsx from "clsx";
import { useHistory, useParams } from "react-router-dom";
import { UserType } from "types";

const BookARoom = (): JSX.Element => {
    const { userType, idRoom, nameRoom } =
        useParams<{ userType?: UserType; idRoom: string; nameRoom: string }>();
    const { data, isLoading } = useApiGetBokingByRoomIdQuery(idRoom);
    const { data: roomData, isLoading: isRoomLoading } =
        useApiGetRoomQuery(idRoom);

    const history = useHistory();
    const [bookARoomPost, { isLoading: isLoadingBookARomm }] =
        useApiBookARoomMutation();
    const [isBooked, setIsBooked] = useState(data?.data);

    const [start, setStart] = useState<number | undefined>();
    const [end, setEnd] = useState<number | undefined>();

    const bookARoom = async () => {
        try {
            if (start) {
                const a = start.toString();
                const b = end?.toString();
                const booking = {
                    start: a,
                    end: b
                        ? (Number(b) + 1).toString()
                        : (Number(a) + 1).toString(),
                    nameRoom: nameRoom,
                    studentEmail: "nawel.borini@hetic.net",
                };
                await bookARoomPost(booking)
                    .unwrap()
                    .then(
                        (onFulfilled) =>
                            onFulfilled &&
                            history.push(`/${userType}/dashboard`)
                    );
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [error, setError] = useState<Boolean | undefined>(false);
    const fixStartEnd = (int: any) => {
        if (start !== undefined && Number(int) > start) {
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
                    <h1>Réservations</h1>
                </div>
                {!isLoading && !isRoomLoading && (
                    <>
                        <div className={styles.topWrapper__room}>
                            <p className={styles.room}>Salle</p>
                            <p className={styles.roomName}>
                                {roomData?.data[0].nameRoom}
                            </p>
                        </div>
                    </>
                )}
            </div>
            {!isLoading && !isRoomLoading && (
                <div className={styles.bottomWrapper}>
                    {error && (
                        <p className={styles.errorMsg}>
                            Ce créneau horaire n'est pas disponible, veuillez en
                            sélectionner un autre.
                        </p>
                    )}
                    <p className={styles.bottomWrapper__start}>
                        {start
                            ? "Sélectionnez votre départ"
                            : "Sélectionnez votre arrivée"}
                    </p>
                    <ul className={styles.bottomWrapper__list}>
                        {isBooked &&
                            Object.keys(isBooked).map(function (
                                key: any,
                                index
                            ) {
                                return (
                                    <li
                                        key={key}
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
                    {isLoadingBookARomm && <Loader />}
                </div>
            )}
            {(isLoading || isRoomLoading) && <Loader />}
        </section>
    );
};
export default BookARoom;
