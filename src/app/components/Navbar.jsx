'use client'

import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

export default function NavBar() {
  const pathname = usePathname()
  
  return (
    <nav className='bg-pageDarkBlue w-full h-[72px] p-6 rounded-xl flex items-center justify-between lg:p-8 lg:h-full lg:flex-col lg:w-24 lg:justify-start'>
      <Image 
        src='/path.svg'
        width={32}
        height={26} 
        alt='A movie icon'
        className='lg:mb-20'
      />
      <div className='lg:mx-0 lg:mb-auto'>
        <ul className='flex items-center gap-6 lg:flex-col'>
          <li>
            <Link
              href='/'
            >
              <Image 
                src='/shape.svg'
                width={20}
                height={20}
                alt='A movie icon'
                className={`nav-svg ${pathname === '/' && 'active'}`}
              />
            </Link>
          </li>
          <li>
            <Link
              href='/movies'
            >
              <Image 
                src='/movies.svg'
                width={20}
                height={20}
                alt='A movie icon'
                className={`nav-svg ${pathname === '/movies' && 'active'}`}
              />
            </Link>
          </li>
          <li>
            <Link
              href='/tv'
            >
              <Image 
                src='/tv.svg'
                width={20}
                height={20}
                alt='A movie icon'
                className={`nav-svg ${pathname === '/tv' && 'active'}`}
              />
            </Link>
          </li>
        </ul>
      </div>
      <Image 
        src='/oval.png'
        alt='Hero image'
        width={32}
        height={32}
      />
    </nav>
  )
}