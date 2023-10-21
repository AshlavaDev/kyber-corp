"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PR() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center opacity-0"
      id="pr"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "all" }}
    >
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <div className="h-full w-full max-w-prose flex-1 items-center justify-center border border-cyberyellow">
          <Image
            src="/images/services/marissa-daeger-Aq9J4RQWYho-unsplash.jpg"
            alt="A security camera image painted on a wall"
            width={900}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="flex max-w-prose flex-1 flex-col gap-4">
          <h2 className="font-heading text-4xl font-semibold md:text-6xl">
            Public Relations
          </h2>
          <p className="max-w-prose font-main text-lg md:text-2xl">
            Sometimes your public is tarnished, often due to circumstances byond
            your control. Opinion turns against you and you feel there is
            nothing that you can do to make it right. You think you do the
            rights things, like giving to charity or visiting an orphange.
          </p>
          <p className="max-w-prose font-main text-lg md:text-2xl">
            That is where our Public Relations department can help you. With
            their comprehensive program, they can make sure everyone knows about
            the good work you are doing, projecting to the whole world your
            qualities. The Discretion Package makes sure that your closet stays
            closed, because nothing could hurt you more than what others have
            stored in there.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
