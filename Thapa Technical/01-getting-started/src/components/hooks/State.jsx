import { useState } from "react"
import '../EV.css'

const State = () => {

    const [count, setCount] = useState(0)
    console.log("Parent Component Rendered");
    

    const incrementCount = () => {
        setCount(() => count + 1)
    }

    return (
        <>
            <section className="main-div">
                <h1>{count}</h1>
                <button onClick={incrementCount}>Increment</button>
            </section>
            <ChildComponent childCount={count} />
        </>
    )
}

export default State

function ChildComponent({childCount}) {
    console.log("Child Component Rendered");
    return(
        <div className="main-div">
            <h2>Child Component - {childCount}</h2>
        </div>
    ) 
}