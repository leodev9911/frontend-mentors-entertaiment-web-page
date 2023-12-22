import Image from 'next/image'
import { dataMap } from '../../lib/data'

export default function HomeSection() {
  const { 
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies
  } = dataMap()

  const IMAGES_URL = 'https://image.tmdb.org/t/p/w500'

  const lists = [
    {
      title: 'Now Playing Movies',
      listToRender: nowPlayingMovies
    },
    {
      title: 'Popular Movies',
      listToRender: popularMovies
    },
    {
      title: 'Top Rated Movies',
      listToRender: topRatedMovies
    },
    {
      title: 'Upcoming Movies',
      listToRender: upcomingMovies
    },
  ]

  // 'Airing Today TV Series',
  // 'On The Air TV Series',
  // 'Popular TV Series',
  // 'Top Rated TV Series'
  
  return (
    <>
      {lists.map((list, index) => (
        <div key={index}>
          <h2 className='text-[32px] text-white mb-6'>{list.title}</h2>
          <div className='flex gap-8 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-pageRed w-full'>
            {list.listToRender.map(movie => (
              <div 
                key={movie.id}
                className='w-full relative' 
              >
                <div className='w-60 lg:w-[470px] h-40 lg:h-[250px] rounded-[10px] opacity-40 cursor-pointer'>
                  <Image 
                    src={`${IMAGES_URL}${movie.imagePath}`} 
                    alt='Movie poster'
                    width={440}
                    height={230} 
                    className='w-60 lg:w-[440px] h-36 lg:h-[230px] rounded-[10px] object-cover'
                  />
                </div>
                <div className='absolute z-10 top-20 lg:top-[150px] left-[18px] cursor-pointer'>
                  <div className='flex items-center gap-2 text-white'>
                    <p>{movie.yearOfRealease.match(/^.{4}/)}</p>
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
                  <h2 className='text-2xl truncate w-48 lg:w-96'>{movie.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}