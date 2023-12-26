import MediaSection from '../../../components/MediaPages/MediaSection'
import { fetchAllMovies, fetchAllMoviesGenres, fetchMoviesFromGenre } from '../../../services/TMDB/movies'

export default async function MediaCategories({ searchParams, params }) {
  const currentPage = Number(searchParams.page) || 1
  const genres = await fetchAllMoviesGenres()
  const genreID = genres?.find(genre => genre.name === params.categories)?.id
  let media = []

  if (genreID) {
    media = (await fetchMoviesFromGenre(genreID, currentPage))?.mappedData
  } else {
    media = (await fetchAllMovies(currentPage))?.mappedData
  }

  return <MediaSection media={media} />
}