import React from "react";
import styles from "./Loader.module.scss";

const Loader = (): JSX.Element => {
    return (
        <div className={styles.loading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Loader;
