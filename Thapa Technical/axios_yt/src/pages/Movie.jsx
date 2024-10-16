
import { useEffect, useState } from "react";
import { Card } from "../components/UI/Card";
import { getMovie } from "../services/GetService";

export const Movie = () => {

    const [data, setData] = useState([])


    const getMovieData = async() => {
        try {
        const response = await getMovie()
        console.log(response.data.Search);
        setData(response.data.Search)
            
        } catch (error) {
            console.log("Error message", error.message);
            console.log("Error status", error.response.status);
            console.log("Error data", error.response.data);
                     
        }
    }

    useEffect(() => {
        getMovieData();
    }, [])

    return (
        <ul className="container grid grid-four--cols">
            {
                data.map((curElem) => {
                    return <Card key={curElem.imdbID} movieData={curElem} />
                })
            }
        </ul>
    )
}   