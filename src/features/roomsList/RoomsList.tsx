import React from "react";
import styles from "./RoomsList.module.scss";
import { useApiRoomsQuery } from "services/api/api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { RoomType } from "types";
import { Room } from "./RoomCard";

const RoomsList = (): JSX.Element => {
    const { data, isLoading } = useApiRoomsQuery(skipToken);

    const renderRooms =
        data &&
        data.data.map((room: RoomType) => (
            <div key={room.id_room}>
                <Room room={room} />
            </div>
        ));

    return (
        <div className={styles.roomsList}>
            <h2 className={styles.filterName}>Bâtiment A</h2>
            {renderRooms}
        </div>
    );
};

export default RoomsList;
