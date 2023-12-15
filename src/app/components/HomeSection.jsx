'use client'

export default function HomeSection() {
  const lists = [
    'Now Playing Movies',
    'Popular Movies',
    'Top Rated Movies',
    'Upcoming Movies',
    // 'Airing Today TV Series',
    // 'On The Air TV Series',
    // 'Popular TV Series',
    // 'Top Rated TV Series'
  ]
  
  return (
    <>
      {lists.map((item, index) => (
        <div key={index}>
          <h2>{item}</h2>
        </div>
      ))}
    </>
  )
}