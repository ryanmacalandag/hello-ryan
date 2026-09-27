import React from 'react'
import { portfolio } from '@/app/data/portfolio';
import BackButton from '@/app/components/BackButton';
import { ProjectDetails } from '@/app/components/ProjectDetails';

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return portfolio.map((item) => ({
    slug: item.slug,
  }))
}

export default async function Page( { params }: { params: {slug:string}} ) {
  const { slug } = await params;
  const project = await portfolio.find((item) => item.slug == slug); 

  return (
    <div className='relative w-full h-fit flex flex-col justify-center items-center gap-4 px-4 md:px-16 pt-8 md:pt-12 pb-20 lg:pb-24'>
      {project && <BackButton />}
      <ProjectDetails project={project!}></ProjectDetails>
    </div>
  )
}