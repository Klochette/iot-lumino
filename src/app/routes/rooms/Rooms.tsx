import React, { useState } from "react";

import { FilterType } from "types";

import styles from "app/routes/rooms/Rooms.module.scss";

import RoomsList from "features/roomsList/RoomsList";
import ButtonChecked from "commons/buttonChecked/ButtonChecked";

const Rooms = (): JSX.Element => {
    const [filter, setFilter] = useState<FilterType>();

    const handleFilterClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log(value, filter);
        if (value === "free" && filter !== "isBooked") setFilter("isBooked");
        else if (
            value === filter ||
            (value === "free" && filter === "isBooked")
        ) {
            setFilter(undefined);
        } else setFilter(value as FilterType);
    };

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Réservation</h1>
            <div>
                <h2 className={styles.filterTitle}>Filtrer</h2>
                <div className={styles.filters}>
                    <ButtonChecked
                        onClick={handleFilterClick}
                        checked={filter === "building"}
                        labelFor="building"
                        label="Bâtiments"
                    />
                    <ButtonChecked
                        onClick={handleFilterClick}
                        checked={filter === "freeAccess"}
                        labelFor="freeAccess"
                        label="Accès libre"
                    />
                    <ButtonChecked
                        onClick={handleFilterClick}
                        checked={filter === "isBooked"}
                        labelFor="free"
                        label="Libres"
                    />
                </div>
                <RoomsList filter={filter} />
            </div>
        </section>
    );
};

export default Rooms;
