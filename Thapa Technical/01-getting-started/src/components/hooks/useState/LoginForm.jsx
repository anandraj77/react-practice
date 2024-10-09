import { useState } from "react"
import "./index.css"

export const LoginForm = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setUser((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" autoComplete="off"
                        value={user.username}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" autoComplete="off"
                        value={user.password}
                        onChange={handleInputChange}
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}