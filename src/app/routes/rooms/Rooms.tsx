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
import { BookARoomType, RoomType } from "types";

type AccordionProps = { accordion: RoomType };

export const Accordion = ({ accordion }: AccordionProps): JSX.Element => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div className={styles.accordion}>
            <div
                className={clsx(
                    styles.title,
                    isOpen && styles.isOpen,
                    styles.green
                )}
                onClick={() => setOpen(!isOpen)}
            >
                <h2>{accordion.nameRoom}</h2>
                <div className={clsx(styles.endIcons, styles.green)}>
                    <h2>/{accordion.nbPlace}</h2>
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
    );
};

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

    return (
        <section className={styles.section}>
            <h1>Réservation</h1>
            <button onClick={bookARoomFunction}>booke</button>
            <div>
                <h2>Filtrer</h2>
                <div>
                    <button>Bâtiments</button>
                    <button>Accès libres</button>
                    <button>Libres</button>
                </div>
                <div></div>
                <h2>Bâtiment A</h2>
                {data &&
                    data.data.map((room: RoomType) => (
                        <div key={room.id_room}>
                            <Accordion accordion={room} />
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Rooms;
