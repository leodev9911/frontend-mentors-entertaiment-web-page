import Image from 'next/image'
import Link from 'next/link'

export default function MediaCards({
  id, 
  imagePath, 
  title, 
  yearOfRealease,
  mediaType 
}) {
  const IMAGES_URL = 'https://image.tmdb.org/t/p/w500'

  return (
    <Link
      href={`/details/${mediaType === 'movie' ? 'movie' : 'tv'}/${id}`} 
      className='flex flex-col gap-2 cursor-pointer rounded-lg p-2 hover:bg-pageDarkBlue duration-300' 
    >
      <div className='relative w-full h-48 rounded-[10px] overflow-hidden'>
        <Image 
          src={`${IMAGES_URL}${imagePath}`} 
          alt='Movie poster'
          fill
          className='rounded-[10px] object-cover'
        />
      </div>
      <div>
        <div className='flex items-center gap-2 text-white'>
          <p>{yearOfRealease?.match(/^.{4}/)}</p>
          <span>•</span>
          <figure className='flex items-center gap-2'>
            <Image 
              src={mediaType === 'movie' ? '/movies.svg' : '/tv.svg'}
              alt='Movie icon'
              width={12}
              height={12}
            />
            <p>{mediaType === 'movie' ? 'Movie' : 'TV Show'}</p>
          </figure>
        </div>
        <h2 className='text-lg text-white truncate w-full'>{title}</h2>
      </div>
    </Link>
  )
}