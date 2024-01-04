'use client'

import Image from "next/image"
import { useRouter, useSelectedLayoutSegment } from "next/navigation"

export default function GoBackButton() {
  const route = useRouter();
  const try1 = useSelectedLayoutSegment();
  console.log(try1);

  return (
    <div>
      <button onClick={route.back}>
        <Image 
          src="/back-arrow.svg"
          alt="Back arrow icon"
          width={20}
          height={20}
        />
        Go Back
      </button>
    </div>
  )
}