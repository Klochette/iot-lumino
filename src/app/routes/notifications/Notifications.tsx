import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Notifications.module.scss";

const Notifications = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return <div>Notifications</div>;
};

export default Notifications;
