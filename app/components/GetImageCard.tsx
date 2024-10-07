import Image from 'next/image'
import React from 'react'

export default function GetImageCard() {
  const randomSeed = Math.floor(Math.random() * 1000);
  const randomUrl = 'https://picsum.photos/seed/' + randomSeed + '/800/800';

  return (
    <>
      <Image
        src={randomUrl}
        alt='gallery item'
        width={320}
        height={320}
        className='w-full h-fit rounded-xl aspect-portrait md:aspect-video object-cover mb-3 md:mb-6 shadow-xl bg-black scale-100 hover:scale-105 saturate-50 hover:saturate-100 transition duration-300'
      />
    </>
  )
}
