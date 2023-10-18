import Cleaning from "@/app/components/sections/services/Cleaning";
import Security from "@/app/components/sections/services/Security";
import PR from "@/app/components/sections/services/PR";

export default function ServicePage() {
  return (
    <main>
      <div>
        <h1>Services Offered By Kyber Corporation</h1>
      </div>
      <Cleaning />
      <Security />
      <PR />
    </main>
  );
}
