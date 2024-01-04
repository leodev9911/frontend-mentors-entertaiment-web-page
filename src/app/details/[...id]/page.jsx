import GoBackButton from "../../../components/Shared/GoBackButton"
import Image from "next/image"
import { fetchMovieDetails } from "../../../services/TMDB/movies"
import { fetchTvDetails } from "../../../services/TMDB/tv";

export default async function Details({ params }) {
  console.log(params)
  
  let mediaToRender



  if (params.id[0] === 'movie') {
    mediaToRender = await fetchMovieDetails(params?.id[1])
  } else {
    mediaToRender = await fetchTvDetails(params?.id[1])
  }

  console.log(mediaToRender)

  return (
    <section>
      <GoBackButton />
      <h1>{mediaToRender?.title}</h1>
      {/* <Image

      /> */}
    </section>
  )
}