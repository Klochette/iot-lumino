import React from "react";
import { RoomType } from "types";
import RoomTemperatureCards from "./RoomTemperature";

type RoomTemperaturesListType = {
    rooms: any;
    keyRoom?: string;
    onChange: (id: number, status: boolean) => void;
    className: string;
    selectedRooms: number[];
};

const RoomTemperaturesList = ({
    rooms,
    keyRoom,
    onChange,
    className,
    selectedRooms,
}: RoomTemperaturesListType): JSX.Element => {
    return (
        <div className={className}>
            {keyRoom &&
                rooms[keyRoom].map((room: RoomType) => (
                    <RoomTemperatureCards
                        key={room.id_room}
                        onChange={onChange}
                        room={room}
                        selected={selectedRooms.find(
                            (id) => id === room.id_room
                        )}
                    />
                ))}
            {!keyRoom &&
                rooms.map((room: RoomType) => (
                    <RoomTemperatureCards
                        key={room.id_room}
                        onChange={onChange}
                        room={room}
                        selected={selectedRooms.find(
                            (id) => id === room.id_room
                        )}
                    />
                ))}
        </div>
    );
};

export default RoomTemperaturesList;
