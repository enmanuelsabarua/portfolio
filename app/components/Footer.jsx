import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
      <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
          <div className='container p-12 flex justify-between items-center'>
              <Link href={'/'} className='w-[150px] md:w-[300px] text-white font-semibold'>
                  <Image src="/images/logo.png" height={50} width={200} alt='Logo' />
              </Link>
              <p className='text-slate-600'>All rights reserved.</p>
          </div>
    </footer>
  )
}

export default Footer;