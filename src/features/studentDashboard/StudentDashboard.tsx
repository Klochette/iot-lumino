import React from "react";
import styles from "./StudentDashboard.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/close-circle.svg";
import Loader from "commons/loader/Loader";
import ModalDelete from "features/modalDelete/ModalDelete";
import DashboardGroup from "../../commons/dashboardGroup/DashboardGroup";
import DashboardEmptyCard from "commons/dashboardEmptyCards/DashboardEmptyCards";
import DashboardAvailableRooms from "commons/dashboardAvailableRooms/DashboardAvailableRooms";

import { useState, useEffect } from "react";
import { RoomType } from "types";

import {
    useApiDeleteBookingMutation,
    useApiGetBookingByEmailQuery,
    useApiRoomsQuery,
} from "services/api/api";
import { useAppSelector } from "app/store";

const StudentDashboard = (): JSX.Element => {
    const { email, userType } = useAppSelector((state) => state.user);
    const { data, isLoading } = useApiRoomsQuery(undefined, {
        skip: !userType,
    });
    const { data: dataBooking, refetch: refetchBooking } =
        useApiGetBookingByEmailQuery(email);
    const [deleteBooking, { isLoading: isLoadingDelete }] =
        useApiDeleteBookingMutation();

    const [open, setOpen] = useState(false);

    const [room, setRoom] = useState(data?.data);

    useEffect(() => {
        if (data && data.data) {
            setRoom(data.data);
        }
    }, [data]);

    useEffect(() => refetchBooking(), [refetchBooking]);

    //@ts-ignore
    const availableRooms: RoomType[] | undefined =
        room && room.filter((room) => !room.isBooked && !room.freeAccess);

    //@ts-ignore
    const freeAccessRooms: RoomType[] | undefined =
        room && room.filter((room) => room.freeAccess && !room.isBooked);

    const handleOpen = () => {
        if (!open) {
            setOpen(true);
        }
    };

    const handleClose = async (
        e: any,
        confirmed?: boolean,
        bookingId?: number
    ) => {
        if (confirmed && bookingId) {
            const booking = bookingId.toString();
            try {
                await deleteBooking({ idBooking: booking })
                    .unwrap()
                    .then((fulfilled) => fulfilled && refetchBooking());
            } catch (error) {
                console.log(error);
            }
        }
        if (open) {
            setOpen(false);
        }
    };
    return (
        <>
            {/* SALLE RESERVEE */}

            {dataBooking && dataBooking.data && dataBooking.data[0] ? (
                <div className={styles.cardHome}>
                    <h2>Salle réservée</h2>
                    <div className={styles.containerBookedRoom}>
                        <div className={styles.bookedRoomImg}>
                            <p>
                                {dataBooking &&
                                    dataBooking.data &&
                                    dataBooking.data[0] &&
                                    dataBooking.data[0].nameRoom}
                            </p>
                            <CloseIcon
                                className={styles.closeIcon}
                                onClick={handleOpen}
                            />
                        </div>
                        <div className={styles.rightSide}>
                            <div className={styles.pictoGroupe}>
                                <p>KTA</p>
                            </div>
                            <button className={styles.buttonGroupe}>
                                Partager la salle au groupe
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <DashboardEmptyCard
                        text="Aucune réservation en cours"
                        buttonText="reserver une salle"
                    />
                </>
            )}

            {/* SALLE DIPONNIBLE A LA RESA */}
            {(isLoading || !room) && (
                <>
                    <DashboardEmptyCard text="Aucune salle n'est réservable pour le moment" />
                </>
            )}
            {!isLoading && room && (
                <div className={styles.cardHome}>
                    <div>
                        <DashboardAvailableRooms
                            rooms={availableRooms}
                            type="available"
                            title="Salles disponibles à la réservation"
                            error="Aucune salle n'est disponible à la réservation"
                        />
                        <DashboardAvailableRooms
                            rooms={freeAccessRooms}
                            type="freeAccess"
                            title="Accès libre"
                            error="Aucune salle à accès libre n'est disponible"
                        />
                    </div>
                </div>
            )}
            {!isLoading && <DashboardGroup />}
            {isLoading && (
                <>
                    <DashboardEmptyCard
                        text="Vous n'avez pas de groupe pour le moment"
                        buttonText="créer un groupe"
                    />
                    <Loader />
                </>
            )}
            {open && dataBooking && dataBooking.data[0] && (
                <ModalDelete
                    onClick={handleClose}
                    room={room && dataBooking.data[0]}
                />
            )}
            {isLoadingDelete && <Loader />}
        </>
    );
};

export default StudentDashboard;
