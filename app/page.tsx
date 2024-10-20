import Link from "next/link";
import { portfolio } from "./data/portfolio";
import Image from "next/image";
import Footer from "./components/Footer";

export default async function Page() {

  return (
    <section id="hero-01" className="w-full max-w-screen-xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20">
      
      <div className="flex flex-col gap-4 amd:gap-12 text-left md:text-center px-6 md:px-24 xl:px-32 pt-16 md:pt-24 lg:pt-32">
        <h1 className="w-full text-base md:text-xl font-sans font-bold text-orange-700 uppercase tracking-widest">Hello, I&apos;m Ryan Macalandag.</h1> 
        <p className="text-xl lg:text-2xl text-balance tracking-tight leading-normal italic">I have over 20 years experience in producing quality work for a wide mix of teams and organisations requiring creative thinking, innovative solutions, and strategic execution.</p>

        <div className="w-full flex flex-col md:flex-row justify-center mt-4 md:mt-8 mb-8 gap-4">
          <a href="" className="bg-transparent hover:bg-orange-800 border-2 border-orange-800/70 font-sans font-bold tracking-0wider text-xs text-orange-800 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Curriculum Vitae</a>
          <a href="https://www.youtube.com/@ryanmacalandag5279" className="bg-transparent hover:bg-orange-800 border-2 border-orange-800/70 font-sans font-bold tracking-0wider text-xs text-orange-800 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Video Production</a>
          <a href="https://drive.google.com/file/d/1Nl2g4c7eY2uSImQrvbHTFPfH5m8ddBue/view?usp=sharing" className="bg-transparent hover:bg-orange-800 border-2 border-orange-800/70 font-sans font-bold tracking-0wider text-xs text-orange-800 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Photography</a>
          <a href="https://drive.google.com/file/d/1xBWdDAM8HX6vAL8bdHMWGZ02V_D9GBuY/view?usp=sharing" className="bg-transparent hover:bg-orange-800 border-2 border-orange-800/70 font-sans font-bold tracking-0wider text-xs text-orange-800 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Graphic Design</a>
        </div>

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
