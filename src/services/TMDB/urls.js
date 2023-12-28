import { env } from "../../config/env"

export const TMDBUrls = {
  global: {
    search: `${env.TMDB_HOSTNAME}${env.TMDB_SEARCH_GLOBAL}`
  },
  movies: {
    all: `${env.TMDB_HOSTNAME}${env.TMDB_ALL_MOVIES}`,
    genres: `${env.TMDB_HOSTNAME}${env.TMDB_ALL_GENRES}`,
    search: `${env.TMDB_HOSTNAME}${env.TMDB_SEARCH_MOVIES}`
  },
  tv: {
    all: `${env.TMDB_HOSTNAME}${env.TMDB_ALL_TV}`,
    genres: `${env.TMDB_HOSTNAME}${env.TMDB_ALL_TV_GENRES}`,
    search: `${env.TMDB_HOSTNAME}${env.TMDB_SEARCH_TV}`
  }
}