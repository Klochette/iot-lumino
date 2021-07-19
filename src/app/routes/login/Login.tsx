import LoginForm from "features/loginForm/LoginForm";
import React from "react";
import styles from "./Login.module.scss";
import heticLogo from "assets/images/logoHetic.png";
import { ReactComponent as LuminoLogo } from "assets/images/logoLumino.svg";
import { ReactComponent as NexusLogo } from "assets/images/logoNexus.svg";

const Login = (): JSX.Element => {
    return (
        <section className={styles.container}>
            <img
                alt="hetic logo"
                src={heticLogo}
                className={styles.logoLumino}
            />
            <LoginForm />
            <div className={styles.credits}>
                <LuminoLogo className={styles.luminoLogo} />
                <NexusLogo />
                <p>Made with 💛&nbsp;&nbsp; by Lumino</p>
            </div>
        </section>
    );
};

export default Login;
