import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState(0);
    const [inputStep, setInputStep] = useState(0)

    // Inrememt
    const handleIncrement = () => {
        if(count < 100) {
            setCount(count + inputStep)
        }
    }

    // Decrement
    const handleDecrement = () => {
        if(count > 0) {
            setCount(count - inputStep)
        }
    }

    return (
        <>
            <div className="container state-container" style={{ textAlign: "center" }}>
                <h1>useSate Hook!</h1>
                <br />
                <p>{count}</p>
                <input type="number"
                    value={inputStep}
                    onChange={(event) => setInputStep(Number(event.target.value))}
                >
                </input>
                <button className="state-button" onClick={handleIncrement}>Increment</button>
                <button className="state-button" onClick={handleDecrement}>Decrement</button>
                <button className="state-button" onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    )
}