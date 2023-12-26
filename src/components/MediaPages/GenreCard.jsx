import Link from 'next/link'

export default function GenreCard({
  name
}) {
  return (
    <Link
      href={`/movies/${name}`}
      className='flex items-center justify-center text-white w-auto px-3 h-8 bg-pageGenres hover:bg-pageRed rounded-lg cursor-pointer duration-300'
    >
      {name}
    </Link>
  )
}