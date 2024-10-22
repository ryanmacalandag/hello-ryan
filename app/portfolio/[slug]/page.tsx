import React from 'react'
import { portfolio } from '@/app/data/portfolio';
import Image from 'next/image';
import BackButton from '@/app/components/BackButton';
// import Link from 'next/link';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return portfolio.map((item) => ({
    slug: item.slug,
  }))
}

export default async function Page( { params }: { params: {slug:string} } ) {

  const { slug } = await params;
  const project = await portfolio.find((item) => item.slug == slug); 

  return (
    <div className='relative w-full h-full min-h-dvh flex flex-col justify-center items-center gap-4 px-4 md:px-16 py-16 md:py-16'>
      {project && <BackButton />}
      <div className='group w-full flex flex-col'>
        {project ? <></> : 'Image not found.'}
        <div className='w-full max-w-screen-lg mx-auto flex gap-4 justify-between items-center mb-4 text-xs font-semibold font-sans uppercase'>
          <div className='w-full flex flex-col md:flex-row md:justify-between'>
            <h1 className='font-extrabold'>{project?.title}</h1>
          </div>
          <div className='flex items-center gap-3'>
            <a href={project?.link} className={ (project?.link ? 'flex' : 'hidden') +  ' text-2xs font-sans font-bold uppercase tracking-wider rounded-full text-nowrap bg-neutral-700 hover:bg-neutral-900 text-white px-2 py-1 transition duration-300'} target="_blank">Open link</a>
          </div>
        </div>
        <Image
          src={project?.url ?? '/portfolio/not-found.png'}
          alt={project?.title ?? 'not found'}
          width={1280}
          height={800}
          className={'w-full max-w-screen-lg mx-auto h-fit object-cover bg-slate-300 shadow-xl ' + (project ? 'hello' : 'hidden')}
        />
      </div>
    </div>
  )
}