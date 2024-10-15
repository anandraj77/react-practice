import { useBioContext } from "."

export const About = () => {

    const {myName, myAge} = useBioContext();

    return (
        <h1>Hello Context Api (About Page). My name is {myName}. I am {myAge} years old</h1>
    )
}

    