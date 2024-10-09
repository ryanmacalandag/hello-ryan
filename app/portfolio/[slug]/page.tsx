import React from 'react'
import { portfolio } from '@/app/data/portfolio';
import Image from 'next/image';
import BackButton from '@/app/components/BackButton';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return portfolio.map((item) => ({
    slug: item.slug,
  }))
}

export default function Projects( { params }: { params: {slug:string} } ) {

  const { slug } = params;
  const getProject = portfolio.find((item) => item.slug == slug);

  return (
    <div className='w-full max-w-screen-xl h-full flex flex-col justify-center items-center gap-4 px-4 md:px-16 py-8 md:py-18'>
      <BackButton />
      <div className='group w-full'>
        <Image
          src={getProject?.url ?? '/portfolio/yac.png'}
          alt='gallery item'
          width={1200}
          height={1200}
          className='w-full h-full min-h-fit bg-slate-300 shadow-xl'
        />
      </div>
    </div>
  )
}