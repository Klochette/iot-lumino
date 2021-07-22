import React from "react";

import styles from "./DashboardAvailableRooms.module.scss";
import { ReactComponent as RightArrow } from "assets/images/right-arrow.svg";

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
            <div className={styles.titleWrap}>
                <h2>{title}</h2>
                <RightArrow className={styles.chevron} />
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
                <p className={styles.dashboardErrorMsg}>{error}</p>
            )}
        </>
    );
};

export default DashboardAvailableRooms;
