export default function page() {
  return (
    <main className="flex min-h-screen flex-col gap-12 px-2 pb-8 pt-32 text-cyberyellow md:gap-20">
      <div className="flex flex-col gap-6">
        <h1 className="text-center font-heading text-4xl md:text-6xl ">
          Joining the Kyber Family
        </h1>
        <p className="text-center font-main text-lg text-seagray md:text-2xl">
          &quot;Discretion is the better part of valour&quot;
        </p>
      </div>

      <section className="flex flex-col items-center gap-8">
        <h2 className="font-heading text-2xl md:text-4xl">
          Join one our three departments
        </h2>
        <ul className="flex flex-col gap-2 font-main text-lg md:text-2xl">
          <li>
            <p>
              Take care of the unwanted messes in the world and become a{" "}
              <span className="font-bold">Cleaner</span>
            </p>
          </li>
          <li>
            <p>
              Join the elite and ensure the most important people are taken care
              of in <span className="font-bold">Security</span>
            </p>
          </li>
          <li>
            <p>
              Educate the masses of all the good work done by our clients in{" "}
              <span className="font-bold">Public Relations</span>
            </p>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center gap-8">
        <h3 className="font-heading text-2xl md:text-4xl">Benefits</h3>
        <p className="font-main text-xl md:text-3xl">
          Joining Kyber comes with many perks including:{" "}
        </p>
        <ul className="flex flex-col gap-2 pl-4 font-main text-lg md:text-2xl">
          <li>
            <p>Upward mobility within the company for hard workers</p>
          </li>
          <li>
            <p>Performance Bonuses</p>
          </li>
          <li>
            <p>Discount on healthcare insurance policies</p>
          </li>
          <li>
            <p>Discount on education that furthers your career</p>
          </li>
          <li>
            <p>Access the the gym and ability to rent the equipment</p>
          </li>
          <li>
            <p>Priority listings for rentals owned by the corporation</p>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center gap-8">
        <h3 className="font-heading text-2xl md:text-4xl">
          How to join the family
        </h3>
        <p className="font-main text-lg md:text-2xl">
          To join the corporation, walk into any of our 12 offices and ask
          reception for an application form. It really is that simple.
        </p>
      </section>
    </main>
  );
}
