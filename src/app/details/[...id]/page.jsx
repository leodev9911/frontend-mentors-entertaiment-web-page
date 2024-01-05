import GoBackButton from "../../../components/Shared/GoBackButton"
import Image from "next/image"
import { fetchMovieCredits, fetchMovieDetails } from "../../../services/TMDB/movies"
import { fetchTVCredits, fetchTvDetails } from "../../../services/TMDB/tv";
import { env } from "../../../config/env";

export default async function Details({ params }) {
  let mediaToRender
  let cast

  if (params.id[0] === 'movie') {
    mediaToRender = await fetchMovieDetails(params?.id[1])
    cast = await fetchMovieCredits(params?.id[1])
  } else {
    mediaToRender = await fetchTvDetails(params?.id[1])
    cast = await fetchTVCredits(params?.id[1])
  }


  return (
    <section>
      <div className="flex gap-5">
        <GoBackButton />
        <figure>
          <Image
            src={`${env.TMDB_IMAGES_URL}${mediaToRender.imageURL}`}
            alt={mediaToRender.title}
            width={320}
            height={500}
          />
        </figure>
      </div>
      <h1>{mediaToRender?.title}</h1>
      {/* <Image
        src={`${env.TMDB_IMAGES_URL}${cast[0]?.image}`}
        alt={cast[0]?.name}
        width={300}
        height={300}
      /> */}
    </section>
  )
}