import React from 'react'
import { portfolio } from '@/app/data/portfolio';
import Image from 'next/image';
import BackButton from '@/app/components/BackButton';
// import { BiLeftArrowCircle } from 'react-icons/bi';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return portfolio.map((item) => ({
    slug: item.slug,
  }))
}

export default function Page( { params }: { params: {slug:string} } ) {

  const { slug } = params;
  const project = portfolio.find((item) => item.slug == slug); 

  return (
    <div className='w-full max-w-screen-xl h-full flex flex-col justify-center items-center gap-4 px-4 md:px-16 py-8 md:py-18'>
      {project && <BackButton />}
      <div className='group w-full text-center'>
        {project ? <></> : 'Image not found.'}
        <Image
          src={project?.url ?? '/portfolio/not-found.png'}
          alt={project?.title ?? 'not found'}
          width={1280}
          height={800}
          className={'w-full h-fit object-cover bg-slate-300 shadow-xl ' + (project ? 'hello' : 'hidden')}
        />
      </div>
    </div>
  )
}