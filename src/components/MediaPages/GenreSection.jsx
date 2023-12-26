import GenreCard from './GenreCard'
import Link from 'next/link'

export default function GenreSection({ genres }) {
  return (
    <section
      className='flex items-center gap-3 mb-6 w-full overflow-x-auto scrollbar-none'
    >
      <Link
        href='/movies/all'
        className='flex items-center justify-center w-auto px-3 h-8 text-white bg-pageGenres hover:bg-pageRed rounded-lg cursor-pointer duration-300'
      >
        All
      </Link>
      {genres.map(genre => {
        return (
          <GenreCard
            key={genre.id}
            name={genre.name}
          />
        )
      })}
    </section>
  )
}