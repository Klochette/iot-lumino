import React from "react";
import { useParams } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return <div>NotFound</div>;
};

export default NotFound;
