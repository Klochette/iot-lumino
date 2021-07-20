import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Settings.module.scss";
import { ReactComponent as Pdp } from "assets/images/pdp.svg";
import { useAppSelector } from "app/store";
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



const Settings = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    console.log(userType);
    const {identifier, email} = useAppSelector((state) => state.user)
    return (
    <section className={styles.container}>
        <div className={styles.header}>
            <div className = {styles.title}>Profil</div>
            <Pdp className={styles.picture}/>
        </div>
        <div className = {styles.info}>
            <div className={styles.name}>{identifier}</div>
            <div className={styles.mail}>{email}</div>
        </div>
        <div className = {styles.settings}>
            <div className={styles.account}>
                <p className={styles.account__title}>Compte</p>
                <div className={styles.wrapper}>
                    <div className={styles.wrapper__right}>
                        <MdpSvg className={styles.wrapper__svg}/>
                        <div className={styles.password}>Changer de mot de passe</div>
                    </div>
                    <RightArrow />
                </div>
            </div>
            <div className={styles.account}>
                <p className={styles.account__title}>Groupe de travail</p>
                <div className={styles.wrapper}>
                    <div className={styles.wrapper__right}>
                        <GroupSvg className={styles.wrapper__svg}/>
                        <div className={styles.password}>Gérer mes groupes</div>
                    </div>
                    <RightArrow />
                </div>
            </div>
            <div className={styles.account}>
                <p className={styles.account__title}>Notifications</p>
                <div className={styles.wrapper}>
                    <div className={styles.wrapper__right}>
                        <MobileSvg className={styles.wrapper__svg}/>
                        <div className={styles.password}>Mobile</div>
                    </div>
                    <Switch />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.wrapper__right}>
                        <EmailSvg className={styles.wrapper__svg}/>
                        <div className={styles.password}>Email</div>
                    </div>
                    <Switch />
                </div>
            </div>
            <div className={styles.account}>
                <p className={styles.account__title}>Préférences</p>
                <div className={styles.wrapper}>
                    <div className={styles.wrapper__right}>
                        <CGUSvg className={styles.wrapper__svg}/>
                        <div className={styles.password}>CGU</div>
                    </div>
                    <RightArrow />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.wrapper__right}>
                        <ConfSvg className={styles.wrapper__svg}/>
                        <div className={styles.password}>Confidentialité</div>
                    </div>
                    <RightArrow />
                </div>
            </div>
            <div className={styles.disconnect}>
                <p>Se déconnecter</p>
            </div>
            <div className={styles.credits}>
                <LuminoLogo className={styles.luminoLogo} />
                <NexusLogo />
                <p>Made with 💛&nbsp;by Lumino</p>
            </div>

        </div>
    </section>
    );
};

export default Settings;
