import { env } from "../../config/env"
import { TMDBUrls } from "./urls"

export const fetchAllTV = async (page) => {
  try {
    const res = await fetch(`${TMDBUrls.tv.all}?api_key=${env.TMDB_API_KEY}&page=${page}`)
    console.log(`${TMDBUrls.tv.all}?api_key=${env.TMDB_API_KEY}&page=${page}`)
    const data = await res.json()
    console.log(data)
    const totalPages = data.total_pages
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: 'tv',
        title: media.name,
        imagePath: media.poster_path,
        yearOfRealease: media.first_air_date 
      }
    })
    console.log(mappedData)
    return { mappedData, totalPages }
  } catch (error) {
    console.log(error)
  }
}
export const fetchFilteredTV = async (page, query) => {
  try {
    const res = await fetch(`${TMDBUrls.tv.search}?api_key=${env.TMDB_API_KEY}&query=${query}&page=${page}`)
    const data = await res.json()
    const totalPages = data.total_pages
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: 'tv',
        title: media.name,
        imagePath: media.poster_path,
        yearOfRealease: media.first_air_date 
      }
    })
    return { mappedData, totalPages }
  } catch (error) {
    console.log(error)
  }
}

export const fetchAllTVGenres = async () => {
  try {
    const res = await fetch(`${TMDBUrls.tv.genres}?api_key=${env.TMDB_API_KEY}`)
    const { genres } = await res.json()
    return genres
  } catch (error) {
    console.log(error)
  }
}

export const fetchTVFromGenre = async (genreID, page) => {
  try {
    const res = await fetch(`${TMDBUrls.tv.all}?api_key=${env.TMDB_API_KEY}&with_genres=${genreID}&page=${page}`)
    const data = await res.json()
    const totalPages = data.total_pages
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: 'tv',
        title: media.name,
        imagePath: media.poster_path,
        yearOfRealease: media.first_air_date 
      }
    })
    return { mappedData, totalPages }
  } catch (error) {
    console.log(error)
  }
}

