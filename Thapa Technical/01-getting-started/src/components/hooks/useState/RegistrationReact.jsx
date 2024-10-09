
import { useState } from "react"
import "./index.css"

export const RegistrationReact = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
    })

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setUser((prev) => ({...prev, [name]: value}))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <>
            <section className="form-wrapper">
                <form onSubmit={handleFormSubmit}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account</p>

                        <label htmlFor="firstName">
                            <b>First Name</b>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter firstname"
                            required
                            value={user.firstName}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="lastName">
                            <b>Last Name</b>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter lastname"
                            required
                            value={user.lastName}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            required
                            value={user.email}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="password">
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required
                            value={user.password}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="phone">
                            <b>Password</b>
                        </label>
                        <input
                            type="phone"
                            placeholder="9876543210"
                            name="phone"
                            required
                            value={user.phone}
                            onChange={handleInputChange}
                        />

                        <p>
                            By creating an account you agree to our
                            <a href="#" style={{ color: "dodgerblue" }}>
                                Terms & Privacy
                            </a>
                        </p>

                        <div className="clearfix">
                            <button type="submit" className="btn">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>

                <section className="summary" style={{ textAlign: "center", marginTop: "30px" }}>
                    <p>
                        Hello, my name is
                        <span>
                            {user.firstName} {user.lastName}
                        </span>
                        . My email address is <span>{user.email}</span> and my phone number is <span>{user.phone}</span>
                    </p>
                </section>
            </section>
        </>
    )
}
