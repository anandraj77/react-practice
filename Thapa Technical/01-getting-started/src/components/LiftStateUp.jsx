import { useState } from "react"


export const LiftStateUp = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <InputComponent inputVal = {inputValue} setVal={setInputValue}/>
            <DisplayComponent inputVal = {inputValue} />
        </>
    )
}

const InputComponent = (props) => {
    
    return (
        <>
            <input
                type="text"
                placeholder="enter your name"
                value={props.inputVal}
                onChange={(e) => props.setVal(e.target.value)}
            >
            </input>
        </>
    )
}

const DisplayComponent = (props) => {
    return (
        <p>The Current input value is: {props.inputVal}</p>
    )
}