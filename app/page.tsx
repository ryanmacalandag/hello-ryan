import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PortfolioGallery from "./components/PortfolioGallery";
import { portfolio } from "./data/portfolio";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default async function Page() {
  return (
    <>
      <Hero></Hero>
      <PortfolioGallery portfolio={portfolio} filter="all"></PortfolioGallery>
      <Footer></Footer>
    </>
  );
}
