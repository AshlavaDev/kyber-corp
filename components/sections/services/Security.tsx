"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Security() {
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
      id="security"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: viewport }}
    >
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <div className="order-first h-full w-full max-w-prose flex-1 items-center justify-center border border-cyberyellow md:order-1">
          <Image
            src="/images/services/tobias-tullius-4dKy7d3lkKM-unsplash.jpg"
            alt="A security camera image painted on a wall"
            width={900}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="flex max-w-prose flex-1 flex-col gap-4">
          <h2 className="font-heading text-4xl font-semibold md:text-6xl">
            Security
          </h2>
          <p className="max-w-prose font-main text-lg md:text-2xl">
            The world is a dangerous place, and a person as important as you or
            even your company deserve the finest in protection. Defend against
            the threats that come your way or preemptively take them out before
            that can do you harm.
          </p>
          <p className="max-w-prose font-main text-lg md:text-2xl">
            The Kyber Corporation takes matters of Security very seriously. Our
            team of highly trained professionals can make the dangers out there
            disappear, giving you peace of mind. Our Discretion Packages ensures
            that any threat is taken care of quietly.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
