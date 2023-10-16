'use client'

import CorpLogo from '@/app/UI/CorpLogo'
import { LuCopyright } from 'react-icons/lu'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)
  const width = isMobile ? 60 : 80
  const height = isMobile ? 60 : 80

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className="bg-cyberyellow flex flex-col items-center justify-center gap-4 py-4 md:py-10 w-full text-deepblue">
      <h4 className="font-heading text-3xl md:text-5xl font-semibold flex items-center">
        <CorpLogo width={width} height={height}  />
        KC
      </h4>
      <p className="font-main text-2xl md:text-4xl flex items-center"><LuCopyright /> 2023 Kyber Corporation </p>
      <p className='text-lg md:text-2xl text-center'>Portfolio Project of <a href='https://www.ashleymorganwbdv.com/' target='_blank' className='text-[#62004b]'>Ashley Morgan</a></p>
    </footer>
  )
}
