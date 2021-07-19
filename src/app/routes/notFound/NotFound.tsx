import React from "react";
import styles from "./NotFound.module.scss";
import { ReactComponent as LuminoLogo } from "assets/images/logoLumino.svg";
import { ReactComponent as Four } from "assets/images/fourYB.svg";

const NotFound = (): JSX.Element => {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.images}>
                    <Four className={styles.four} />
                    <LuminoLogo className={styles.logoLumino} />
                    <Four className={styles.four} />
                </div>
                <div className={styles.texts}>
                    <p className={styles.text_bold}>
                        Oh non ! Il n'y a rien ici
                    </p>
                    <p className={styles.text_normal}>
                        Le renard a chipé la page
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
