import { useAppDispatch, useAppSelector } from "app/store";
import { login, setUserError } from "features/user/userSlice";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "features/loginForm/LoginForm.module.scss";

const LoginForm = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [identifier, setIdentifier] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const history = useHistory();
    const { error, userType } = useAppSelector((state) => state.user);

    useEffect(() => {
        if (userType) history.push(`/${userType}/dashboard`);
    }, [userType, history]);

    const onLoginSubmit = () => {
        if (identifier && password) {
            dispatch(login({ identifier, password }));
        } else dispatch(setUserError({ error: "A field is missing" }));
    };

    const onAddIdentifier = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setIdentifier(e.target.value);
    };

    const onAddPassword = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setPassword(e.target.value);
    };

    return (
        <div className={styles.form}>
            {error && <p>{error}</p>}
            <div className={styles.inputWithLabel}>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    required
                    onBlur={onAddIdentifier}
                    className={styles.input}
                />
            </div>
            <div className={styles.inputWithLabel}>
                <label htmlFor="password" className={styles.label}>
                    Mot de passe
                </label>
                <input
                    name="password"
                    type="text"
                    required
                    onBlur={onAddPassword}
                    className={styles.input}
                />
            </div>
            <button onClick={onLoginSubmit} className={styles.button}>
                Se connecter
            </button>
        </div>
    );
};

export default LoginForm;
