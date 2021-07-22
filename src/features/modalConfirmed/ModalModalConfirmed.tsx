import React from "react";
import styles from "./ModalConfirmed.module.scss";
const ModalConfirmed = (): JSX.Element => {
    return (
        <div className={styles.modal}>
            <div>
                <h2>changement de température réussi</h2>
                <div className={styles.svg_wrapper}>
                    <svg
                        width="37"
                        height="27"
                        viewBox="0 0 37 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className={styles.check}
                            d="M3 13.5L13.3333 24L34 3"
                            stroke="#95E1D3"
                            strokeWidth="5.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirmed;
