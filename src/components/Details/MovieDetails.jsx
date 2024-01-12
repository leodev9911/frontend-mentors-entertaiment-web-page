import './MovieDetails.css'

export default function MovieDetails({
  title,
  tagline,
  duration,
  language,
  status,
  episodes,
  seasons,
  yearOfRelease,
  lastAirDate,
  synopsis,
  params,
  rating
}) {
  return (
    <div>
      <div className="movie-details-containers pb-5 text-center lg:text-start">
        <h1 className='text-3xl text-white font-bold lg:text-5xl'>{title}</h1>
        <p className='lg:text-lg'>{tagline}</p>
      </div>
      <div className='flex flex-wrap gap-5 pb-5 my-0 justify-start sm:justify-center lg:justify-start'>
        {params?.id[0] === 'movies' && <div className="movie-details-containers">
          <p>Length</p>
          <p>{duration}</p>
        </div>}
        <div className="movie-details-containers">
          <p>Language</p>
          <p>{language}</p>
        </div>
        <div className="movie-details-containers">
          <p>Release year</p>
          <p>{yearOfRelease}</p>
        </div>
        {params?.id[0] === 'tv' && <div className="movie-details-containers">
          <p>Last Air Date</p>
          <p>{lastAirDate}</p>
        </div>}
        <div className="movie-details-containers">
          <p>Status</p>
          <p>{status}</p>
        </div>
        {params?.id[0] === 'tv' && <div className="movie-details-containers">
          <p>Episodes</p>
          <p>{episodes}</p>
        </div>}
        {params?.id[0] === 'tv' && <div className="movie-details-containers">
          <p>Seasons</p>
          <p>{seasons}</p>
        </div>}
        <div className="movie-details-containers">
          <p>Rating</p>
          <p>{rating}</p>
        </div>
      </div>
      <div className='movie-details-containers pb-5 max-w-[680px] lg:max-w-none mx-auto my-0'>
        <h2 className='text-white text-xl font-bold text-center lg:text-start'>Synopsis</h2>
        <p>{synopsis}</p>
      </div>
    </div>
  )
}