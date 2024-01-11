import { env } from "../../config/env"
import { TMDBUrls } from "./urls"

export const fetchAllMovies = async (page) => {
  try {
    const res = await fetch(`${TMDBUrls.movies.all}?api_key=${env.TMDB_API_KEY}&page=${page}`)
    const data = await res.json()
    const totalPages = data.total_pages
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: 'movie',
        title: media.title,
        imagePath: media.poster_path,
        yearOfRealease: media.release_date 
      }
    })
    return { mappedData, totalPages }
  } catch (error) {
    console.log(error)
  }
}

export const fetchMovieDetails = async (movieId) => {
  try {
    const res = await fetch(`${TMDBUrls.movies.details}/${movieId}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()
    console.log(data)
    const mappedData = {
      title: data.title,
      originalTitle: data.original_title, 
      imageURL: data.poster_path,
      releaseDate: data.release_date,
      tagline: data.tagline,
      duration: data.runtime,
      genres: data.genres,
      language: data.spoken_languages[0]?.name,
      homepage: data.homepage,
      synopsis: data.overview,
      imdb_id: data.imdb_id,
      rating: data.vote_average.toFixed(1),
      status: data.status
    }

    return mappedData
  } catch (error) {
    console.log(error)
  }
}
export const fetchMovieCredits = async (movieId) => {
  try {
    const res = await fetch(`${env.TMDB_HOSTNAME}/movie/${movieId}/${env.TMDB_TV_CREDITS}?api_key=${env.TMDB_API_KEY}`)
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

export const fetchFilteredMovies = async (page, query) => {
  try {
    const res = await fetch(`${TMDBUrls.movies.search}?api_key=${env.TMDB_API_KEY}&query=${query}&page=${page}`)
    const data = await res.json()
    const totalPages = data.total_pages
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: 'movie',
        title: media.title,
        imagePath: media.poster_path,
        yearOfRealease: media.release_date 
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
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: 'movie',
        title: media.title,
        imagePath: media.poster_path,
        yearOfRealease: media.release_date 
      }
    })
    return { mappedData, totalPages }
  } catch (error) {
    console.log(error)
  }
}

export const fetchUpcomingMovies = async () => {
  try {
    const res = await fetch(`${TMDBUrls.movies.upcomingMovies}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()
    const mappedData = data.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        mediaType: 'movie',
        imagePath: movie.poster_path,
        yearOfRealease: movie.release_date
      }
    })
    
    return mappedData
  } catch (error) {
    console.log(error)
  }
}
export const fetchTopRatedMovies = async () => {
  try {
    const res = await fetch(`${TMDBUrls.movies.topRatedMovies}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()
    const mappedData = data.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        mediaType: 'movie',
        imagePath: movie.poster_path,
        yearOfRealease: movie.release_date
      }
    })

    return mappedData
  } catch (error) {
    console.log(error)
  }
}

export const fetchPopularMovies = async () => {
  try {
    const res = await fetch(`${TMDBUrls.movies.popularMovies}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()
    const mappedData = data.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        mediaType: 'movie',
        imagePath: movie.poster_path,
        yearOfRealease: movie.release_date
      }
    })

    return mappedData
  } catch (error) {
    console.log(error)
  }
}

export const fetchNowPlayingMovies = async () => {
  try {
    const res = await fetch(`${TMDBUrls.movies.nowPlayingMovies}?api_key=${env.TMDB_API_KEY}`)
    const data = await res.json()
    const mappedData = data.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        mediaType: 'movie',
        imagePath: movie.poster_path,
        yearOfRealease: movie.release_date
      }
    })

    return mappedData
  } catch (error) {
    console.log(error)
  }
}

