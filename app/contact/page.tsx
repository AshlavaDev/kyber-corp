'use client'

import { useState, FormEvent, useEffect } from "react";

import Modal from "@/components/UI/Modal";

interface ContactProps {
  name: string;
  email: string;
  phone: string;
  service: string;
}

const InitialContactState: ContactProps = {
  name: "",
  email: "",
  phone: "",
  service: ""
}

export default function ContactPage() {
  const [state, setState] = useState(InitialContactState);
  const [loadModal, setLoadModal] = useState(false);
  const [formModal, setFormModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadModal(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setFormModal(true);
  }

  return (
    <main className="flex flex-col items-center gap-16 px-2 md:px-6 pb-8 md:pb-16 pt-20 md:pt-32 text-cyberyellow">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-center font-heading text-4xl font-bold md:text-6xl">Contact Us</h1>
        <p className="text-center font-heading text-2xl md:text-4xl">Become Our Client Today</p>
        <p className="text-center font-main text-lg md:text-2xl text-seagray max-w-prose">For our Discretion Package, please make an appointment see see one of our representatives in any of our 12 offices.</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <form className="flex flex-col gap-4 max-w-prose flex-1" onSubmit={handleSubmit}>
          <p className="text-center font-main text-lg md:text-2xl text-cyberyellow max-w-prose">For everyone else, please use the form below and a client relations representative will contact you shortly.</p>
          <p className="text-center font-main text-lg md:text-2xl text-cyberyellow max-w-prose">* Required</p>
          <div className="form-div">
            <label htmlFor="name" className="form-label">Name *</label>
            <input required id="name" name="name" value={state.name} type="text" placeholder="Name" className="form-input" onChange={handleChange} />
          </div>
          <div className="form-div">
            <label htmlFor="email" className="form-label">Email *</label>
            <input required id="email" type="email" name="email" value={state.email} placeholder="Email" className="form-input" onChange={handleChange} />
          </div>
          <div className="form-div">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input id="phone" type="tel" name="phone" value={state.phone} placeholder="Phone Number" className="form-input" onChange={handleChange} />
          </div>
          <fieldset>
            <legend className="form-label">Which services are you interested in? *</legend>
            <div className="fieldset-div">
              <label htmlFor="form-cleaning" className="form-label">Cleaning</label>
              <input required id="form-cleaning" name="service" value="cleaning" type="radio" onChange={handleChange} />
            </div>
            <div className="fieldset-div">
              <label htmlFor="form-security" className="form-label">Security</label>
              <input id="form-security" name="service" value="security" type="radio" onChange={handleChange} />
            </div>
            <div className="fieldset-div">
              <label htmlFor="form-pr" className="form-label">Public Relations</label>
              <input id="form-pr" name="service" value="pr" type="radio" onChange={handleChange} />
            </div>
          </fieldset>
          <button className="btn btn-primary self-center" type="submit">Submit</button>
        </form>
      </div>
      {loadModal && (
        <Modal onClose={() => setLoadModal(false)}>
          <p>This is a contact page with the standard form you might see on other websites. The form itself accepts information with React useState, but the submit button will not send any emails as this is a portfolio piece. I don&apos;t want to be inundated with emails, and I am sure whoever us looking at this site wants the same.</p>
          <p>Unless you are a recruiter who loves emails. Then contact me and I can make it spam them for you.</p>
        </Modal>
      )}
      {formModal && (
        <Modal onClose={() => setFormModal(false)}>
          <p>If this were a real website, the form would submit now. Since I wanted to avoid sending emails for a portfolio project, this modal shows instead. For a front-end project, a service such as Formspree woud be used for this form, and in projects with backends the email functionality would be dealt with there.</p>
          <p>Instead, here is the information you would have submitted:</p>
          <ul>
            <li>Name: {state.name}</li>
            <li>Email: {state.email}</li>
            <li>Phone: {state.phone}</li>
            <li>Service: {state.service}</li>
          </ul>
        </Modal>
      )}
    </main>
  );
}
