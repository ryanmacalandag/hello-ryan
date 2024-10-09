import Link from "next/link";
import { portfolio } from "./data/portfolio";
import Image from "next/image";
import Footer from "./components/Footer";

export default async function Home() {

  return (
    <section id="hero-01" className="w-full max-w-screen-xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20 px-6 md:px-16 py-24">
      
      <div className="flex flex-col gap-6 amd:gap-12 text-left md:text-center px-0 md:px-24 xl:px-32">
        <h1 className="w-full text-base md:text-xl font-sans font-bold text-orange-700 uppercase tracking-widest">Hello, I&apos;m Ryan Macalandag.</h1> 
        <p className="text-xl lg:text-2xl text-balance tracking-tight leading-normal italic">I have over 20 years experience in producing quality work for a wide mix of teams and organisations requiring creative thinking, innovative solutions, and strategic execution.</p>
      </div>

      <div className="w-full max-w-screen-xl h-fit columns-1 md:columns-3xs lg:columns-xs gap-0 md:gap-6">

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
                  className='w-full h-fit rounded-none md:rounded object-cover mb-0 md:mb-6 shadow-xl bg-black hover:translate-x-1 scale-100 md:hover:scale-105 saturate-[.85] hover:saturate-100 transition duration-300'
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
