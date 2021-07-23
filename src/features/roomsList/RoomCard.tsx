import React, { useState } from "react";

import clsx from "clsx";

import { RoomType, UserType } from "types";

import {
    useApiBookingFromARoomQuery,
    useApiGetBokingByRoomIdQuery,
} from "services/api/api";

import styles from "features/roomsList/RoomCard.module.scss";

import { ReactComponent as ArrowUp } from "assets/images/bi_three-dots.svg";
import { ReactComponent as ArrowDown } from "assets/images/arrowDown.svg";
import { Link, useParams } from "react-router-dom";
import Loader from "commons/loader/Loader";
import { useEffect } from "react";

type RoomProps = { room: RoomType };

const RoomCard = ({ room }: RoomProps): JSX.Element => {
    const { userType } = useParams<{ userType?: UserType }>();
    const [isOpen, setOpen] = useState(false);

    const { nameRoom, nbPlace, freeAccess, id_room, isBooked, nbPlaceTotal } =
        room;

    const { data, isLoading, refetch } = useApiBookingFromARoomQuery(nameRoom);
    const {
        data: roomBooking,
        isLoading: roomBookingLoading,
        refetch: refetchBooking,
    } = useApiGetBokingByRoomIdQuery(id_room);
    const getIsFullBooked = () => {
        if (roomBooking && roomBooking.data)
            for (const key in roomBooking.data) {
                if (roomBooking.data[key] === false) return false;
            }
        return true;
    };

    const getIsEmpty = () => {
        if (roomBooking && roomBooking.data)
            for (const key in roomBooking.data) {
                if (roomBooking.data[key] === true) return false;
            }
        return true;
    };

    const isFullBooked = getIsFullBooked();
    const isEmpty = getIsEmpty();

    const addColor = () => {
        if (freeAccess) {
            return "yellow";
        } else {
            //@ts-ignore
            if (isBooked || isFullBooked || nbPlaceTotal === 0) {
                return "red";
            } else {
                return "green";
            }
        }
    };

    useEffect(() => {
        refetch();
        refetchBooking();
    }, []);

    return (
        <>
            {!isLoading && !roomBookingLoading && (
                <div
                    className={styles.accordion}
                    onClick={() => {
                        refetch();
                        refetchBooking();
                    }}
                >
                    <div
                        className={clsx(
                            styles.title,
                            isOpen && styles.isOpen,
                            styles[addColor()]
                        )}
                        onClick={() => setOpen(!isOpen)}
                    >
                        <h2>{nameRoom}</h2>
                        <div
                            className={clsx(
                                styles.endIcons,
                                styles[addColor()]
                            )}
                        >
                            <h2>
                                {nbPlace - nbPlaceTotal}/{nbPlace}
                            </h2>
                            {isOpen && <ArrowUp className={styles.icon} />}
                            {!isOpen && <ArrowDown />}
                        </div>
                    </div>
                    <div
                        className={clsx(
                            styles.content,
                            isOpen && styles.collapsed,
                            styles[addColor()]
                        )}
                    >
                        <div className={clsx(styles.items, styles[addColor()])}>
                            {isEmpty && !isFullBooked && !freeAccess && (
                                <>
                                    <p>Aucune réservation programmée</p>
                                    <Link
                                        to={`/${userType}/rooms/${room.nameRoom}/${room.id_room}/book`}
                                    >
                                        <button
                                            className={styles[addColor()]}
                                            disabled={isFullBooked}
                                        >
                                            Réserver
                                        </button>
                                    </Link>
                                </>
                            )}
                            {!isEmpty && (
                                <>
                                    <ul>
                                        {data &&
                                            data.status.map((booking) => (
                                                <li key={booking.id_booking}>
                                                    Réservée de :{" "}
                                                    {booking.start}h à{" "}
                                                    {booking.end}h
                                                </li>
                                            ))}
                                        {isLoading &&
                                            !roomBookingLoading &&
                                            !isLoading && <p>Loading</p>}
                                    </ul>
                                    <Link
                                        to={`/${userType}/rooms/${room.nameRoom}/${room.id_room}/book`}
                                    >
                                        <button
                                            className={styles[addColor()]}
                                            disabled={isFullBooked}
                                        >
                                            Réserver
                                        </button>
                                    </Link>
                                </>
                            )}
                            {freeAccess && (
                                <p>Cette salle est à accès libre.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {(isLoading || roomBookingLoading) && <Loader />}
        </>
    );
};

export default RoomCard;
