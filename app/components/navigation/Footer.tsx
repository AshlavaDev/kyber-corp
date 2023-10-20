"use client";

import CorpLogo from "@/app/components/UI/CorpLogo";
import { LuCopyright } from "react-icons/lu";
import { useState, useEffect } from "react";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-2 bg-cyberyellow py-4 text-deepblue">
      <p className="flex items-center font-main text-2xl md:text-4xl">
        <LuCopyright /> 2023 Kyber Corporation{" "}
      </p>
      <p className="text-center text-lg md:text-2xl">
        Portfolio Project of{" "}
        <a
          href="https://www.ashleymorganwbdv.com/"
          target="_blank"
          className="text-darkpurple hover:underline"
        >
          Ashley Morgan
        </a>
      </p>
    </footer>
  );
}
