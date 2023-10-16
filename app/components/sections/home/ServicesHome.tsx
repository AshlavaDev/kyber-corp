import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeCard from "@/app/UI/HomeCard";

const services = [
  {
    image: "/images/services/gil-ribeiro-3hO8igCybds-unsplash.jpg",
    alt: "A person cleaning a room",
    title: "Cleaning",
    content:
      "Here at Kyber Corporation, we help you clean up the messes in your life. We specialize in cleaning for other corporations and for VIPs.",
  },
  {
    image: "/images/services/nasa-Q1p7bh3SHj8-unsplash.jpg",
    alt: "An orbital view of Earth with many lights",
    title: "Security",
    content:
      "Our elite clientele are afforded all the skills and resources of Kyber Corporation. Join the many who have chosen us to protect their interests against whatever the world and the bad people in it throw at you. ",
  },
  {
    image: "/images/services/tim-mossholder-Z7U-Iy5EtSM-unsplash.jpg",
    alt: "A sign on the side of a building that says The Public",
    title: "PR",
    content:
      "Engage our wonderful team of PR reps to market your company or yourselves. Make sure that the public knows just how great you really are.",
  },
];

//TODO: Carousel for cards?, mobile responsive

export default function ServicesHome() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 md:gap-20 py-4 bg-deepblue">
      <h2 className="font-heading text-4xl text-center md:text-5xl font-semibold text-cyberyellow">
        What we can offer you!
      </h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        {services.map((service, index) => (
          <HomeCard
            key={index}
            image={service.image}
            alt={service.alt}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>
    </section>
  );
}
