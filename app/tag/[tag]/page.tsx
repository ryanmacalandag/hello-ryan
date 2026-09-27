import React from 'react'
import { portfolio } from '@/app/data/portfolio'
import PortfolioGallery from '@/app/components/PortfolioGallery';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';
import { alltags } from '@/app/data/getAllTags';

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const tags = await alltags;
  return tags.map((t) => ({
    tag: t,
  }))
}

export default async function Page(props: { params: Promise<{tag:string}> }) {
  const params = await props.params;
  const filteredProjects = await portfolio.filter( (project) => project.tags.includes(params.tag))
  return (
    <>
      <Hero></Hero>
      <PortfolioGallery portfolio={filteredProjects} filter={params.tag} ></PortfolioGallery>
      <Footer></Footer>
    </>
  )
}
