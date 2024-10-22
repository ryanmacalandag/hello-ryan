import React from 'react'
import { PortfolioType } from '../data/portfolio'
import Link from 'next/link'
import Image from 'next/image'
import { ProjectLinkButton } from './ProjectLinkButton'

type ProjectCardProps = {
  project: PortfolioType;
}

export const ProjectCard = ( {project}:ProjectCardProps ) : React.ReactNode => {
  return (
    <div
      className="col-span-12 sm:col-span-6 lg:col-span-4 mb-2 lg:mb-6 flex flex-col gap-4"
    >
      <Link
        href={'/portfolio/' + project.slug}
        className="w-full group aspect-video md:aspect-video overflow-hidden shadow-xl bg-stone-600/60"
      >
        <Image
          src={project.url}
          alt='gallery project'
          width={320}
          height={320}
          className='w-full h-full object-cover group-hover:scale-105 scale-100 md:group-hover:scale-105 saturate-100 group-hover:saturate-150 transition duration-300'
        />
      </Link>

      <div className="flex flex-row justify-between projects-center">
        <p className="text-sm font-sans leading-tight text-balance">{project.title}</p>
        <ProjectLinkButton link={project.url}></ProjectLinkButton>
      </div>

    </div>
  )
}
