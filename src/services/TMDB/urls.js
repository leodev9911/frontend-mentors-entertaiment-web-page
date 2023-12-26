import { env } from "../../config/env"

export const TMDBUrls = {
  movies: {
    all: `${env.TMDB_HOSTNAME}${env.TMDB_ALL_MOVIES}`,
    genres: `${env.TMDB_HOSTNAME}${env.TMDB_ALL_GENRES}`,
  }
}