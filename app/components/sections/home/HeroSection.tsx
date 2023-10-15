import Link from "next/link";

//TODO: Add hover for links and background image

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col justify-center gap-16 bg-purple">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center font-heading text-5xl font-semibold text-cyberyellow">
          Kyber Corporation
        </h1>
        <p className="text-center font-main text-2xl text-seagray">
          A corporation that cares about people. A corporation that cares about
          you.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <Link href="/services" className="btn btn-primary">
          Services
        </Link>
        <Link href="/careers" className="btn btn-secondary">
          Careers
        </Link>
      </div>
    </section>
  );
}
