import Link from "next/link";
import { portfolio } from "./data/portfolio";
import Image from "next/image";
import Footer from "./components/Footer";

export default async function Home() {

  return (
    <section id="hero-01" className="w-full max-w-screen-xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20 px-6 md:px-16 py-24">
      
      <div className="flex flex-col gap-6 amd:gap-12 text-left md:text-center px-0 md:px-24 xl:px-32">
        <h1 className="w-full text-xl font-sans font-bold uppercase tracking-widest">Ryan Macalandag</h1> 
        <p className="text-2xl lg:text-3xl text-balance text-orange-700 tracking-tight leading-normal italic">I have over 20 years experience in producing quality work for a wide mix of teams and organisations requiring creative thinking, innovative solutions, and strategic execution.</p>
      </div>

      <div className="w-full max-w-screen-xl h-fit columns-2 md:columns-3xs lg:columns-3xs gap-3 md:gap-6">

        {
          portfolio.map((item,key) => {
            return (
              <Link
                key={key}
                href={'/portfolio/' + item.slug}
              >
                <Image
                  src={item.url}
                  alt='gallery item'
                  width={320}
                  height={320}
                  className='w-full h-fit rounded-xl aspect-portrait md:aspect-video object-cover mb-3 md:mb-6 shadow-xl bg-black scale-100 hover:scale-105 saturate-75 hover:saturate-100 transition duration-300'
                />
              </Link>
            )
          })
        }

      </div>

      <Footer></Footer>
    
    </section>
  );
}
