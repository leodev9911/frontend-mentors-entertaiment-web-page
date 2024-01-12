import Link from "next/link"

export default function MovieDetails({
  genres,
  params
}) {
  return (
    <div className="flex flex-col items-center pb-5 lg:items-start">
      <h2 className="text-white text-xl font-bold pb-5">Genre</h2>
      <div className="flex gap-4">
        {genres.map(genre => {
          return <Link 
            href={`/${params.id[0] === 'movie' ? 'movies' : 'tv'}/${genre.name}`} 
            key={genre.id} 
            className="p-3 bg-pageDarkBlue rounded-lg text-white hover:opacity-60 duration-300"
          >
            {genre.name}
          </Link>
        })}
      </div>
    </div>
  )
}