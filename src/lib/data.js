import nowPlayingMoviesData from '../mocks/now-playing-movies.json'
import popularMoviesData from '../mocks/popular-movies.json'
import topRatedMoviesData from '../mocks/top-rated-movies.json'
import upcomingMoviesData from '../mocks/upcoming-movies.json'

export function dataMap() {
  const nowPlayingMovies = nowPlayingMoviesData.results.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      imagePath: movie.poster_path,
      yearOfRealease: movie.release_date
    }
  })
  const popularMovies = popularMoviesData.results.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      imagePath: movie.poster_path,
      yearOfRealease: movie.release_date
    }
  })
  const topRatedMovies = topRatedMoviesData.results.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      imagePath: movie.poster_path,
      yearOfRealease: movie.release_date
    }
  })
  const upcomingMovies = upcomingMoviesData.results.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      imagePath: movie.poster_path,
      yearOfRealease: movie.release_date
    }
  })

  return { 
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies
  }
}