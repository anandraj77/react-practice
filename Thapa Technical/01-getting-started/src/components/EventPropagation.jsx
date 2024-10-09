import "./EV.css"

const EventPropagation = () => {

    const handleGrandParent = () => {
        console.log("GrandParent clicked");
        
    }
    const handleParentClick = () => {
        console.log("Parent clicked");
        
    }
    const handleChildClick = (event) => {
        console.log(event);
        event.stopPropagation();
        console.log("Child div clicked");
    }

    return (
        <section className="main-div">
            {/* Bubbling phase */}
            <div className="g-div" onClick={handleGrandParent}>
                <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>

            {/* Capturing Phase */}
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
    )
}

export default EventPropagation
