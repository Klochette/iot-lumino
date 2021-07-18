import React from "react";
import { useParams } from "react-router-dom";
import styles from "./CGU.module.scss";

const Cgu = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return <div>Cgu</div>;
};

export default Cgu;
