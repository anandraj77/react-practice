import { useEffect, useState } from "react";


export const TodoDateTime = () => {
    // for Time and Date
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const dateChange = date.toLocaleDateString();
            const timeChange = date.toLocaleTimeString('en-IT');
            setDateTime(`${dateChange} - ${timeChange}`)
        }, 1000);

        return () => clearInterval(interval)
    }, [])
    return (
        <h1 className="date-time">{dateTime}</h1>
    )
}

