import Link from 'next/link'

export default function GenreCard({
  name,
  media,
  genre
}) {
  return (
    <Link
      href={`/${media}/${name}`}
      className={`inline-flex items-center text-white px-3 h-8 bg-pageGenres hover:bg-pageRed rounded-lg whitespace-nowrap cursor-pointer duration-300 ${genre === name ? 'bg-pageRed' : ''}`}
    >
      {name}
    </Link>
  )
}