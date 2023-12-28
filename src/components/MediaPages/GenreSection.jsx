'use client'

import { useParams } from 'next/navigation'
import GenreCard from './GenreCard'
import Link from 'next/link'

export default function GenreSection({ genres }) {
  const params = useParams()
  const cleanedGenre = params.categories.replace(/%20/g, ' ');

  return (
    <section
      className='flex gap-3 mt-9 w-full h-8 overflow-x-auto scrollbar-none'
    >
      <Link
        href={`/${params.media}/all`}
        className={`inline-flex items-center justify-center px-3 h-8 text-white bg-pageGenres hover:bg-pageRed rounded-lg cursor-pointer duration-300 ${cleanedGenre === 'all' ? 'bg-pageRed' : ''}`}
      >
        All
      </Link>
      {genres?.map(genre => {
        return (
          <GenreCard
            key={genre.id}
            name={genre.name}
            media={params.media}
            genre={cleanedGenre}
          />
        )
      })}
    </section>
  )
}