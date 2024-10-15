

export const getMoviesData = async() => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=tt38961988&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`)
      const data = response.json();
      return data
    } catch (error) {
        console.log(error);
    }
}
