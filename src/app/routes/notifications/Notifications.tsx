import React from "react";
import styles from "./Notifications.module.scss";
import bastien from "assets/images/bastien.png";
import { ReactComponent as RedDots } from "assets/images/three-dots.svg";
import ModalDelete from "features/modalDelete/ModalDelete";
import { useState } from "react";
import { flattenDiagnosticMessageText } from "typescript";

import { QueryRoomType, RoomType, UserType } from "types";
import { useEffect } from "react";




const Notifications = (): JSX.Element => {

    const [open, setOpen] = useState(false);  
    const [nbNotif, setNbNotif] = useState(0);    

    const notifUser = [
        {   
            id: 0,
            room: 'C022',
            title: 'Votre salle a bien été réservé de 13h à 17h.',
            time: '5m',
            new: true,
            isBooked: false
        },
        {
            id: 1,
            room: 'A005',
            title: ' Bastien Baquier vous invite à rejoindre le groupe Fluxéo',
            time: '22h',
            new: false,
            isBooked: false
        },
        {   
            id: 2,
            room: 'B111',
            title: 'Vous avez annulé la réservation de la salle B111.',
            time: '5m',
            new: false,
            isBooked: true

        },
        {   
            id: 3,
            room: 'A111',
            title: 'Votre reservation se termine dans 10min.',
            time: '5m',
            new: false,
            isBooked: false

        },
    ]

    const [notif, setNotif] = useState(notifUser);
    console.log(notifUser);



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

    const handleDelete = () => {
        const idToRemove = nbNotif;
        const filteredNotif = notif.filter((item) => item.id !== idToRemove);
        
        setNotif(filteredNotif);

        if (open) {
            setOpen(false);
        }
    }

    return (
        <section className={styles.notifications}>
            <h1 className={styles.title}>Notifications</h1>
            {/* {!notif && (
                <div className={styles.contentContainer}>
                <Leaf className={styles.leaf} />
                <p className={styles.textNoNotification}>
                    Vous n'avez aucune notification pour le moment.
                </p>
            </div>
            )} */}
            <div className={styles.notificationNew}>
                <h2>Nouveau</h2>
                {notif.filter(room => room.new).map((el, index) => (
                    <div>
                        <div className={styles.notificationCard}>
                            <div className={el.isBooked ? styles.cardRoom : styles.cardRoomBooked}>
                                <p>{el.room}</p>
                            </div>
                            <div className={styles.cardRightBlock}>
                                <p className={styles.cardMessage}>
                                    {el.title}
                                </p>
                                <p className={styles.cardTime}>{el.time}</p>
                            </div>
                            <div data-index={el.id} onClick={() => {
                                handleOpen(); 
                                setNbNotif(el.id);
                                }}>
                                <RedDots className={styles.cardDots} />
                            </div>
                        </div>
                    </div>
                ))}
                <h2>Ancien</h2>
                {notif.filter(room => !room.new).map((el, index) => (
                    <div>
                        <div className={styles.notificationCard}>
                            <div className={el.isBooked ? styles.cardRoom : styles.cardRoomBooked}>
                                <p>{el.room}</p>
                            </div>
                            <div className={styles.cardRightBlock}>
                                <p className={styles.cardMessage}>
                                    {el.title}
                                </p>
                                <p className={styles.cardTime}>{el.time}</p>
                            </div>
                            <div data-index={el.id}>
                                <RedDots className={styles.cardDots} onClick={() => {
                                handleOpen(); 
                                setNbNotif(el.id);
                                }} />
                            </div>
                        </div>
                    </div>
                ))}
                {open && (
                    <ModalDelete onClick={handleClose} onClickToDelete={handleDelete} notif={notif[nbNotif]} title={notif[nbNotif].title} cancel='Supprimer cette notifications ?' keep='Annuler'/>
                )}
            </div>
        </section>
    );
};

export default Notifications;
