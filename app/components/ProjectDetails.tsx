import React from 'react'
import { PortfolioType } from '../data/portfolio'
import Image from 'next/image'
import { ProjectTags } from './ProjectTags';
import { ProjectLinkButton } from './ProjectLinkButton';

type ProjectDetailsPropsType = {
  project: PortfolioType;
} 

export const ProjectDetails = ( {project}:ProjectDetailsPropsType ):React.ReactNode => {
  return (
    <div className='group w-full flex flex-col'>
      {project ? <></> : 'Image not found.'}
      <div className='w-full max-w-screen-lg mx-auto flex flex-col md:flex-row gap-2 justify-between items-center text-xs font-semibold font-sans uppercase pb-8 md:pb-4'>
        <div className='w-full flex flex-col md:flex-row gap-3 md:gap-5 justify-start items-start md:items-center'>
          <h1 className='w-full text-base md:text-lg text-center md:text-left capitalize font-semibold text-balance leading-tight tracking-tight'>{project?.title}</h1>
        </div>
        <div className='w-full flex justify-center md:justify-end items-center gap-3'>
          <ProjectTags tags={project.tags}></ProjectTags>
          <ProjectLinkButton link={project.url}></ProjectLinkButton>
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
  )
}
