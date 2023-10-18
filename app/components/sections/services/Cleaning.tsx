'use client'

import { motion } from "framer-motion"

export default function Cleaning() {
  
  return (
    <motion.section className="flex flex-col items-center justify-center opacity-0" id="cleaning" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="flex flex-col md:flex-row items-center gap-24">
        <div className="flex-1 items-center justify-center w-full h-full border border-cyberyellow">Image</div>
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="font-heading text-4xl md:text-6xl font-semibold">Cleaning</h2>
          <p className="font-main text-lg md:text-2xl max-w-prose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, temporibus quae sapiente repellat voluptate accusantium aperiam reprehenderit. Mollitia eum quo provident accusantium possimus ad similique repellat ipsum, iure sequi vitae.</p>
          <p className="font-main text-lg md:text-2xl max-w-prose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo eveniet placeat voluptate, ex enim consequuntur maxime nemo culpa, vel eos officiis pariatur reprehenderit, dolore ea molestiae velit vero cum.</p>
        </div>
      </div>
    </motion.section>
  );
}
