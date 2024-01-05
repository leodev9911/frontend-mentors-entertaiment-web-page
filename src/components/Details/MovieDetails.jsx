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
  params
}) {
  console.log(params)
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{tagline}</p>
      </div>
      <div>
        <div>
          <p>Length</p>
          <p>{duration}</p>
        </div>
        <div>
          <p>Language</p>
          <p>{language}</p>
        </div>
        <div>
          <p>Release year</p>
          <p>{yearOfRelease}</p>
        </div>
        {params?.id[0] === 'tv' && <div>
          <p>Last Air Date</p>
          <p>{lastAirDate}</p>
        </div>}
        <div>
          <p>Status</p>
          <p>{status}</p>
        </div>
        {params?.id[0] === 'tv' && <div>
          <p>Episodes</p>
          <p>{episodes}</p>
        </div>}
        {params?.id[0] === 'tv' && <div>
          <p>Seasons</p>
          <p>{seasons}</p>
        </div>}
      </div>
      <div>
        <h2>Synopsis</h2>
        <p>{synopsis}</p>
      </div>
    </div>
  )
}