import Image from "next/image"
import { env } from "../../config/env"

export default function Cast({ cast }) {
  return (
    <div className="pb-5">
      <h2 className="text-white text-xl font-bold text-center lg:text-start pb-5">Cast</h2>
      <div className="flex gap-4 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-pageRed w-full h-[230px]">
        {cast.map(actor => {
          return <div key={actor.id} className="relative cursor-pointer">
            <figure className="h-[200px] w-[160px] rounded-lg overflow-hidden">
              <Image
                src={actor.image === null ? '/user-placeholder.jpg' : `${env.TMDB_IMAGES_URL}${actor.image}`}
                alt={actor.name}
                width={200}
                height={200}
                className="h-[200px] w-[160px] rounded-lg opacity-50 hover:scale-125 duration-300"
              />
            </figure>
            <p className="absolute text-white font-bold left-3 truncate top-[116px] max-w-[120px]">{actor.name}</p>
            <p className="absolute text-white font-bold left-3 top-36 max-w-[160px]">As: {actor.character}</p>
          </div>
        })}
      </div>
    </div>
  )
}