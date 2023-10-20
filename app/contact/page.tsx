export default function page() {
  return (
    <main className="flex flex-col items-center gap-20 px-2 md:px-6 pb-8 pt-20 md:pt-32 text-cyberyellow">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-center font-heading text-4xl font-bold md:text-6xl">Contact Us</h1>
        <p className="text-center font-heading text-2xl md:text-4xl">Become Our Client Today</p>
        <p className="text-center font-main text-lg md:text-2xl text-seagray max-w-prose">For our Discretion Package, please make an appointment see see one of our representatives in any of our 12 offices.</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <form className="flex flex-col gap-4 max-w-prose flex-1" >
          <div className="form-div">
            <label htmlFor="name" className="form-label">Name</label>
            <input id="name" name="name" value="" type="text" placeholder="Name" className="form-input" />
          </div>
          <div className="form-div">
            <label htmlFor="email" className="form-label">Email</label>
            <input id="email" type="email" name="email" value="" placeholder="Email" className="form-input" />
          </div>
          <div className="form-div">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input id="phone" type="tel" name="phone" value="" placeholder="Phone Number" className="form-input" />
          </div>
          <fieldset>
            <legend className="form-label">Which services are you interested in?</legend>
            <div className="fieldset-div">
              <label htmlFor="form-cleaning" className="form-label">Cleaning</label>
              <input id="form-cleaning" name="service" value="cleaning" type="radio" />
            </div>
            <div className="fieldset-div">
              <label htmlFor="form-security" className="form-label">Security</label>
              <input id="form-security" name="service" value="security" type="radio" />
            </div>
            <div className="fieldset-div">
              <label htmlFor="form-pr" className="form-label">Public Relations</label>
              <input id="form-pr" name="service" value="pr" type="radio" />
            </div>
          </fieldset>
          <button className="btn btn-primary self-center" type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
