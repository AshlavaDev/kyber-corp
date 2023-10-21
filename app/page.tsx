"use client";

import { useState, useEffect } from "react";

import HeroSection from "@/components/sections/home/HeroSection";
import ServicesHome from "@/components/sections/home/ServicesHome";
import Modal from "@/components/UI/Modal";

export default function HomePage() {
  const [loadModal, setLoadModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadModal(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <ServicesHome />
      {loadModal && (
        <Modal onClose={() => setLoadModal(false)}>
          <p className="text-2xl font-bold">
            Hello and Welcome to this portfolio project
          </p>
          <p>
            This is a small website to showcase front-end skills. It is based on
            a home page design I did in school and built in Next 13. As a
            portfolio project it is slimmed down and some functionality, such as
            the contact form, work differently than they would on a proper live
            production site.
          </p>
          <p>
            This site also reflects some of my own creativity, as it is a parody
            site in a way based on my love of cyberpunk and satire.
          </p>
          <p>
            Thank you for visiting! My own website can be found{" "}
            <a
              href="https://www.ashleymorganwbdv.com/"
              target="_blank"
              className="font-semibold text-purple hover:text-xl md:hover:text-2xl"
            >
              here
            </a>{" "}
            and the GitHub repo for this site can be found{" "}
            <a
              href="https://github.com/AshlavaDev/kyber-corp"
              target="_blank"
              className="font-semibold text-purple hover:text-xl md:hover:text-2xl"
            >
              here
            </a>
            .
          </p>
        </Modal>
      )}
    </main>
  );
}
