export default function page() {
  return (
    <main className="pt-32 pb-8 px-2 min-h-screen text-cyberyellow flex flex-col gap-12 md:gap-20">
      <div className="flex flex-col gap-6">
        <h1 className="font-heading text-4xl md:text-6xl text-center ">Joining the Kyber Family</h1>
        <p className="text-center text-lg md:text-2xl font-main text-seagray">&quot;Discretion is the better part of valour&quot;</p>
      </div>

      <section className="flex flex-col items-center gap-8">
        <h2 className="text-2xl md:text-4xl font-heading">Join one our three departments</h2>
        <ul className="flex flex-col gap-2 text-lg md:text-2xl font-main">
          <li><p>Take care of the unwanted messes in the world and become a <span className="font-bold">Cleaner</span></p></li>
          <li><p>Join the elite and ensure the most important people are taken care of in <span className="font-bold">Security</span></p>
          </li>
          <li><p>Educate the masses of all the good work done by our clients in <span className="font-bold">Public Relations</span></p></li>
        </ul>
      </section>
      <section className="flex flex-col items-center gap-8">
        <h3 className="text-2xl md:text-4xl font-heading">Benefits</h3>
        <p className="text-xl md:text-3xl font-main">Joining Kyber comes with many perks including: </p>
        <ul className="flex flex-col gap-2 text-lg md:text-2xl font-main">
          <li><p>Upward mobility within the company for hard workers</p></li>
          <li><p>Perfomrance Bonuses</p></li>
          <li><p>Discount on healthcare insurance policies</p></li>
          <li><p>Discount on education that furthers your career</p></li>
          <li><p>Access the the gym and ability to rent the equipment</p></li>
          <li><p>Priority listings for rentals owned by the corporation</p></li>
        </ul>
      </section>
      <section className="flex flex-col items-center gap-8">
        <h3 className="text-2xl md:text-4xl font-heading">How to join the family</h3>
        <p className="text-lg md:text-2xl font-main">To join the corporation, walk into any of our 12 offices and ask reception for an application form. It really is that simple.</p>
      </section>
    </main>
  );
}
