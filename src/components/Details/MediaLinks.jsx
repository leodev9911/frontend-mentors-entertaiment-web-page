export default function MediaLinks({ imdb, website }) {
  console.log(website)
  return (
    <div>
      <div>{website}</div>
      <div>{imdb}</div>
    </div>
  )
}