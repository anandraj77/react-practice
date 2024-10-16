import "./Card.css"

/* eslint-disable react/prop-types */

export const Card = ({movieData}) => {
    const {Poster, imdbID} = movieData
    return (
        <>
            <li className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                        <img src={Poster} alt={imdbID} className="poster" />
                    </div>
                    <div className="ticket-container">
                        <div className="ticket__content">
                                <button className="ticket__buy-btn">Watch Now</button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
