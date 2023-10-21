import Cleaning from "@/components/sections/services/Cleaning";
import Security from "@/components/sections/services/Security";
import PR from "@/components/sections/services/PR";

//TODO: Add actual content
export default function ServicePage() {
  return (
    <main className="flex flex-col gap-16 px-4 pb-8 pt-20 text-cyberyellow md:gap-28 md:px-10 md:pb-20 md:pt-32">
      <h1 className="pt-8 text-center font-heading text-4xl font-bold md:text-6xl">
        Services Offered By Kyber Corporation
      </h1>

      <Cleaning />
      <Security />
      <PR />
    </main>
  );
}
