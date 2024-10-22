import React from 'react'
import { portfolio } from '@/app/data/portfolio';
import BackButton from '@/app/components/BackButton';
import { ProjectDetails } from '@/app/components/ProjectDetails';

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
    <div className='relative w-full h-full flex flex-col justify-center items-center gap-4 px-4 md:px-16 py-8 md:py-12'>
      {project && <BackButton />}
      <ProjectDetails project={project!}></ProjectDetails>
    </div>
  )
}