"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Cleaning from "@/components/sections/services/Cleaning";
import Security from "@/components/sections/services/Security";
import PR from "@/components/sections/services/PR";
import Modal from "@/components/UI/Modal";

export default function ServicePage() {
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
    <main className="flex flex-col gap-16 px-4 pb-8 pt-20 text-cyberyellow md:gap-28 md:px-10 md:pb-20 md:pt-32">
      <h1 className="pt-8 text-center font-heading text-4xl font-bold md:text-6xl">
        Services Offered By Kyber Corporation
      </h1>

      <Cleaning />
      <Security />
      <PR />
      {loadModal && (
        <Modal onClose={() => setLoadModal(false)}>
          <p>
            This simple page is used to showcase the &quot;services&quot; of
            Kyber. While like the company none of the services are real, they
            allowed me to be a little creative while also allowing me to
            practice with some Framer Motion animations.
          </p>
          <p>
            Images are stored locally due to potential resource contrains,
            although a CMS for images as well as content would be preferable
          </p>
        </Modal>
      )}
    </main>
  );
}
