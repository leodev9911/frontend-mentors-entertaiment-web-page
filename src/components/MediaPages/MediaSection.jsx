import MediaCards from './MediaCard'

export default function MediaSection({ media }) {  
  return (
    <>
      {media?.map(media => {
        return <MediaCards 
          key={media.id}
          id={media.id} 
          title={media.title}
          imagePath={media.imagePath}
          yearOfRealease={media.yearOfRealease}
          mediaType={media.mediaType}
        />
      })}
    </>
  )
}