import React from "react";

import { skipToken } from "@reduxjs/toolkit/dist/query";
import clsx from "clsx";

import { FilterType, QueryRoomType, RoomType, UserType } from "types";

import { useApiRoomsQuery } from "services/api/api";
import RoomCard from "features/roomsList/RoomCard";

import styles from "features/roomsList/RoomsList.module.scss";
import Loader from "commons/loader/Loader";
import { Link } from "react-router-dom";
import { ReactComponent as CheckedIcon } from "assets/images/checkedIconWhite.svg";

import { CircleSlider } from "react-circle-slider";
import RoomTemperatureCards from "./RoomTemperature";

type RoomsListType = {
    filter: FilterType | undefined;
    userType?: UserType;
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

const RoomsList = ({ filter, userType }: RoomsListType): JSX.Element => {
    const { isLoading } = useApiRoomsQuery(skipToken);
    const data: QueryRoomType = {
        data: [
            // freeAccess
            {
                id_room: 2,
                isBooked: false,
                nameRoom: "A101",
                nbPlace: 20,
                freeAccess: true,
                building: "A",
            },
            {
                id_room: 3,
                isBooked: true,
                nameRoom: "A102",
                nbPlace: 20,
                freeAccess: true,
                building: "A",
            },
            {
                id_room: 4,
                isBooked: false,
                nameRoom: "A103",
                nbPlace: 20,
                freeAccess: true,
                building: "A",
            },
            {
                id_room: 6,
                isBooked: false,
                nameRoom: "A106",
                nbPlace: 20,
                freeAccess: true,
                building: "A",
            },
            // available
            {
                id_room: 5,
                isBooked: false,
                nameRoom: "A104",
                nbPlace: 20,
                freeAccess: false,
                building: "A",
            },
            {
                id_room: 1,
                isBooked: false,
                nameRoom: "A105",
                nbPlace: 20,
                freeAccess: false,
                building: "A",
            },
            {
                id_room: 7,
                isBooked: false,
                nameRoom: "A107",
                nbPlace: 20,
                freeAccess: false,
                building: "A",
            },
            {
                id_room: 8,
                isBooked: false,
                nameRoom: "A108",
                nbPlace: 20,
                freeAccess: false,
                building: "A",
            },
            {
                id_room: 9,
                isBooked: false,
                nameRoom: "A109",
                nbPlace: 20,
                freeAccess: false,
                building: "B",
            },
        ],
    };

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

    console.log(filteredRooms);

    return (
        <div className={styles.roomsList}>
            {isLoading && <Loader />}
            {filter &&
                getKeys.map((key) => (
                    <div key={key}>
                        <h2 className={styles.filterName}>
                            {filter === "building" && `Bâtiment ${key}`}
                            {filter === "freeAccess" && "Salles à accès libre"}
                            {filter === "isBooked" && "Salles libres"}
                        </h2>
                        {userType === "student" &&
                            filteredRooms[key].map((room: RoomType) => {
                                return (
                                    <RoomCard key={room.id_room} room={room} />
                                );
                            })}
                        {userType === "admin" && filteredRooms && (
                            <div className={styles.container}>
                                {filteredRooms[key].map((room: RoomType) => {
                                    return (
                                        <RoomTemperatureCards
                                            room={room}
                                            key={room.id_room}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            {!filter &&
                data &&
                userType === "student" &&
                data.data.map((room: RoomType) => {
                    return <RoomCard room={room} key={room.id_room} />;
                })}
            {!filter && data && userType === "admin" && (
                <div className={styles.container}>
                    {data.data.map((room: RoomType) => {
                        return (
                            <RoomTemperatureCards
                                room={room}
                                key={room.id_room}
                            />
                        );
                    })}
                </div>
            )}

            {filter && getKeys.length === 0 && !isLoading && (
                <p>Il n'y a pas de salles avec ce filtre.</p>
            )}
        </div>
    );
};

export default RoomsList;
