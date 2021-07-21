import React, { useState } from "react";

import clsx from "clsx";

import { RoomType } from "types";

import { useApiBookingFromARoomQuery } from "services/api/api";

import styles from "features/roomsList/RoomTemperature.module.scss";

type RoomProps = { room: RoomType; key: number };

const RoomTemperatureCards = ({ room, key }: RoomProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);

    const { nameRoom, freeAccess, id_room } = room;

    const { data } = useApiBookingFromARoomQuery(nameRoom);

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
        <div
            key={id_room}
            className={clsx(styles.temperaturesCards, styles[addColor()])}
        >
            <h2>{nameRoom}</h2>
            <h1 className={styles.temperature}>21°</h1>
            <div>
                <div className={styles.round}>
                    <input type="checkbox" id={id_room.toString()} />
                    <label htmlFor={id_room.toString()}></label>
                </div>
            </div>
        </div>
    );
};

export default RoomTemperatureCards;
