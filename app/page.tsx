import HeroSection from "@/app/components/sections/home/HeroSection";
import ServicesHome from "@/app/components/sections/home/ServicesHome";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-deepblue to-darkpurple">
      <HeroSection />
      <ServicesHome />
    </main>
  );
}
