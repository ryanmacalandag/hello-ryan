import React from 'react'
import Link from 'next/link'
import { BiLogoLinkedin, BiLogoGithub, BiSolidCamera, BiLogoFlickr, BiLogoYoutube, BiListCheck } from "react-icons/bi";

export default function Header() {
  return (
    <section id="header" className="w-full max-w-screen-2xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20">
        <div className="flex flex-col gap-4 amd:gap-12 text-left md:text-center px-6 md:px-24 xl:px-32 pt-16 md:pt-24 lg:pt-32 pb-8">
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
      </section>
  )
}
