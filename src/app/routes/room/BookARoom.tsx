import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import styles from "./Room.module.scss";
import { useState } from "react";
import { useApiBookARoomMutation, useApiGetBokingByRoomIdQuery } from "services/api/api";

import clsx from "clsx";
import { setUserError } from "features/user/userSlice";

const BookARoom = (): JSX.Element => {
    const { userType } = useParams<{ userType?: "student" | "admin" }>();
    const { data, isLoading } = useApiGetBokingByRoomIdQuery(4);
    const [bookARoomPost] = useApiBookARoomMutation();
    const history = useHistory();
    console.log(data);
    
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

    const [isBooked, setIsBooked] = useState(data?.data);
    

    const [start, setStart] = useState<number|undefined>();
    const [end, setEnd] = useState<number|undefined>();

    const bookARoom = async () => {
        try{
            if(start && end){
                const a = start.toString();
                const b = end.toString();
                const booking = {start: a, end: b, nameRoom: 'A105', studentEmail: 'nawel.borini@hetic.net'}
                const result = await bookARoomPost(booking).unwrap()
                    // .then(() => history.push("/student/dashboard"))
                    console.log(result);
                    
            }
        }
        catch(error) {
            console.log(error); 
        }
    }
    
    console.log(start, end);
    
    const [error, setError] = useState<Boolean|undefined>(false);



    const fixStartEnd = (int: any) => {       
        //@ts-ignore
        console.log(int);
        
        if (start !== undefined && Number(int) > start) {
            console.log(int, start);
            setEnd(int)
        }
        //@ts-ignore
        if(start === undefined || Number(int) < start){
            setStart(int)
        }
        
        if(end === Number(int)){
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
        if(data && data.data){
            setIsBooked(data.data)
        }
    }, [data])

    useEffect(() =>  {

        //@ts-ignore
        for(const keys in isBooked){
            //@ts-ignore
            if(Number(keys) >= start && Number(keys) <= end && isBooked[keys] === false) {
                //@ts-ignore
                setIsBooked({...isBooked, [Number(keys)]: 'userBooked'})
                //@ts-ignore
            } else if (Number(keys) < start || Number(keys) > end && isBooked[keys] === 'userBooked') {
                //@ts-ignore
                setIsBooked({...isBooked, [Number(keys)]: false});
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

    console.log(isBooked);
    
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
                    {isBooked && Object.keys(isBooked).map(function(key: any, index) {
                       return <li 
                        //@ts-ignore
                        className={clsx(styles.bottomWrapper__listItem, styles[isBooked[key]])}
                        onClick={() => {
                            //@ts-ignore
                            isBooked[key] === 'userBooked' ? setIsBooked({...isBooked, [key]: false}) :  setIsBooked({...isBooked, [key]: 'userBooked'})
                            fixStartEnd(Number(key))
                        }
                        } 
                    >{key}:00</li>
                    })}
                </ul>
               
                <button className={styles.ctn} 
                onClick={() => {
                    bookARoom() 
                }}
                >Réservez</button>
            </div>
        </section>
    );
};
export default BookARoom;