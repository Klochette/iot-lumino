import React from "react";
import { useParams } from "react-router-dom";
import styles from "./EditConfidentiality.module.scss";

const EditConfidentiality = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return <div>EditConfidentiality</div>;
};

export default EditConfidentiality;
