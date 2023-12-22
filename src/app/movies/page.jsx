import MoviesCards from '../../components/MoviesPage/MovieCard'
import { dataMap } from '../../lib/data'
import { getAllMovies } from '../../services/TMDB/index'

export default async function Movies() {
  const { popularMovies } = dataMap()
  const allMovies = await getAllMovies()
  console.log(allMovies.total_pages)

  return (
    <section className='w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7'>
      {popularMovies.map(movie => {
        return <MoviesCards 
          key={movie.id} 
          title={movie.title}
          imagePath={movie.imagePath}
          yearOfRealease={movie.yearOfRealease}
        />
      })}
    </section>
  )
}