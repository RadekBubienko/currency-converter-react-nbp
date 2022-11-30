import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [myDate, setMyDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMyDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    

    return {
        myDate,
    };
};