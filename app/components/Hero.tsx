import React from 'react'
import Link from 'next/link'
import { BiLogoLinkedin, BiLogoGithub, BiSolidCamera, BiLogoFlickr, BiListCheck, BiSolidVideo, BiSolidBrushAlt, BiLogoBehance } from "react-icons/bi";

export default function Hero() {
  return (
    <section id="header" className="w-full max-w-screen-2xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20">
        <div className="flex flex-col gap-4 amd:gap-12 text-left md:text-center px-6 md:px-24 xl:px-32 pt-12 sm:pt-16 lg:pt-20 pb-2 sm:pb-4 lg:pb-8">
          <h1 className="w-full text-base md:text-xl font-sans font-bold text-orange-600 uppercase tracking-widest">Hello, I&apos;m Ryan Macalandag.</h1> 
          <p className="text-lg sm:text-xl lg:text-2xl text-balance tracking-tight leading-normal italic">I have over 20 years experience in producing quality work for a wide mix of teams and organisations requiring creative thinking, innovative solutions, and strategic execution.</p>

          <div className="w-full flex flex-row md:flex-row justify-start md:justify-center items-center mt-4 md:mt-8 mb-8 gap-0 sm:gap-2">
            <Link target="_blank" title="Curriculum Vitae" href='https://drive.google.com/file/d/1tkYULJn7vnGtsDzEc8PmvESNaryj_PdD/view?usp=drive_link' className="bg-orange-600 hover:brightness-150 hover:-translate-y-1 border-2 border-orange-600/70 font-sans font-bold tracking-wider text-xs text-orange-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200 scale-90 sm:scale-100"><BiListCheck size={24}></BiListCheck></Link>
            <Link target="_blank" title="Linkedin" href='https://www.linkedin.com/in/ryanmacalandag/' className="bg-orange-600 hover:brightness-150 hover:-translate-y-1 border-2 border-orange-600/70 font-sans font-bold tracking-wider text-xs text-orange-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200 scale-90 sm:scale-100"><BiLogoLinkedin size={22}></BiLogoLinkedin></Link>
            <Link target="_blank" title="Github" href='https://github.com/ryanmacalandag' className="bg-orange-600 hover:brightness-150 hover:-translate-y-1 border-2 border-orange-600/70 font-sans font-bold tracking-wider text-xs text-orange-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200 scale-90 sm:scale-100"><BiLogoGithub size={22}></BiLogoGithub></Link>
            <Link target="_blank" title="Flickr" href='https://www.flickr.com/photos/ryanmacalandag/' className="bg-orange-600 hover:brightness-150 hover:-translate-y-1 border-2 border-orange-600/70 font-sans font-bold tracking-wider text-xs text-orange-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200 scale-90 sm:scale-100"><BiLogoFlickr size={22}></BiLogoFlickr></Link>
            <Link target="_blank" title="Youtube" href='https://www.youtube.com/@ryanmacalandag5279' className="bg-orange-600 hover:brightness-150 hover:-translate-y-1 border-2 border-orange-600/70 font-sans font-bold tracking-wider text-xs text-orange-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200 scale-90 sm:scale-100"><BiSolidVideo size={22}></BiSolidVideo></Link>
            <Link target="_blank" title="Photography" href='https://drive.google.com/file/d/1Nl2g4c7eY2uSImQrvbHTFPfH5m8ddBue/view?usp=sharing' className="bg-orange-600 hover:brightness-150 hover:-translate-y-1 border-2 border-orange-600/70 font-sans font-bold tracking-wider text-xs text-orange-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200 scale-90 sm:scale-100"><BiSolidCamera size={22}></BiSolidCamera></Link>
            <Link target="_blank" title="Graphic Design" href='https://drive.google.com/file/d/1xBWdDAM8HX6vAL8bdHMWGZ02V_D9GBuY/view?usp=sharing' className="bg-orange-600 hover:brightness-150 hover:-translate-y-1 border-2 border-orange-600/70 font-sans font-bold tracking-wider text-xs text-orange-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200 scale-90 sm:scale-100"><BiSolidBrushAlt size={22}></BiSolidBrushAlt></Link>
            <Link target="_blank" title="Behance" href='https://www.behance.net/ryanmacalandag' className="bg-orange-600 hover:brightness-150 hover:-translate-y-1 border-2 border-orange-600/70 font-sans font-bold tracking-wider text-xs text-orange-100 hover:text-stone-100 uppercase p-2 rounded-full transition duration-200 scale-90 sm:scale-100"><BiLogoBehance size={22}></BiLogoBehance></Link>
          </div>
        </div>
      </section>
  )
}
