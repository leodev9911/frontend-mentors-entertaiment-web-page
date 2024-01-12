import './MediaLinks.css'

export default function MediaLinks({ imdb, website }) {
  return (
    <div className="flex justify-center gap-4 lg:justify-start">
      <a 
        href={website} 
        className="media-link-constainer"
        target='_blank'
      >
        <img 
          src="/link.svg" 
          alt="Link icon"
          className="link-icon"
          aria-label={`Link to homepage`} 
        />
        Homepage
      </a>
      <a 
        href={`https://www.imdb.com/title/${imdb}`}
        className="media-link-constainer"
        target='_blank'
      >
        <img 
          src="/link.svg" 
          alt="Link icon"
          className="link-icon"
          aria-label={`Link to IMDB section`} 
        />
        IMDB
      </a>
    </div>
  )
}