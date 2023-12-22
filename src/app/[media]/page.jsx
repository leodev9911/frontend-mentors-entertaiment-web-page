import MediaCards from '../../components/MediaPages/MediaCard'
import { fetchAllMovies } from '../../services/TMDB/movies'
import Pagination from '../../components/MediaPages/Pagination'


export default async function Movies({ searchParams }) {
  const currentPage = Number(searchParams.page)
  const { mappedData, totalPages } = await fetchAllMovies(currentPage)
  
  return (
    <>
      <section className='w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7'>
        {mappedData?.map(media => {
          return <MediaCards 
            key={media.id} 
            title={media.title}
            imagePath={media.imagePath}
            yearOfRealease={media.yearOfRealease}
          />
        })}
      </section>
      <Pagination 
        totalPages={500}
      />
    </>
  )
}