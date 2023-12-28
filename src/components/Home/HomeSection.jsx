import Image from 'next/image'
import { dataMap } from '../../lib/data'
import {
  fetchUpcomingMovies,
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchNowPlayingMovies
} from '../../services/TMDB/movies'
import {
  fetchTVAiringToday,
  fetchTVOnTheAir,
  fetchTVPopular,
  fetchTVTopRated
} from '../../services/TMDB/tv'
import { env } from '../../config/env'

export default async function HomeSection() {
  const IMAGES_URL = env.TMDB_IMAGES_URL

  const lists = [
    {
      title: 'Now Playing Movies',
      listToRender: await fetchNowPlayingMovies()
    },
    {
      title: 'Popular Movies',
      listToRender: await fetchPopularMovies()
    },
    {
      title: 'Top Rated Movies',
      listToRender: await fetchTopRatedMovies()
    },
    {
      title: 'Upcoming Movies',
      listToRender: await fetchUpcomingMovies()
    },
    {
      title: 'TV Airing Today',
      listToRender: await fetchTVAiringToday()
    },
    {
      title: 'TV On The Air',
      listToRender: await fetchTVOnTheAir()
    },
    {
      title: 'TV Popular',
      listToRender: await fetchTVPopular()
    },
    {
      title: 'TV Top Rated',
      listToRender: await fetchTVTopRated()
    },
  ]

  return (
    <>
      {lists.map((list, index) => (
        <div key={index}>
          <h2 className='text-[32px] text-white mb-6'>{list.title}</h2>
          <div className='flex gap-8 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-pageRed w-full'>
            {list.listToRender?.map(media => (
              <div 
                key={media.id}
                className='w-full relative' 
              >
                <div className='w-60 lg:w-[470px] h-40 lg:h-[250px] rounded-[10px] opacity-40 cursor-pointer'>
                  <Image 
                    src={`${IMAGES_URL}${media.imagePath}`} 
                    alt='media poster'
                    width={440}
                    height={230} 
                    className='w-60 lg:w-[440px] h-36 lg:h-[230px] rounded-[10px] object-cover'
                  />
                </div>
                <div className='absolute z-10 top-20 lg:top-[150px] left-[18px] cursor-pointer'>
                  <div className='flex items-center gap-2 text-white'>
                    <p>{media.yearOfRealease.match(/^.{4}/)}</p>
                    <span>•</span>
                    <div className='flex items-center gap-2'>
                      <Image 
                        src={media.mediaType === 'movie' ? '/movies.svg' : '/tv.svg'}
                        alt='Media icon'
                        width={12}
                        height={12}
                      />
                      <p>{media.mediaType === 'movie' ? 'Movie' : 'TV'}</p>
                    </div>
                  </div>
                  <h2 className='text-2xl text-white truncate w-48 lg:w-96'>{media.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}