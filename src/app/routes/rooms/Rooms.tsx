import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Rooms.module.scss";

const Rooms = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return <div>Rooms</div>;
};

export default Rooms;
