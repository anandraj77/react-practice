import { useEffect, useState } from "react"
import "./index.css"

export const ReactUseEffect = () => {

    const [time, setTime] = useState(0)

    useEffect(() => {
        setInterval(() => {
            const curTime = new Date().toLocaleTimeString('en-IN');
            setTime(curTime)
        }, 1000);
    }, [time])

    // Cleanup Function
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000);

        return () => clearInterval(interval)
    }, [count])

    return (
        <div className="container effect-container">
            <h1>useEffect Hook</h1>
            <p>Current Time: {time}</p>
            <p>{count}</p>
        </div>
    )
}