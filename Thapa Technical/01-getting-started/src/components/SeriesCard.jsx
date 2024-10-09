
import styles from './Netflix.module.css'
import styled from 'styled-components'

export const SeriesCard = (props) => {
    console.log(props);

    // Destructuring
    const { name, id, img_url, rating, description, cast, genre, watch_url } = props.data

    const btn_style = {
        padding: "1rem",
        width: "12rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
    }

    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;



    const Button = styled.button({
        padding: "1rem",
        width: "12rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
    });

    // Using template literals
    const ButtonLiterals = styled.button`
        padding: 1rem;
        width: 12rem;
        background-color: ${(props) =>
            props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
        color: var(--btn-color);
        font-weight: bold;
        cursor: pointer;
        border: none;
    `

    const Rating = styled.h3({
        fontSize: "1.6rem",
        color: "#7dcea0",
        textTransform: 'capitalize'
    })


return (
    <li className={styles.card}>
        <div>
            <img src={img_url} alt={name} width="50%" height="50%" />
        </div>
        <div className={styles['card-content']}>
            <h2>Name: {name}</h2>
            <Rating>
                Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
            </Rating>
            <p>Summary: {description}</p>
            <p>Genre: {genre.join(", ")}</p>
            <p>Cast: {cast.join(", ")}</p>
            <a href={watch_url} target='_blank'>
                {/* <button style={btn_style}>Watch Now</button> */}
                <ButtonLiterals rating={rating}>Watch Now</ButtonLiterals>
            </a>
        </div>
    </li >
)
}