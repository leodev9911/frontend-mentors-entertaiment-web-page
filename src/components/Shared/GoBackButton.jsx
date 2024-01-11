'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import './GoBackButton.css'

export default function GoBackButton() {
  const route = useRouter();

  return (
    <div>
      <button onClick={route.back} className="flex items-center justify-center gap-2 p-2 rounded-lg bg-pageDarkBlue text-pageBlueGray hover:opacity-60 duration-300">
        <Image
          className="details-image" 
          src="/back-arrow.svg"
          alt="Back arrow icon"
          width={20}
          height={20}
        />
        <p className="hidden lg:block">Go Back</p>
      </button>
    </div>
  )
}