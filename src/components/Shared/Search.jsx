import Image from "next/image";

export default function Search() {
  return (
    <label 
      htmlFor='search-input'
      className='flex gap-6 w-full'
    >
      <Image 
        src='/search.svg' 
        alt='Search icon'
        width={32}
        height={32} 
      />
      <input
        id='search-input' 
        type='text' 
        placeholder='Search for movies or TV shows' 
        className='bg-transparent w-full placeholder:text-lg caret-pageRed focus:border-b focus:border-pageBlueGray focus:outline-none'
      />
    </label>
  )
}