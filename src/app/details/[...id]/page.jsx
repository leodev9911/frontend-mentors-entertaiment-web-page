import GoBackButton from "../../../components/Shared/GoBackButton"
import Rating from "../../../components/Details/Rating"
import MovieDetails from "../../../components/Details/MovieDetails"
import Cast from "../../../components/Details/Cast"
import MediaLinks from "../../../components/Details/MediaLinks"
import Genres from "../../../components/Details/Genres"
import Image from "next/image"
import { fetchMovieCredits, fetchMovieDetails } from "../../../services/TMDB/movies"
import { fetchTVCredits, fetchTvDetails } from "../../../services/TMDB/tv"
import { env } from "../../../config/env"

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
    <section className="flex flex-col gap-8 lg:flex-row w-full">
      <div className="flex gap-5 lg:w-[40%]">
        <GoBackButton />
        <figure className="my-0 mx-auto lg:mx-0 rounded-lg">
          <Image
            src={`${env.TMDB_IMAGES_URL}${mediaToRender.imageURL}`}
            alt={mediaToRender.title}
            width={320}
            height={500}
            className="rounded-lg"
          />
        </figure>
      </div>
      <section className="lg:w-[60%]">
        <MovieDetails 
          title={mediaToRender?.title}
          tagline={mediaToRender?.tagline}
          duration={mediaToRender?.duration}
          language={mediaToRender?.language}
          status={mediaToRender?.status}
          episodes={mediaToRender?.episodes}
          seasons={mediaToRender?.seasons}
          yearOfRelease={mediaToRender?.releaseDate}
          lastAirDate={mediaToRender?.lastAirDate}
          synopsis={mediaToRender?.synopsis}
          params={params}
          rating={mediaToRender.rating}
        />
        <Genres 
          genres={mediaToRender?.genres}
          params={params}
        />
        <Cast 
          cast={cast}
        />
        <MediaLinks 
          imdb={mediaToRender?.imdb_id}
          website={mediaToRender?.homepage}
        />
      </section>
    </section>
  )
}