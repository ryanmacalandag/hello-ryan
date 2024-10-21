import Link from "next/link";
import { portfolio } from "./data/portfolio";
import Image from "next/image";
import Footer from "./components/Footer";
import { BiRightArrowAlt } from "react-icons/bi";

export default async function Page() {

  return (
    <section id="hero-01" className="w-full max-w-screen-2xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20">
      
      <div className="flex flex-col gap-4 amd:gap-12 text-left md:text-center px-6 md:px-24 xl:px-32 pt-16 md:pt-24 lg:pt-32">
        <h1 className="w-full text-base md:text-xl font-sans font-bold text-pink-700 uppercase tracking-widest">Hello, I&apos;m Ryan Macalandag.</h1> 
        <p className="text-xl lg:text-2xl text-balance tracking-tight leading-normal italic">I have over 20 years experience in producing quality work for a wide mix of teams and organisations requiring creative thinking, innovative solutions, and strategic execution.</p>

        <div className="w-full flex flex-col md:flex-row justify-center mt-4 md:mt-8 mb-8 gap-4">
          <a href="https://drive.google.com/file/d/1tkYULJn7vnGtsDzEc8PmvESNaryj_PdD/view?usp=drive_link" className="flex justify-between items-center gap-4 bg-transparent hover:bg-pink-700 border-2 border-pink-700/70 font-sans font-bold tracking-0wider text-xs text-pink-700 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Curriculum Vitae <BiRightArrowAlt></BiRightArrowAlt></a>
          <a href="https://www.youtube.com/@ryanmacalandag5279" className="flex justify-between items-center gap-4 bg-transparent hover:bg-pink-700 border-2 border-pink-700/70 font-sans font-bold tracking-0wider text-xs text-pink-700 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Video Production <BiRightArrowAlt></BiRightArrowAlt></a>
          <a href="https://drive.google.com/file/d/1Nl2g4c7eY2uSImQrvbHTFPfH5m8ddBue/view?usp=sharing" className="flex justify-between items-center gap-4 bg-transparent hover:bg-pink-700 border-2 border-pink-700/70 font-sans font-bold tracking-0wider text-xs text-pink-700 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Photography <BiRightArrowAlt></BiRightArrowAlt></a>
          <a href="https://drive.google.com/file/d/1xBWdDAM8HX6vAL8bdHMWGZ02V_D9GBuY/view?usp=sharing" className="flex justify-between items-center gap-4 bg-transparent hover:bg-pink-700 border-2 border-pink-700/70 font-sans font-bold tracking-0wider text-xs text-pink-700 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Graphic Design <BiRightArrowAlt></BiRightArrowAlt></a>
        </div>

      </div>

      <div className="w-full grid grid-cols-12 gap-6 md:gap-6 px-6 md:px-12">
      {/* <div className="w-full max-w-screen-xl h-fit columns-1 md:columns-3xs lg:columns-xs gap-0 md:gap-6"> */}

        {
          portfolio.map((item,key) => {

            return (
              <div
                key={key}
                className="col-span-12 sm:col-span-6 lg:col-span-4 mb-2 lg:mb-6 flex flex-col gap-4"
              >
                <Link
                  href={'/portfolio/' + item.slug}
                  className="w-full h-full group aspect-video md:aspect-video overflow-hidden shadow-xl bg-stone-600/60"
                >
                  <Image
                    src={item.url}
                    alt='gallery item'
                    width={320}
                    height={320}
                    className='w-full h-full object-cover group-hover:scale-105 scale-100 md:group-hover:scale-105 saturate-100 group-hover:saturate-150 transition duration-300'
                  />
                </Link>

                <div className="flex flex-row justify-between items-center">
                  <p className="text-base font-sans font-bold">{item.title}</p>
                  <a href={item.link} className={ (item.link ? 'flex' : 'hidden') +  ' text-2xs font-sans font-bold uppercase tracking-wider rounded-full bg-neutral-700 hover:bg-neutral-900 text-white px-2 py-1 transition duration-300'} target="_blank">Open</a>
                </div>

              </div>
            )
          })
        }

      </div>

      <Footer></Footer>
    
    </section>
  );
}
