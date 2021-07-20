import React from "react";
import styles from "./RoomsList.module.scss";
import { useApiRoomsQuery } from "services/api/api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FilterType, RoomType } from "types";
import RoomCard from "./RoomCard";

type RoomsListType = {
    filter: FilterType | undefined;
};

const sortFunction = (rooms: RoomType[], filter: FilterType | "nameRoom") => {
    return rooms.sort((roomA: RoomType, roomB: RoomType) => {
        if (roomA[filter] < roomB[filter]) {
            return -1;
        } else if (roomA[filter] > roomB[filter]) {
            return 1;
        } else return 0;
    });
};

const sortRoom = (rooms: RoomType[], filter: FilterType) => {
    const sortedRoom = sortFunction(sortFunction(rooms, "nameRoom"), filter);
    const filteredRooms: any = {};
    sortedRoom.forEach((room: any) => {
        if (!filteredRooms[room[filter]]) {
            filteredRooms[room[filter]] = [];
        }
        filteredRooms[room[filter]].push(room);
    });
    return filteredRooms;
};

const RoomsList = ({ filter }: RoomsListType): JSX.Element => {
    const { data, isLoading } = useApiRoomsQuery(skipToken);

    const filteredRooms = filter && data && sortRoom([...data.data], filter);
    const getKeys = [];
    for (const key in filteredRooms) {
        if (
            (key === "true" && filter === "freeAccess") ||
            (key === "false" && filter === "isBooked") ||
            filter === "building"
        )
            getKeys.push(key);
    }

    return (
        <div className={styles.roomsList}>
            {isLoading && <p>LOADING</p>}
            {filter &&
                getKeys.map((key) => (
                    <div key={key}>
                        {filter === "building" && <h2>Bâtiment {key}</h2>}
                        {filter === "freeAccess" && (
                            <h2>Salles à accès libre</h2>
                        )}
                        {filter === "isBooked" && <h2>Salles libres</h2>}
                        {filteredRooms[key].map((room: any) => {
                            return (
                                <div key={room.id_room}>
                                    <RoomCard room={room} />
                                </div>
                            );
                        })}
                    </div>
                ))}
            {!filter &&
                data &&
                data.data.map((room: any) => (
                    <div key={room.id_room}>
                        <RoomCard room={room} />
                    </div>
                ))}
            {filter && getKeys.length === 0 && (
                <p>Il n'y a pas de salle avec ce filtre</p>
            )}
        </div>
    );
};

export default RoomsList;
