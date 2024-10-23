import React from 'react'
import { PortfolioType } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { alltags } from '../data/getAllTags'
import { alltools } from '../data/getAllTools'
import { AllTags } from './AllTags'
import { AllTools } from './AllTools'

type PortfolioGalleryProps = {
  portfolio: PortfolioType[];
  filter: string;
}

const PortfolioGallery = ( props:PortfolioGalleryProps ) : React.ReactNode  => {

  return (
    <section id="portfolio-gallery" className='w-full max-w-screen-2xl flex flex-col gap-4 md:gap-6'>
      {/* render filters */}
      <div className='w-full flex justify-center items-center px-6 md:px-12'>
        <AllTags tags={alltags} filter={props.filter}></AllTags>
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
      <div className='w-full flex justify-center items-center px-6 md:px-12'>
        <AllTools tools={alltools} filter={props.filter}></AllTools>
      </div>
    </section>
  )
}

export default PortfolioGallery