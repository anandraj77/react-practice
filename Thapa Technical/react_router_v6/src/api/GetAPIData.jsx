

export const getMoviesData = async() => {
    try {
      const response = await fetch("https://www.omdbapi.com/?i=tt38961988&apikey=1c12799f&s=titanic&page=1")
      const data = response.json();
      return data
    } catch (error) {
        console.log(error);
    }
}
