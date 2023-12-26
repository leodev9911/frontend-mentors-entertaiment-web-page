export function MediaCardSkeleton() {
  return (
    <article 
      className='flex flex-col gap-2 cursor-pointer' 
    >
      <div className='relative w-full h-48 rounded-[10px] overflow-hidden bg-gray-500'>
        <div 
          className='rounded-[10px] object-cover bg-gray-500'
        />
      </div>
      <div>
        <div className='flex items-center gap-2 text-white bg-gray-500' />
        <div className='text-lg truncate w-full bg-gray-500'/>
      </div>
    </article>
  )
}

export function MediaCardsSkeletons() {
  return (
    <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7">
      <MediaCardSkeleton />
      <MediaCardSkeleton />
      <MediaCardSkeleton />
      <MediaCardSkeleton />
      <MediaCardSkeleton />
      <MediaCardSkeleton />
      <MediaCardSkeleton />
    </section>
  )
}