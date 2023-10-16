import CorpLogo from "@/app/UI/CorpLogo";
import Link from "next/link";

//TODO: Add hover for links and mobile version
export default function TopNavigation() {
  return (
    <header className="fixed z-50 flex h-[100px] w-full items-center justify-between bg-cyberyellow p-2.5 text-deepblue md:h-[130px]">
      <div className="flex items-center gap-4">
        <CorpLogo />
        <h4 className="font-heading text-4xl font-semibold">KC</h4>
      </div>
      <nav className="flex items-center gap-[180px] pr-[160px] font-main text-4xl">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}
