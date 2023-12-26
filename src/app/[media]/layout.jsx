import Pagination from '../../components/MediaPages/Pagination'
import { fetchAllMoviesGenres } from '../../services/TMDB/movies'
import GenreSection from '../../components/MediaPages/GenreSection'


export default async function Movies({ children }) {
  const genres = await fetchAllMoviesGenres()

  return (
    <>
      <GenreSection genres={genres} />
      <section className='w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7'>
        {children}
      </section>
      <Pagination 
        totalPages={500}
      />
    </>
  )
}