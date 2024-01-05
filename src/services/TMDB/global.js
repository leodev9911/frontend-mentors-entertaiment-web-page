import { env } from "../../config/env"
import { TMDBUrls } from "./urls"

export const fetchFilteredMedia = async (page, query) => {
  try {
    const res = await fetch(`${TMDBUrls.global.search}?api_key=${env.TMDB_API_KEY}&query=${query}&page=${page}`)
    const data = await res.json()
    const totalPagesFromApi = data.total_pages
    const mappedData = data.results.map(media => {
      return {
        id: media.id,
        mediaType: media.media_type,
        title: media.media_type === 'movie' ? media.title : media.name,
        imagePath: media.poster_path,
        yearOfRealease: media.media_type === 'movie' ? media.release_date : media.first_air_date
      }
    })
    return { mappedData, totalPagesFromApi }
  } catch (error) {
    console.log(error)
  }
}

