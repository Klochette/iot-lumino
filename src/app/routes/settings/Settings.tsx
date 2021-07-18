import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Settings.module.scss";

const Settings = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return <div>Settings</div>;
};

export default Settings;
