import axios from "axios";

const api = axios.create({
    baseURL:
    "https://www.omdbapi.com/"
})

// creating a get req function
export const getMovie = () => {
    return api.get("?i=tt38961988&apikey=1c12799f&s=titanic&page=1")
}