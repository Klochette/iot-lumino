import React from "react";

import styles from "./DashboardAvailableRooms.module.scss";
import { ReactComponent as Chevron } from "assets/images/bi_three-dots.svg";

import { RoomType } from "types";

type DashboardAvailableRoomsType = {
    rooms?: RoomType[];
    title: string;
    error: string;
    type: "available" | "freeAccess";
};

const DashboardAvailableRooms = ({
    rooms,
    title,
    error,
    type,
}: DashboardAvailableRoomsType): JSX.Element => {
    return (
        <>
            <div>
                <h2>{title}</h2>
                <Chevron className={styles.chevron} />
            </div>
            {rooms && rooms.length > 0 ? (
                <div
                    className={
                        type === "available"
                            ? styles.containerAvailableRoom
                            : styles.containerFreeAccessRoom
                    }
                >
                    {rooms.map((room) => {
                        return (
                            <div key={room.id_room}>
                                <div
                                    className={
                                        type === "available"
                                            ? styles.availableRoom
                                            : styles.freeAccessRoom
                                    }
                                >
                                    <p>{room.nameRoom}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>{error}</p>
            )}
        </>
    );
};

export default DashboardAvailableRooms;
