import { portfolio } from "./data/portfolio";
import Footer from "./components/Footer";
import PortfolioGallery from "./components/PortfolioGallery";
import Header from "./components/Header";

export default async function Page() {

  return (
    <>
      <Header></Header>
      <PortfolioGallery portfolio={portfolio} filter='all' ></PortfolioGallery>
      <Footer></Footer>
    </>
  );
}
