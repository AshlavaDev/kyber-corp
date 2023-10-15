import Link from "next/link";

//TODO: Add hover for links and logo and mobile version
export default function TopNavigation() {
  return (
    <header className="bg-cyberyellow text-deepblue h-[100px] md:h-[130px] w-full flex items-center justify-between p-2.5 z-50 fixed">
      <h4>TopNavigation</h4>
      <nav className="flex items-center gap-[180px] pr-[160px] text-4xl font-main">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  )
}
