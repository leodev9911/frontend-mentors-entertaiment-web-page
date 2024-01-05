import { env } from "../../config/env"

export const TMDBUrls = {
  global: {
    search: `${env.TMDB_HOSTNAME}${env.TMDB_SEARCH_GLOBAL}`,
  },
  movies: {
    all: `${env.TMDB_HOSTNAME}${env.TMDB_ALL_MOVIES}`,
    genres: `${env.TMDB_HOSTNAME}${env.TMDB_ALL_GENRES}`,
    search: `${env.TMDB_HOSTNAME}${env.TMDB_SEARCH_MOVIES}`,
    upcomingMovies: `${env.TMDB_HOSTNAME}${env.TMDB_UPCOMING_MOVIES}`,
    topRatedMovies: `${env.TMDB_HOSTNAME}${env.TMDB_TOP_RATED_MOVIES}`,
    popularMovies: `${env.TMDB_HOSTNAME}${env.TMDB_POPULAR_MOVIES}`,
    nowPlayingMovies: `${env.TMDB_HOSTNAME}${env.TMDB_NOW_PLAYING_MOVIES}`,
    details: `${env.TMDB_HOSTNAME}${env.TMDB_MOVIE_DETAILS}`,
  },
  tv: {
    all: `${env.TMDB_HOSTNAME}${env.TMDB_ALL_TV}`,
    genres: `${env.TMDB_HOSTNAME}${env.TMDB_ALL_TV_GENRES}`,
    search: `${env.TMDB_HOSTNAME}${env.TMDB_SEARCH_TV}`,
    airingTodayTV: `${env.TMDB_HOSTNAME}${env.TMDB_TV_AIRING_TODAY}`,
    onTheAirTV: `${env.TMDB_HOSTNAME}${env.TMDB_TV_ON_THE_AIR}`,
    popularTV: `${env.TMDB_HOSTNAME}${env.TMDB_TV_POPULAR}`,
    topRatedTV: `${env.TMDB_HOSTNAME}${env.TMDB_TV_TOP_RATED}`,
    details: `${env.TMDB_HOSTNAME}${env.TMDB_TV_DETAILS}`
  }
}