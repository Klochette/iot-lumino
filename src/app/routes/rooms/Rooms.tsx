import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Rooms.module.scss";
import { ReactComponent as ArrowUp } from "assets/images/bi_three-dots.svg";
import clsx from "clsx";
import {
    useApiBookingFromARoomQuery,
    useApiRoomsQuery,
    useApiBookARoomMutation,
} from "services/api/api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { BookARoomType } from "types";

const Rooms = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    const { data, isLoading } = useApiRoomsQuery(skipToken);
    const [bookARoom] = useApiBookARoomMutation();
    console.log(data);

    const bookARoomFunction = async () => {
        try {
            const args: BookARoomType = {
                start: 8,
                end: 9,
                nameRoom: "A105",
                email: "nawel.berrichi@hetic.net",
            };
            const bookedRoomFunction = await bookARoom(args).unwrap();
            console.log(bookedRoomFunction);
        } catch (error) {
            console.log(error);
        }
    };

    const [isOpen, setOpen] = React.useState(false);
    return (
        <section className={styles.section}>
            <h1>Réservation</h1>
            <button onClick={bookARoomFunction}>booke</button>
            <div>
                <h2>Nombre de places voulues</h2>
                <input type="number" />
            </div>
            <div>
                <h2>Filtrer</h2>
                <div>
                    <button>Bâtiments</button>
                    <button>Accès libres</button>
                    <button>Libres</button>
                </div>
                <div>
                    <h2>Bâtiment A</h2>
                    <div className={styles.accordion}>
                        <div
                            className={clsx(
                                styles.title,
                                isOpen && styles.isOpen,
                                styles.green
                            )}
                            onClick={() => setOpen(!isOpen)}
                        >
                            <h2>A03</h2>
                            <div
                                className={clsx(styles.endIcons, styles.green)}
                            >
                                <h2>0/20</h2>
                                <ArrowUp />
                            </div>
                        </div>
                        <div
                            className={clsx(
                                styles.content,
                                isOpen && styles.collapsed,
                                styles.green
                            )}
                        >
                            <div className={clsx(styles.items, styles.green)}>
                                <p>Aucune réservation programmée</p>
                                <button>Reserver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rooms;
