import React, { useState } from "react";

import clsx from "clsx";

import { RoomType } from "types";

import { useApiBookingFromARoomQuery } from "services/api/api";

import styles from "features/roomsList/RoomTemperature.module.scss";
import { useEffect } from "react";

type RoomProps = {
    room: RoomType;
    onChange: (id: number, status: boolean) => void;
    selected: number | undefined;
};

const RoomTemperatureCards = ({
    room,
    onChange,
    selected,
}: RoomProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState(selected ? true : false);

    useEffect(() => {
        setIsChecked(selected ? true : false);
    }, [selected]);

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
            onClick={() => {
                setIsChecked(!isChecked);
                onChange(room.id_room, !isChecked);
            }}
            className={clsx(styles.temperaturesCards, styles[addColor()])}
        >
            <h2>{nameRoom}</h2>
            <h1 className={styles.temperature}>{room.Temperature}°</h1>
            <div>
                <div className={styles.round}>
                    <input
                        type="checkbox"
                        id={id_room.toString()}
                        checked={isChecked}
                        onChange={() => {
                            setIsChecked(!isChecked);
                            onChange(room.id_room, !isChecked);
                        }}
                    />
                    <label htmlFor={id_room.toString()}></label>
                </div>
            </div>
        </div>
    );
};

export default RoomTemperatureCards;
