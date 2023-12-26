import { env } from "../../config/env"
import { TMDBUrls } from "./urls"

export const fetchAllMovies = async (page) => {
  try {
    const res = await fetch(`${TMDBUrls.movies.all}?api_key=${env.TMDB_API_KEY}&page=${page}`)
    const data = await res.json()
    const totalPages = data.total_pages
    const mappedData = data.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        imagePath: movie.poster_path,
        yearOfRealease: movie.release_date
      }
    })
    return { mappedData, totalPages }
  } catch (error) {
    console.log(error)
  }
}

export const fetchAllMoviesGenres = async () => {
  try {
    const res = await fetch(`${TMDBUrls.movies.genres}?api_key=${env.TMDB_API_KEY}`)
    const { genres } = await res.json()
    return genres
  } catch (error) {
    console.log(error)
  }
}

export const fetchMoviesFromGenre = async (genreID, page) => {
  try {
    const res = await fetch(`${TMDBUrls.movies.all}?api_key=${env.TMDB_API_KEY}&with_genres=${genreID}&page=${page}`)
    const data = await res.json()
    const totalPages = data.total_pages
    const mappedData = data.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        imagePath: movie.poster_path,
        yearOfRealease: movie.release_date
      }
    })
    return { mappedData, totalPages }
  } catch (error) {
    console.log(error)
  }
}

