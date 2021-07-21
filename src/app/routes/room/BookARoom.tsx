import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Room.module.scss";
import { useState } from "react";

import clsx from "clsx";
import { setUserError } from "features/user/userSlice";

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

    const [start, setStart] = useState<number|undefined>();
    const [end, setEnd] = useState<number|undefined>();

    const [error, setError] = useState<Boolean|undefined>(false);



    const fixStartEnd = (int: any) => {       
        //@ts-ignore
        if (int > start || start !== undefined) {
            setEnd(int)
        }
        //@ts-ignore
        if(start === undefined || int < start){
            setStart(int)
        }

        if(end === int){
            for(const keys in isBooked){
                //@ts-ignore
                if(isBooked[keys] === 'userBooked' && keys > start && keys < end){
                    //@ts-ignore
                    setEnd(Number(keys))
                }
            }
        }
    }

    useEffect(() =>  {

        //@ts-ignore
        for(const keys in isBooked){
            //@ts-ignore
            if(Number(keys) > start && Number(keys) < end && isBooked[keys] === 'free') {
                //@ts-ignore
                setIsBooked({...isBooked, [Number(keys)]: 'userBooked'})
            }

            //@ts-ignore
            if(Number(keys) > start && Number(keys) < end && isBooked[keys] === 'booked') {
                //@ts-ignore   
                setError(true);
            //@ts-ignore
            } else if (Number(keys) > start && Number(keys) < end && isBooked[keys] !== 'booked'){
                //@ts-ignore   
                setError(false)
            }
        }
    }, [isBooked])

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
                {error &&
                    <p className={styles.errorMsg}>Ce créneau horraires n'est pas disponible, veuillez en sélectionner un autre.</p>
                }
                <p className={styles.bottomWrapper__start}>{start === undefined ? "Séléctionnez votre départ" : "Séléctionnez votre arrivée"}</p>
                <ul className={styles.bottomWrapper__list}>
                    {Object.keys(isBooked).map(function(key: any, index) {
                       return <li 
                        //@ts-ignore
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[key]])}
                        onClick={() => {
                            //@ts-ignore
                            isBooked[key] === 'userBooked' ? setIsBooked({...isBooked, [key]: 'free'}) :  setIsBooked({...isBooked, [key]: 'userBooked'})
                            fixStartEnd(key)
                        }
                        } 
                    >{key}:00</li>
                    })}
                </ul>
                <button className={styles.ctn}>Réservez</button>
            </div>
        </section>
    );
};
export default BookARoom;