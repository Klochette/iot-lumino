import React from "react";
import styles from "./StudentDashboard.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/close-circle.svg";
import Loader from "commons/loader/Loader";
import ModalDelete from "features/modalDelete/ModalDelete";
import DashboardGroup from "../../commons/dashboardGroup/DashboardGroup";
import DashboardEmptyCard from "commons/dashboardEmptyCards/DashboardEmptyCards";
import DashboardAvailableRooms from "commons/dashboardAvailableRooms/DashboardAvailableRooms";

import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { QueryRoomType, RoomType, UserType } from "types";

import { useApiRoomsQuery } from "services/api/api";
import RoomsList from "features/roomsList/RoomsList";


const StudentDashboard = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    const { data, isLoading } = useApiRoomsQuery(undefined, {skip: !userType});

    const [open, setOpen] = useState(false);

    const [room, setRoom] = useState(data?.data);

    useEffect(() =>  {
        if(data && data.data){
            setRoom(data.data)
            console.log(data?.data);
        }
    }, [data])

    


    const isLoadingRooms = false;
    // const rooms: QueryRoomType = {
    //     data: [
    //         // freeAccess
    //         room
    //     ],
    // };

    //@ts-ignore
    const availableRooms: RoomType[] | undefined = room && room.filter(
        (room) => !room.isBooked && !room.freeAccess
    );

    //@ts-ignore
    const freeAccessRooms: RoomType[] | undefined = room && room.filter(
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
                        <p>{room ? room[0].nameRoom : 'API down'}</p>
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
            <div className={styles.cardHome}>
                {isLoading && <Loader />}
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
            {isLoadingRooms && <Loader />}

            {/* GROUP */}
            <DashboardGroup />

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
                <ModalDelete onClick={handleClose} room={room && room[0]} />
            )}
        </>
    );
};

export default StudentDashboard;
