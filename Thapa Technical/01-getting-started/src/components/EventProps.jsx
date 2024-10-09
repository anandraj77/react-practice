

export const EventProps = () => {

    const handleWelcomeUser = (user) => {
        alert(`Hey, ${user}`)
    }

    const handleHover = () => {
        alert(`Hey Thanks for Hovering`)
    }

    return (
        <WelcomeUser clickMe={() => handleWelcomeUser("Anand")}
            hoverMe={handleHover} />
    )
}

const WelcomeUser = (props) => {
    const handleGreeting = () => {
        console.log("Hey user, welcome");
        props.onClick()
    }
    return(
        <>
            <button onClick={props.clickMe}>Click!</button>
            <button onMouseEnter={props.hoverMe}>Hover Me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}