import { fetchAllMoviesGenres } from '../../services/TMDB/movies'
import Search from '../../components/Shared/Search'

export default async function Movies({ children }) {
  const genres = await fetchAllMoviesGenres()
  
  return (
    <>
      <Search placeholder='Search for movies'  />
      {children}
    </>
  )
}