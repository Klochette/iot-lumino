import React from "react";
import { useParams } from "react-router-dom";
import styles from "./EditGroups.module.scss";

const EditGroups = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return <div>EditGroups</div>;
};

export default EditGroups;
