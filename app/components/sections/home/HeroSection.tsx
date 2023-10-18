import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center gap-16 bg-purple bg-cover bg-fixed bg-center">
      <div className="bg-black absolute inset-0 z-10 h-full w-full opacity-50 mix-blend-darken"></div>
      <div className="relative z-20 flex flex-col items-center gap-4">
        <h1 className="text-center font-heading text-5xl font-semibold text-cyberyellow md:text-8xl">
          Kyber Corporation
        </h1>
        <p className="text-center font-main text-2xl text-seagray md:text-4xl">
          A corporation that cares about people. A corporation that cares about
          you.
        </p>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center gap-8 md:flex-row">
        <Link href="/services" className="btn btn-primary">
          Services
        </Link>
        <Link href="/careers" className="btn btn-secondary">
          Careers
        </Link>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            'url("/images/home/kevin-laminto-7PqRZK6rbaE-unsplash.jpg")',
        }}
      ></div>
    </section>
  );
}
