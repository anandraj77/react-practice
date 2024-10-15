import { useRef } from "react";
import "./index.css"

export const UseRef = () => {

    // old way (not best approach)
    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     const username = document.getElementById("username")
    //     const password = document.getElementById("password")
    //     console.log(username.value, password.value);
    // }

    // using Refs
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    
    // console.log(passwordRef);
    

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(usernameRef.current.value, passwordRef.current.value);
    }

    return (
        (
            <form onSubmit={handleFormSubmit}>
                <input type="text" id="username" ref={usernameRef}/>
                <br />
                <input type="text" id="password" ref={passwordRef}/>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    )
}

