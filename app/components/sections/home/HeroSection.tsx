import Link from "next/link";

//TODO: Add hover for links and background image

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col bg-purple justify-center gap-16">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-cyberyellow text-5xl font-heading font-semibold text-center">Kyber Corporation</h1>
        <p className="font-main text-seagray text-2xl text-center">A corporation that cares about people. A corporation that cares about you.</p>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <Link href="/services" className="btn btn-primary">Services</Link>
        <Link href="/careers" className="btn btn-secondary">Careers</Link>
      </div>
    </section>
  )
}
