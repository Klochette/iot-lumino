import React from "react";
import styles from "./Settings.module.scss";
import quentinG from "assets/images/quentinG.png";
import { useAppDispatch, useAppSelector } from "app/store";
import Switch from "commons/switch/Switch";

import { ReactComponent as LuminoLogo } from "assets/images/logoLumino.svg";
import { ReactComponent as NexusLogo } from "assets/images/logoNexus.svg";
import { ReactComponent as RightArrow } from "assets/images/right-arrow.svg";
import { ReactComponent as MdpSvg } from "assets/images/mdp-svg.svg";
import { ReactComponent as GroupSvg } from "assets/images/groups-svg.svg";
import { ReactComponent as MobileSvg } from "assets/images/mobile-svg.svg";
import { ReactComponent as EmailSvg } from "assets/images/email-svg.svg";
import { ReactComponent as CGUSvg } from "assets/images/cgu-svg.svg";
import { ReactComponent as ConfSvg } from "assets/images/config-svg.svg";
import { logout } from "features/user/userSlice";

const Settings = (): JSX.Element => {
    const { identifier, email } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Profil</h1>
                <div className={styles.framePicture}>
                    <img
                        alt="profil de quentin"
                        src={quentinG}
                        className={styles.picture}
                    />
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{identifier}</div>
                <div className={styles.mail}>{email}</div>
            </div>
            <div className={styles.settings}>
                <div className={styles.account}>
                    <p className={styles.account__title}>Compte</p>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper__right}>
                            <MdpSvg className={styles.wrapper__svg} />
                            <div className={styles.password}>
                                Changer de mot de passe
                            </div>
                        </div>
                        <RightArrow />
                    </div>
                </div>
                <div className={styles.account}>
                    <p className={styles.account__title}>Groupe de travail</p>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper__right}>
                            <GroupSvg className={styles.wrapper__svg} />
                            <div className={styles.password}>
                                G??rer mes groupes
                            </div>
                        </div>
                        <RightArrow />
                    </div>
                </div>
                <div className={styles.account}>
                    <p className={styles.account__title}>Notifications</p>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper__right}>
                            <MobileSvg className={styles.wrapper__svg} />
                            <div className={styles.password}>Mobile</div>
                        </div>
                        <Switch />
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper__right}>
                            <EmailSvg className={styles.wrapper__svg} />
                            <div className={styles.password}>Email</div>
                        </div>
                        <Switch />
                    </div>
                </div>
                <div className={styles.account}>
                    <p className={styles.account__title}>Pr??f??rences</p>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper__right}>
                            <CGUSvg className={styles.wrapper__svg} />
                            <div className={styles.password}>CGU</div>
                        </div>
                        <RightArrow />
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper__right}>
                            <ConfSvg className={styles.wrapper__svg} />
                            <div className={styles.password}>
                                Confidentialit??
                            </div>
                        </div>
                        <RightArrow />
                    </div>
                </div>
                <div
                    className={styles.disconnect}
                    onClick={() => dispatch(logout())}
                >
                    <p>Se d??connecter</p>
                </div>
                <div className={styles.credits}>
                    <LuminoLogo className={styles.luminoLogo} />
                    <NexusLogo />
                    <p>Made with ????&nbsp;by Lumino</p>
                </div>
            </div>
        </section>
    );
};

export default Settings;
