import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ChangePassword.module.scss";

const ChangePassword = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return <div>ChangePassword</div>;
};

export default ChangePassword;
