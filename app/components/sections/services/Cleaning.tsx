"use client";

import { motion } from "framer-motion";

export default function Cleaning() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center opacity-0"
      id="cleaning"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <div className="h-full w-full flex-1 items-center justify-center border border-cyberyellow">
          Image
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="font-heading text-4xl font-semibold md:text-6xl">
            Cleaning
          </h2>
          <p className="max-w-prose font-main text-lg md:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, temporibus quae sapiente repellat voluptate accusantium
            aperiam reprehenderit. Mollitia eum quo provident accusantium
            possimus ad similique repellat ipsum, iure sequi vitae.
          </p>
          <p className="max-w-prose font-main text-lg md:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            explicabo eveniet placeat voluptate, ex enim consequuntur maxime
            nemo culpa, vel eos officiis pariatur reprehenderit, dolore ea
            molestiae velit vero cum.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
