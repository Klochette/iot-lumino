import React, { useState } from "react";

import { skipToken } from "@reduxjs/toolkit/dist/query";

import { FilterType, RoomType, UserType } from "types";

import { useApiRoomsQuery } from "services/api/api";
import RoomCard from "features/roomsList/RoomCard";

import styles from "features/roomsList/RoomsList.module.scss";
import Loader from "commons/loader/Loader";

import RoomTemperaturesList from "./RoomTemperaturesList";
import ModalEditTemperature from "features/modalEditTemperature/ModalEditTemperature";
import FloatingButtonTemperature from "commons/floatingButtonTemperature/FloatingButtonTemperature";
import ModalConfirmed from "features/modalConfirmed/ModalModalConfirmed";

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
    const { data, isLoading } = useApiRoomsQuery(undefined, {skip: !userType});

    const [roomsToChange, setRoomsToChange] = useState<number[]>([]);
    const [open, setOpen] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const setRoomsForTemperatureChange = (id: number, status: boolean) => {
        const toFind = roomsToChange?.find((idRoom) => idRoom === id);
        if (status && !toFind) {
            const newRoomsToChange = [...roomsToChange];
            newRoomsToChange.push(id);
            setRoomsToChange(newRoomsToChange);
        } else if (!status && toFind) {
            const newRoomsToChange = roomsToChange.filter(
                (roomId) => roomId !== id
            );
            setRoomsToChange(newRoomsToChange);
        }
    };

    const handleClose = (
        e: React.MouseEvent<
            SVGSVGElement | HTMLDivElement | HTMLButtonElement,
            MouseEvent
        >,
        confirm?: boolean
    ) => {
        if (open) {
            if (confirm) {
                setConfirmed(true);
                setRoomsToChange([]);
            }
            setOpen(false);
            setTimeout(() => {
                setConfirmed(false);
            }, 2000);
        }
    };

    const handleOpen = () => {
        if ((!open && roomsToChange.length >= 1) ?? true) {
            setOpen(true);
        }
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

    return ( 
        <>
            <div className={styles.roomsList}>
                {isLoading && <Loader />}
                {filter &&
                    getKeys.map((key) => (
                        <div key={key}>
                            <h2 className={styles.filterName}>
                                {filter === "building" && `Bâtiment ${key}`}
                                {filter === "freeAccess" &&
                                    "Salles à accès libre"}
                                {filter === "isBooked" && "Salles libres"}
                            </h2>
                            {userType === "student" &&
                                filteredRooms[key].map((room: RoomType) => {
                                    return (
                                        <RoomCard
                                            key={room.id_room}
                                            room={room}
                                        />
                                    );
                                })}
                            {userType === "admin" && (
                                <RoomTemperaturesList
                                    selectedRooms={roomsToChange}
                                    className={styles.container}
                                    onChange={(id, status) => {
                                        setRoomsForTemperatureChange(
                                            id,
                                            status
                                        );
                                    }}
                                    keyRoom={key}
                                    rooms={filteredRooms}
                                />
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
                    <RoomTemperaturesList
                        selectedRooms={roomsToChange}
                        className={styles.container}
                        onChange={(id, status) => {
                            setRoomsForTemperatureChange(id, status);
                        }}
                        rooms={data.data}
                    />
                )}
                {filter && getKeys.length === 0 && !isLoading && (
                    <p>Il n'y a pas de salles avec ce filtre.</p>
                )}
                {open && (
                    <ModalEditTemperature
                        onClick={(e, confirm) => handleClose(e, confirm)}
                        rooms={roomsToChange}
                    />
                )}
                <FloatingButtonTemperature
                    disabled={roomsToChange.length < 1 ?? true}
                    onClick={handleOpen}
                />
                {confirmed && <ModalConfirmed />}
            </div>
        </>
    );
};

export default RoomsList;
