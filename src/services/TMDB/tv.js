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

export const fetchTvDetails = async (tvId) => {
  try {
    const res = await fetch(`${TMDBUrls.tv.details}/${tvId}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()
    console.log(data)
    const mappedData = {
      title: data.name,
      originalTitle: data.original_name, 
      imageURL: data.poster_path,
      releaseDate: data.release_date,
      tagline: data.tagline,
      status: data.status,
      genres: data.genres,
      homepage: data.homepage,
      synopsis: data.overview,
      language: data.spoken_languages[0]?.name,
      releaseDate: data.first_air_date,
      lastAirDate: data.last_air_date,
      episodes: data.number_of_episodes,
      seasons: data.number_of_seasons,
      rating: data.vote_average.toFixed(1)
    }

    return mappedData
  } catch (error) {
    console.log(error)
  }
}

export const fetchTVCredits = async (tvId) => {
  try {
    const res = await fetch(`${env.TMDB_HOSTNAME}/tv/${tvId}/${env.TMDB_TV_CREDITS}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()

    const mappedData = data.cast?.filter(person => person.known_for_department === 'Acting').map(person => {
      return {
        id: person.id,
        name: person.name,
        image: person.profile_path
      }
    })

    return mappedData
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

export const fetchTVAiringToday = async () => {
  try {
    const res = await fetch(`${TMDBUrls.tv.airingTodayTV}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: 'tv',
        title: media.name,
        imagePath: media.poster_path,
        yearOfRealease: media.first_air_date 
      }
    })

    return mappedData
  } catch (error) {
    console.log(error)
  }
}
export const fetchTVOnTheAir = async () => {
  try {
    const res = await fetch(`${TMDBUrls.tv.onTheAirTV}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: 'tv',
        title: media.name,
        imagePath: media.poster_path,
        yearOfRealease: media.first_air_date 
      }
    })

    return mappedData
  } catch (error) {
    console.log(error)
  }
}
export const fetchTVPopular = async () => {
  try {
    const res = await fetch(`${TMDBUrls.tv.popularTV}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: 'tv',
        title: media.name,
        imagePath: media.poster_path,
        yearOfRealease: media.first_air_date 
      }
    })

    return mappedData
  } catch (error) {
    console.log(error)
  }
}
export const fetchTVTopRated = async () => {
  try {
    const res = await fetch(`${TMDBUrls.tv.topRatedTV}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: 'tv',
        title: media.name,
        imagePath: media.poster_path,
        yearOfRealease: media.first_air_date 
      }
    })

    return mappedData
  } catch (error) {
    console.log(error)
  }
}