"use client";

import CorpLogo from "@/app/components/UI/CorpLogo";
import { LuCopyright } from "react-icons/lu";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
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
    <footer className="flex w-full flex-col items-center justify-center gap-4 bg-cyberyellow py-4 text-deepblue md:py-10">
      <h4 className="flex items-center font-heading text-3xl font-semibold md:text-5xl">
        <CorpLogo width={width} height={height} />
        KC
      </h4>
      <p className="flex items-center font-main text-2xl md:text-4xl">
        <LuCopyright /> 2023 Kyber Corporation{" "}
      </p>
      <p className="text-center text-lg md:text-2xl">
        Portfolio Project of{" "}
        <a
          href="https://www.ashleymorganwbdv.com/"
          target="_blank"
          className="text-[#62004b]"
        >
          Ashley Morgan
        </a>
      </p>
    </footer>
  );
}
