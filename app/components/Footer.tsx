import Link from 'next/link'
import React from 'react'
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

export default function Footer() {
  return (
    <footer className='w-full max-w-screen-xl mx-auto flex flex-col px-6 md:px-16 pt-12  pb-12'>

      <div>
        <p className='text-center text-sm sm:text-md'>Copyright ©2024 All rights reserved.</p>
        <p className='text-center text-sm sm:text-md'>Australian Capital Territory</p>
      </div>
      
      <div className='w-full flex gap-3 justify-center items-center px-6 py-8'>
        <Link href='https://facebook.com/ryanmacalandag' ><BiLogoFacebookCircle size={24}></BiLogoFacebookCircle></Link>
        <Link href='https://github.com/ryanmacalandag' ><BiLogoGithub size={24}></BiLogoGithub></Link>
        <Link href='https://www.linkedin.com/in/ryanmacalandag/' ><BiLogoLinkedin size={24}></BiLogoLinkedin></Link>
      </div>

    </footer>
  )
}
