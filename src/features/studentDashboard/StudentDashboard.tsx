import React from "react";
import styles from "./StudentDashboard.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/close-circle.svg";
import Loader from "commons/loader/Loader";
import ModalDelete from "features/modalDelete/ModalDelete";
import { useState } from "react";
import DashboardEmptyCard from "commons/dashboardEmptyCards/DashboardEmptyCards";
import DashboardAvailableRooms from "commons/dashboardAvailableRooms/DashboardAvailableRooms";
import { QueryRoomType, RoomType } from "types";

const StudentDashboard = (): JSX.Element => {
    //const { data: rooms, isLoading: isLoadingRooms } = useApiRoomsQuery(skipToken);
    const [open, setOpen] = useState(false);

    const isLoadingRooms = false;
    const rooms: QueryRoomType = {
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
                building: "A",
            },
        ],
    };

    const availableRooms: RoomType[] | undefined = rooms?.data.filter(
        (room) => !room.isBooked && !room.freeAccess
    );
    const freeAccessRooms: RoomType[] | undefined = rooms?.data.filter(
        (room) => room.freeAccess && !room.isBooked
    );

    const handleOpen = () => {
        if (!open) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        if (open) {
            setOpen(false);
        }
    };

    return (
        <>
            {/* SALLE RESERVEE */}
            <div className={styles.cardHome}>
                <h2>Salle réservée</h2>
                <div className={styles.containerBookedRoom}>
                    <div className={styles.bookedRoomImg}>
                        <p>{rooms.data[0].nameRoom}</p>
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

            {/* SALLE DIPONNIBLE A LA RESA */}
            {!isLoadingRooms && (
                <div className={styles.cardHome}>
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
            )}
            {isLoadingRooms && <Loader />}

            {/* AUCUNE SALLE RESERVEE */}
            <DashboardEmptyCard
                text="Aucune réservation en cours"
                buttonText="Réserver une salle"
            />
            <DashboardEmptyCard
                text="Tu n'as pas de groupe pour le moment"
                buttonText="Ajouter un groupe"
            />

            {open && (
                <ModalDelete onClick={handleClose} room={rooms?.data[0]} />
            )}
        </>
    );
};

export default StudentDashboard;
