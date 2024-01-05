import Image from "next/image"
import { env } from "../../config/env"

export default function Cast({ cast }) {
  console.log(cast)
  return (
    <div>
      <h2>Cast</h2>
      {cast.slice(0, 12).map(actor => {
        return <div key={actor.id}>
          <Image
            src={`${env.TMDB_IMAGES_URL}${actor.image}`}
            alt={actor.name}
            width={200}
            height={200}
          />
          <p>{actor.name}</p>
        </div>
      })}
    </div>
  )
}