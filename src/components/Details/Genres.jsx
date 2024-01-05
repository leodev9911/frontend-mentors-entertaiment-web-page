export default function MovieDetails({
  genres
}) {
  console.log(genres)
  return (
    <div>
      <h2>Genre</h2>
      {genres.map(genre => {
        return <p key={genre.id}>{genre.name}</p>
      })}
    </div>
  )
}