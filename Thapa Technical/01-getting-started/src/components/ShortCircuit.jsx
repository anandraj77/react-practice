// import "./Hooks.css"

import { useState } from "react";

const ShortCircuit = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [user, setUser] = useState("")

    return (
        <section className="container short-container">
            <h1>Welcome to the ShortCirtuit Evaluation</h1>

        {/* Conditional rendering using short evaluation */}
        {isLoggedIn && <p>You are logged in</p>}

        {/* Another example of short Evaluation */}
        {user ? `Hello ${user}` : "Please Log in"}

        <div className="grid-three-cols">
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
            <button onClick={() => setUser("Anand Raj")}>Set User</button>
            <button onClick={() => setUser("")}>Clear User</button>
        </div>

        </section>
    )
}

export default ShortCircuit;
