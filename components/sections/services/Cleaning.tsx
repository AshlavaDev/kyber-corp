"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Cleaning() {
  const [viewport, setViewport] = useState<number | "all" | "some" | undefined>(
    "some",
  );

  useEffect(() => {
    const handleResize = () => {
      setViewport(document.documentElement.clientWidth > 768 ? "all" : "some");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      className="flex flex-col items-center justify-center opacity-0"
      id="cleaning"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: viewport }}
    >
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <div className="h-full w-full max-w-prose flex-1 items-center justify-center border border-cyberyellow">
          <Image
            src="/images/services/towfiqu-barbhuiya--9gPKrsbGmc-unsplash.jpg"
            alt="A person cleaning a desk"
            width={900}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="flex max-w-prose flex-1 flex-col gap-4">
          <h2 className="font-heading text-4xl font-semibold md:text-6xl">
            Cleaning
          </h2>
          <p className="max-w-prose font-main text-lg md:text-2xl">
            Sometimes, messes get out of control. One thing goes wrong and
            disaster occurs. And big messes can mean big attention. You need
            those out of control spills to be taken care of before they become a
            problem.
          </p>
          <p className="max-w-prose font-main text-lg md:text-2xl">
            Let Kyber Corporation clean up that mess for you. Our professional
            Cleaners can go to any location and remove the tough stains and
            garbage and leave the place spotless. And with the Discretion
            Package, no one will ever know they were there.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
