import './EV.css'

const EventHandling = () => {

    const handleButtonClick = () => {
        alert("button clicked")
    }

    const handleWelcomeUser = (name) => {
        console.log(`${name} Calling Argument`)
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click Me!</button>
            <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
            <button onClick={(event) => console.log(event)}>Inline Function</button>
            <button onClick={() => alert("Alerting inline arrow")}>Inline Arrow Fn</button>

            {/* Passing Arguments to Event Handlers */}
            {/* <button onClick={handleWelcomeUser}>Click Me!</button> */}

            <button onClick={() => handleWelcomeUser("Anand")}>Click Me!</button>
        </>
    )
}

export default EventHandling
