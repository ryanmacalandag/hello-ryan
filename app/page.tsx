import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PortfolioGallery from "./components/PortfolioGallery";
import { portfolio } from "./data/portfolio";

export default async function Page() {
  return (
    <>
      <Hero></Hero>
      <PortfolioGallery portfolio={portfolio} filter="all"></PortfolioGallery>
      <Footer></Footer>
    </>
  );
}
