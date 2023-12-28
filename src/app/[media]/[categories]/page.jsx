import MediaSection from '../../../components/MediaPages/MediaSection'
import Pagination from '../../../components/MediaPages/Pagination'
import GenreSection from '../../../components/MediaPages/GenreSection'
import { 
  fetchAllMovies, 
  fetchAllMoviesGenres, 
  fetchFilteredMovies, 
  fetchMoviesFromGenre 
} from '../../../services/TMDB/movies'
import { 
  fetchAllTV, 
  fetchAllTVGenres, 
  fetchFilteredTV, 
  fetchTVFromGenre 
} from '../../../services/TMDB/tv'

export default async function MediaCategories({ searchParams, params }) {
  let genres 
  let media = []
  let totalPages
  const query = searchParams.query
  const currentPage = Number(searchParams.page) || 1
  const genreID = genres?.find(genre => genre.name === params.categories)?.id
  
  if (params.media === 'tv') {
    genres = await fetchAllTVGenres()
  } else {
    genres = await fetchAllMoviesGenres()
  }

  if (params.media === 'tv') {
    if (genreID) {
      let data = await fetchTVFromGenre(genreID, currentPage)
      console.log(data)
      media = data.mappedData
      totalPages = data.totalPages
    } else {
      let data = await fetchAllTV(currentPage)
      media = data.mappedData
      totalPages = data.totalPages
    }
  
    if (query) {
      let data = await fetchFilteredTV(currentPage, query)
      media = data.mappedData
      totalPages = data.totalPages
    }   
  } else {
    if (genreID) {
      let data = await fetchMoviesFromGenre(genreID, currentPage)
      media = data.mappedData
      totalPages = data.totalPages
    } else {
      let data = await fetchAllMovies(currentPage)
      media = data.mappedData
      totalPages = data.totalPages
    }
  
    if (query) {
      let data = await fetchFilteredMovies(currentPage, query)
      media = data.mappedData
      totalPages = data.totalPages
    } 
  }


  return (
    <>
      {!query && <GenreSection genres={genres} />}
      <section className='w-full grid mt-9 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7'>
        <MediaSection media={media} />
      </section>
      {totalPages > 1 && <Pagination 
        totalPages={totalPages}
      />}
    </>
  )
}