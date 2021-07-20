import React from "react";
import styles from "./Dashboard.module.scss";
import { ReactComponent as ProfilPicture } from "assets/images/profil_pic-nexus.svg";
import { ReactComponent as CloseIcon } from "assets/images/close-circle.svg";
import { ReactComponent as Leaf } from "assets/images/leafNotification.svg";
import { ReactComponent as Chevron } from "assets/images/bi_three-dots.svg";
import { useApiRoomsQuery } from "services/api/api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import Loader from "commons/loader/Loader";
import ModalDelete from "features/modalDelete/ModalDelete";
import { useState } from "react";

const Dashboard = (): JSX.Element => {
    const { data: rooms, isLoading: isLoadingRooms } =
        useApiRoomsQuery(skipToken);
    const [open, setOpen] = useState(false);

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
        <section className={styles.homeSection}>
            <header className={styles.headerHome}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        <strong className={styles.titleBold}>Bonjour,</strong>
                        <br />
                        Gros bogosse
                    </h1>
                </div>
                <ProfilPicture className={styles.profilPicture} />
            </header>

            {/* SALLE RESERVEE */}
            <div className={styles.cardHome}>
                <h2>Salle réservée</h2>
                <div className={styles.containerBookedRoom}>
                    <div className={styles.bookedRoomImg}>
                        <p>A105</p>
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
                {!isLoadingRooms && (
                    <>
                        <div>
                            <h2>Salles disponnibles à la réservation</h2>
                            <Chevron className={styles.chevron} />
                        </div>
                        <div className={styles.containerAvailableRoom}>
                            {rooms &&
                                rooms.data.map((room) => {
                                    return (
                                        <div key={room.id_room}>
                                            {!room.isBooked && (
                                                <div
                                                    className={
                                                        styles.availableRoom
                                                    }
                                                >
                                                    <p>{room.nameRoom}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                        </div>
                    </>
                )}
                {isLoadingRooms && <Loader />}
            </div>

            {/* AUCUNE SALLE RESERVEE */}
            <div className={styles.whiteCard}>
                <Leaf className={styles.leaf} />
                <h2 className={styles.whiteCardTitle}>
                    Aucune réservation en cours
                </h2>
                <button className={styles.whiteCardButton}>
                    Réserver une salle
                </button>
            </div>

            {/* AUCUNE SALLE RESERVEE */}
            <div className={styles.whiteCard}>
                <Leaf className={styles.leaf} />
                <h2 className={styles.whiteCardTitle}>
                    Tu n'as pas de groupe pour le moment
                </h2>
                <button className={styles.whiteCardButton}>
                    Ajouter un groupe
                </button>
            </div>
            {open && rooms && (
                <ModalDelete onClick={handleClose} room={rooms.data[0]} />
            )}
        </section>
    );
};

export default Dashboard;
