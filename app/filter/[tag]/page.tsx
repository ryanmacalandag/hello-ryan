import React from 'react'
import { portfolio } from '@/app/data/portfolio'
import PortfolioGallery from '@/app/components/PortfolioGallery';
import Footer from '@/app/components/Footer';
// import PageHeader from '@/app/components/PageHeader';
import Header from '@/app/components/Header';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return portfolio.map((item) => ({
    item: item.tags,
  }))
}

export default async function Page( { params }: { params: {tag:string} } ) {

  const projects = await portfolio;
  const filteredProjects = await projects.filter( (project) => project.tags.includes(params.tag))
  console.log(params.tag)

  return (
    <>
      {/* <PageHeader></PageHeader> */}
      <Header></Header>
      <PortfolioGallery portfolio={filteredProjects} filter={params.tag} ></PortfolioGallery>
      <Footer></Footer>
    </>
  )

}
