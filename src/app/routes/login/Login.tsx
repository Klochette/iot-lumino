import LoginForm from "features/loginForm/LoginForm";
import React from "react";
import styles from "./Login.module.scss";
import { ReactComponent as HeticLogo } from "assets/images/logoHetic.svg";
import { ReactComponent as LuminoLogo } from "assets/images/logoLumino.svg";
import { ReactComponent as NexusLogo } from "assets/images/logoNexus.svg";

const Login = (): JSX.Element => {
    return (
        <section className={styles.container}>
            <HeticLogo className={styles.logoLumino} />
            <LoginForm />
            <div className={styles.credits}>
                <LuminoLogo />
                <NexusLogo />
                <p>Made with 💛 by Lumino</p>
            </div>
        </section>
    );
};

export default Login;
