import React from "react";

interface ContactProps {
  form: {
    [key: string]: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Contact({ form, handleChange, handleSubmit }: ContactProps) {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl text-purple-600 font-bold">Contact Me</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        <div className="text-gray-800">
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-white/40 shadow backdrop-blur">
              <h4 className="font-semibold text-black">
                <strong>Get in touch</strong>
              </h4>
              <p className="leading-relaxed">
                I’m open to internships and entry-level roles. Feel free to
                reach out for collaborations or interview opportunities.
              </p>
              <div className="mt-4 space-y-4 text-gray-600 text-sm">
                <div>
                  <strong>Email:</strong> guruprasadgm404@gmail.com
                </div>
                <div>
                  <strong>Location:</strong> Bengaluru, Karnataka, India
                </div>
                <div>
                  <strong>Available:</strong> Immediate
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          className="p-6 rounded-xl bg-white/40 shadow backdrop-blur space-y-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="block font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="entry.593212027"
            placeholder="Enter Your Good Name"
            required
            className="w-full p-3 rounded bg-gray-100 text-gray-900"
            value={form["entry.593212027"]}
            onChange={handleChange}
          />

          <label htmlFor="email" className="block font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="entry.533863544"
            placeholder="example@gmail.com"
            required
            className="w-full p-3 rounded bg-gray-100 text-gray-900"
            value={form["entry.533863544"]}
            onChange={handleChange}
          />

          <label htmlFor="message" className="block font-semibold">
            Message:
          </label>
          <textarea
            id="message"
            name="entry.381445346"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-100 text-gray-900"
            rows={4}
            value={form["entry.381445346"]}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-purple-400 rounded font-semibold text-white transition-transform duration-200 hover:scale-105 hover:bg-purple-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
