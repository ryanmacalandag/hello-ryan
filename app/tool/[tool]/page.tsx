import React from 'react'
import { portfolio } from '@/app/data/portfolio'
import PortfolioGallery from '@/app/components/PortfolioGallery';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';
import { alltools } from '@/app/data/getAllTools';

// Return a list of `params` to populate the [tool] dynamic segment
export async function generateStaticParams() {
  const tools = await alltools;
  return tools.map((t) => ({
    tool: t
  }))
}

export default async function Page( { params }: { params: {tool:string} } ) {
  const filteredProjects = await portfolio.filter( (project) => project.tools!.includes(params.tool))
  return (
    <>
      <Hero></Hero>
      <PortfolioGallery portfolio={filteredProjects} filter={params.tool} ></PortfolioGallery>
      <Footer></Footer>
    </>
  )

}
