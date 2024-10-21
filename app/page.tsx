import Link from "next/link";
import { portfolio } from "./data/portfolio";
import Image from "next/image";
import Footer from "./components/Footer";
import { BiLogoLinkedin, BiLogoGithub, BiSolidCamera, BiLogoFlickr, BiLogoYoutube, BiListCheck } from "react-icons/bi";

export default async function Page() {

  return (
    <section id="hero-01" className="w-full max-w-screen-2xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20">
      
      <div className="flex flex-col gap-4 amd:gap-12 text-left md:text-center px-6 md:px-24 xl:px-32 pt-16 md:pt-24 lg:pt-32">
        <h1 className="w-full text-base md:text-xl font-sans font-bold text-pink-700 uppercase tracking-widest">Hello, I&apos;m Ryan Macalandag.</h1> 
        <p className="text-xl lg:text-2xl text-balance tracking-tight leading-normal italic">I have over 20 years experience in producing quality work for a wide mix of teams and organisations requiring creative thinking, innovative solutions, and strategic execution.</p>

        <div className="w-full flex flex-row md:flex-row justify-start md:justify-center items-center mt-4 md:mt-8 mb-8 gap-2">
          {/* <a href="https://drive.google.com/file/d/1tkYULJn7vnGtsDzEc8PmvESNaryj_PdD/view?usp=drive_link" className="flex justify-between items-center gap-2 bg-transparent hover:bg-pink-700 border-2 border-pink-700/70 font-sans font-bold tracking-wider text-xs text-pink-700 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Curriculum Vitae <BiRightArrowAlt size={18}></BiRightArrowAlt></a>
          <a href="https://www.youtube.com/@ryanmacalandag5279" className="flex justify-between items-center gap-2 bg-transparent hover:bg-pink-700 border-2 border-pink-700/70 font-sans font-bold tracking-wider text-xs text-pink-700 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Video Production <BiRightArrowAlt size={18}></BiRightArrowAlt></a>
          <a href="https://drive.google.com/file/d/1Nl2g4c7eY2uSImQrvbHTFPfH5m8ddBue/view?usp=sharing" className="flex justify-between items-center gap-2 bg-transparent hover:bg-pink-700 border-2 border-pink-700/70 font-sans font-bold tracking-wider text-xs text-pink-700 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Photography <BiRightArrowAlt size={18}></BiRightArrowAlt></a>
          <a href="https://drive.google.com/file/d/1xBWdDAM8HX6vAL8bdHMWGZ02V_D9GBuY/view?usp=sharing" className="flex justify-between items-center gap-2 bg-transparent hover:bg-pink-700 border-2 border-pink-700/70 font-sans font-bold tracking-wider text-xs text-pink-700 hover:text-stone-100 uppercase px-4 py-3 rounded-full transition duration-200" target="_blank">Graphic Design <BiRightArrowAlt size={18}></BiRightArrowAlt></a> */}
          <Link target="_blank" title="Curriculum Vitae" href='https://drive.google.com/file/d/1tkYULJn7vnGtsDzEc8PmvESNaryj_PdD/view?usp=drive_link' className="bg-pink-700 hover:bg-pink-600 border-2 border-pink-700/70 font-sans font-bold tracking-wider text-xs text-pink-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200"><BiListCheck size={24}></BiListCheck></Link>
          <Link target="_blank" title="Linkedin" href='https://www.linkedin.com/in/ryanmacalandag/' className="bg-pink-700 hover:bg-pink-600 border-2 border-pink-700/70 font-sans font-bold tracking-wider text-xs text-pink-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200"><BiLogoLinkedin size={24}></BiLogoLinkedin></Link>
          <Link target="_blank" title="Github" href='https://github.com/ryanmacalandag' className="bg-pink-700 hover:bg-pink-600 border-2 border-pink-700/70 font-sans font-bold tracking-wider text-xs text-pink-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200"><BiLogoGithub size={24}></BiLogoGithub></Link>
          <Link target="_blank" title="Flickr" href='https://www.flickr.com/photos/ryanmacalandag/' className="bg-pink-700 hover:bg-pink-600 border-2 border-pink-700/70 font-sans font-bold tracking-wider text-xs text-pink-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200"><BiLogoFlickr size={24}></BiLogoFlickr></Link>
          <Link target="_blank" title="Youtube" href='https://www.youtube.com/@ryanmacalandag5279' className="bg-pink-700 hover:bg-pink-600 border-2 border-pink-700/70 font-sans font-bold tracking-wider text-xs text-pink-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200"><BiLogoYoutube size={24}></BiLogoYoutube></Link>
          <Link target="_blank" title="Photography" href='https://drive.google.com/file/d/1Nl2g4c7eY2uSImQrvbHTFPfH5m8ddBue/view?usp=sharing' className="bg-pink-700 hover:bg-pink-600 border-2 border-pink-700/70 font-sans font-bold tracking-wider text-xs text-pink-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200"><BiSolidCamera size={24}></BiSolidCamera></Link>
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
                  <p className="text-sm font-sans leading-tight text-balance">{item.title}</p>
                  <a href={item.link} className={ (item.link ? 'flex' : 'hidden') +  ' text-2xs font-sans font-bold uppercase tracking-wider rounded-full flex flex-shrink-0 bg-neutral-700 hover:bg-neutral-900 text-white px-2 py-1 transition duration-300'} target="_blank">Open link</a>
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
