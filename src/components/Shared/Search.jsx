"use client"

import Image from "next/image"
import { usePathname, useSearchParams,useRouter } from "next/navigation"

export default function Search({ placeholder }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams)
    term ? params.set('query', term) : params.delete('query')
    
    replace(`${pathname}?${params.toString()}`)
  }

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
        placeholder={placeholder} 
        className='bg-transparent w-full text-white placeholder:text-lg caret-pageRed focus:border-b focus:border-pageBlueGray focus:outline-none'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </label>
  )
}