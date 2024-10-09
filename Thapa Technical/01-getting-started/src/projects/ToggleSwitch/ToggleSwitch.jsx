import { useState } from "react"
import "./ToggleSwitch.css"
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState(false)

    const handleToggle = () => {
        setIsOn(!isOn)
    }

    const checkIsOn = isOn ? "on" : "off"
    const ToggleBgColor = { backgroundColor: isOn ? "#4caf50" : "" }

    return (
        <>
            <h1>Toggle Switch <IoIosSwitch style={{color:"#4caf50"}}/></h1>
            <div className="toggle-switch" onClick={handleToggle} style={ToggleBgColor}>
                <div className={`switch ${checkIsOn}`}>
                    <span className="switch-state">{checkIsOn}</span>
                </div>
            </div>
        </>
    )
}