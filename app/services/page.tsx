import Cleaning from "@/app/components/sections/services/Cleaning";
import Security from "@/app/components/sections/services/Security";
import PR from "@/app/components/sections/services/PR";

export default function ServicePage() {

  return (
    <main className="bg-gradient-to-b from-deepblue to-darkpurple text-cyberyellow pt-32 pb-8 md:pb-20 px-4 md:px-10 flex flex-col gap-4 md:gap-28">

      <h1 className="font-heading text-4xl md:text-6xl text-center pt-8 font-bold">Services Offered By Kyber Corporation</h1>

      <Cleaning />
      <Security />
      <PR />
    </main>
  );
}
