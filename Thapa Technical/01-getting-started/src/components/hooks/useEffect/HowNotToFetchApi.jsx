import { useEffect, useState } from "react"
import "./Pokemon.css"

export const HowNotToFetchApi = () => {

    const [apiData, setApiData] = useState([])

    // This is bad way to fetch api data
    // fetch("https:/jsonplaceholder.typicode.com/posts")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setApiData(data)  // This results in infinite re-rendering (check network tab)
    //     })
    //     .catch((error) => console.log(error))

    // Better Way
    useEffect(() => {
        fetch("https:/jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setApiData(data) // Now this won't send infinite requests
            })
            .catch((error) => console.log(error))
    }, []) // This array dependency makes sure to run it just once (so no inifite requests)

    return (
        <div className="container effect-container">
            <ul>data:
                {
                    apiData.map((curData) => {
                        return <li key={curData.id}>{curData.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

