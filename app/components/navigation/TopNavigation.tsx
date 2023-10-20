"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

import CorpLogo from "@/app/components/UI/CorpLogo";

export default function TopNavigation() {
  //This allows for the logo svg to be adjusted repsonsively
  const [isMobile, setIsMobile] = useState(false);
  //This allows for the menu to be toggled on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const width = isMobile ? 60 : 80;
  const height = isMobile ? 60 : 80;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed z-50 flex h-24 w-full items-center justify-between bg-cyberyellow p-2 text-deepblue">
      <div className="flex items-center gap-2 md:gap-4">
        <CorpLogo width={width} height={height} />
        <h4 className="font-heading text-2xl font-semibold md:text-4xl">KC</h4>
      </div>
      <nav className="hidden items-center gap-[180px] pr-[160px] font-main text-4xl md:flex">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/services" className="nav-link">
          Services
        </Link>
        <Link href="/careers" className="nav-link">
          Careers
        </Link>
        <Link href="/contact" className="nav-link">
          Contact Us
        </Link>
      </nav>
      <button
        className="flex h-12 w-12 items-center justify-center md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <GiHamburgerMenu className="h-auto w-full" />
      </button>
      {isMenuOpen && (
        <nav className="absolute left-0 top-[100px] flex w-full flex-col bg-cyberyellow p-2.5 font-main text-4xl text-deepblue md:hidden">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/services" className="nav-link">
            Services
          </Link>
          <Link href="/careers" className="nav-link">
            Careers
          </Link>
          <Link href="/contact" className="nav-link">
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
