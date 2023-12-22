import Image from 'next/image'

export default function MediaCards({ imagePath, title, yearOfRealease }) {
  const IMAGES_URL = 'https://image.tmdb.org/t/p/w500'

  return (
    <article 
      className='flex flex-col gap-2 cursor-pointer' 
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
          <p>{yearOfRealease.match(/^.{4}/)}</p>
          <span>•</span>
          <div className='flex items-center gap-2'>
            <Image 
              src='/movies.svg'
              alt='Movie icon'
              width={12}
              height={12}
            />
            <p>Movies</p>
          </div>
        </div>
        <h2 className='text-lg truncate w-full'>{title}</h2>
      </div>
    </article>
  )
}