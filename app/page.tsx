import { portfolio } from "./data/portfolio";
import Footer from "./components/Footer";
import PortfolioGallery from "./components/PortfolioGallery";
import Hero from "./components/Hero";

export default async function Page() {

  return (
    <>
      <Hero></Hero>
      <PortfolioGallery portfolio={portfolio} filter='all' ></PortfolioGallery>
      <Footer></Footer>
    </>
  );
}
