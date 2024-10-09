
import { useState } from "react"
import "./index.css"
export const Registration = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        switch (name) {
            case "firstname":
                setFirstName(value)
                break;
            case "lastname":
                setLastName(value)
                break;
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
            case "phone":
                setPhone(value)
                break;
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phone
        }

        console.log(formData);

    }

    return (
        <>
            <section className="form-wrapper">
                <form onSubmit={handleFormSubmit}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account</p>

                        <label htmlFor="firstname">
                            <b>First Name</b>
                        </label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Enter firstname"
                            required
                            value={firstName}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="lastname">
                            <b>Last Name</b>
                        </label>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Enter lastname"
                            required
                            value={lastName}
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
                            value={email}
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
                            value={password}
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
                            value={phone}
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
                            {firstName} {lastName}
                        </span>
                        . My email address is <span>{email}</span> and my phone number is <span>{phone}</span>
                    </p>
                </section>
            </section>
        </>
    )
}

