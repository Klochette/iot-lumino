import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Dashboard.module.scss";

const Dashboard = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    return <div>dashboard</div>;
};

export default Dashboard;
