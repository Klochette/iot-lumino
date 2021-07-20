import React from "react";
import styles from "./Rooms.module.scss";
import RoomsList from "features/roomsList/RoomsList";

const Rooms = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <h1>Réservation</h1>
            <div>
                <h2>Filtrer</h2>
                <div>
                    <button>Bâtiments</button>
                    <button>Accès libres</button>
                    <button>Libres</button>
                </div>
                <RoomsList />
            </div>
        </section>
    );
};

export default Rooms;
