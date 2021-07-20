import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Room.module.scss";
import { useState } from "react";

import clsx from "clsx";

const BookARoom = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    const bookingStore = { 
        9: 'free',
        10: 'booked',
        11: 'booked',
        12: 'free',
        13: 'free',
        14: 'free',
        15: 'booked',
        16: 'free',
        17: 'free',
        18: 'free',
        19: 'booked',
        20: 'free',
        21: 'free',
    };

    const [isBooked, setIsBooked] = useState(bookingStore);
    return (
        <section className={styles.section}>
            <div className={styles.topWrapper}>
                <div className={styles.topWrapper__book}>
                   <h1>Reservation</h1>
                </div>
                <div className={styles.topWrapper__room}>
                    <p className={styles.room}>Salle</p>
                    <p className={styles.roomName}>A10</p>
                </div>
            </div>
            <div className={styles.bottomWrapper}>
                <p className={styles.bottomWrapper__start}>Arrivée</p>
                <ul className={styles.bottomWrapper__list}>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[9]])}
                        onClick={() => isBooked[9] === 'userBooked' ? setIsBooked({...isBooked, 9: 'free'}) :  setIsBooked({...isBooked, 9: 'userBooked'})
                        }
                    >9:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[10]])}
                        onClick={() => isBooked[10] === 'userBooked' ? setIsBooked({...isBooked, 10: 'free'}) :  setIsBooked({...isBooked, 10: 'userBooked'})}
                    >10:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[11]])}
                        onClick={() => isBooked[11] === 'userBooked' ? setIsBooked({...isBooked, 11: 'free'}) :  setIsBooked({...isBooked, 11: 'userBooked'})}

                    >11:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[12]])}
                        onClick={() => isBooked[12] === 'userBooked' ? setIsBooked({...isBooked, 12: 'free'}) :  setIsBooked({...isBooked, 12: 'userBooked'})}

                    >12:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[13]])}
                        onClick={() => isBooked[13] === 'userBooked' ? setIsBooked({...isBooked, 13: 'free'}) :  setIsBooked({...isBooked, 13: 'userBooked'})}

                    >13:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[14]])}
                        onClick={() => isBooked[14] === 'userBooked' ? setIsBooked({...isBooked, 14: 'free'}) :  setIsBooked({...isBooked, 14: 'userBooked'})}

                    >14:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[15]])}
                        onClick={() => isBooked[15] === 'userBooked' ? setIsBooked({...isBooked, 15: 'free'}) :  setIsBooked({...isBooked, 15: 'userBooked'})}

                    >15:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[16]])}
                        onClick={() => isBooked[16] === 'userBooked' ? setIsBooked({...isBooked, 16: 'free'}) :  setIsBooked({...isBooked, 16: 'userBooked'})}

                    >16:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[17]])}
                        onClick={() => isBooked[17] === 'userBooked' ? setIsBooked({...isBooked, 17: 'free'}) :  setIsBooked({...isBooked, 17: 'userBooked'})}

                    >17:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[18]])}
                        onClick={() => isBooked[18] === 'userBooked' ? setIsBooked({...isBooked, 18: 'free'}) :  setIsBooked({...isBooked, 18: 'userBooked'})}

                    >18:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[19]])}
                        onClick={() => isBooked[19] === 'userBooked' ? setIsBooked({...isBooked, 19: 'free'}) :  setIsBooked({...isBooked, 19: 'userBooked'})}

                    >19:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[20]])}
                        onClick={() => isBooked[20] === 'userBooked' ? setIsBooked({...isBooked, 20: 'free'}) :  setIsBooked({...isBooked, 20: 'userBooked'})}

                    >20:00</li>
                    <li 
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[21]])}
                        onClick={() => isBooked[21] === 'userBooked' ? setIsBooked({...isBooked, 21: 'free'}) :  setIsBooked({...isBooked, 21: 'userBooked'})}

                    >21:00</li>
                </ul>
            </div>
        </section>
    );
};

export default BookARoom;