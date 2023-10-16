'use client'

import CorpLogo from "@/app/UI/CorpLogo";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from 'react'


export default function TopNavigation() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <header className="fixed z-50 flex h-[100px] w-full items-center justify-between bg-cyberyellow p-2.5 text-deepblue md:h-[130px] px-2">
      <div className="flex items-center gap-2 md:gap-4">
        <CorpLogo width={width} height={height} />
        <h4 className="font-heading text-2xl md:text-4xl font-semibold">KC</h4>
      </div>
      <nav className="hidden md:flex items-center gap-[180px] pr-[160px] font-main text-4xl">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/careers" className="nav-link">Careers</Link>
        <Link href="/contact" className="nav-link">Contact Us</Link>
      </nav>
      <button className="md:hidden w-12 h-12 flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <GiHamburgerMenu className="w-full h-auto" />
      </button>
      {isMenuOpen && (
      <nav className="flex md:hidden flex-col absolute top-[100px] left-0 w-full bg-cyberyellow p-2.5 text-deepblue font-main text-4xl">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/careers" className="nav-link">Careers</Link>
        <Link href="/contact" className="nav-link">Contact Us</Link>
      </nav>
      )}
    </header>
  );
}
