import React from 'react'
import { PortfolioType } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { alltags } from '../data/getAllTags'
import { Tags } from './Tags'

type PortfolioGalleryProps = {
  portfolio: PortfolioType[];
  filter: string;
}

const PortfolioGallery = ( props:PortfolioGalleryProps ) : React.ReactNode  => {

  return (
    <section id="portfolio-gallery" className='w-full flex flex-col gap-4 md:gap-6'>
      {/* render filters */}
      <div className='w-full flex justify-center items-center px-6 md:px-12'>
        <Tags tags={alltags} filter={props.filter}></Tags>
      </div>
      {/* render gallery */}
      <div className='w-full grid grid-cols-12 gap-6 md:gap-6 px-6 md:px-12'>
        {
            props.portfolio.map((project,key) => {

              return (
                <ProjectCard key={key} project={project}></ProjectCard>
              )
            })
          }
      </div>
    </section>
  )
}

export default PortfolioGallery