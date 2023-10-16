import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center gap-16 bg-purple bg-cover bg-center bg-fixed" 
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10 mix-blend-darken w-full h-full"></div>
      <div className="relative flex flex-col items-center gap-4 z-20">
        <h1 className="text-center font-heading text-5xl md:text-8xl font-semibold text-cyberyellow">
          Kyber Corporation
        </h1>
        <p className="text-center font-main text-2xl md:text-4xl text-seagray">
          A corporation that cares about people. A corporation that cares about
          you.
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 z-20">
        <Link href="/services" className="btn btn-primary">
          Services
        </Link>
        <Link href="/careers" className="btn btn-secondary">
          Careers
        </Link>
      </div>
      <div className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("/images/home/kevin-laminto-7PqRZK6rbaE-unsplash.jpg")' }}>
      </div>
    </section>
  );
}
