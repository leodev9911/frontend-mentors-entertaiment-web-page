import HomeSection from "../components/Home/HomeSection"
import Search from "../components/Shared/Search"
import MediaSection from '../components/MediaPages/MediaSection'
import { fetchFilteredMedia } from '../services/TMDB/global'
import Pagination from "../components/MediaPages/Pagination"

export default async function Main({ searchParams }) {
  const currentPage = Number(searchParams.page) || 1
  let media = []
  let totalPages
  const query = searchParams.query

  if (query) {
    let data = await fetchFilteredMedia(currentPage, query)
    media = data.mappedData
    totalPages = data.totalPages
  } 

  return (
    <section className='flex flex-col gap-9'>
      <Search placeholder='Search for movies or TV shows' />
      {!media.length > 0 && <HomeSection />}
      {media.length > 0 && <section className='w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7'>
        <MediaSection media={media} />
      </section>}
      {totalPages > 1 && <Pagination 
        totalPages={totalPages}
      />}
    </section>
  )
}