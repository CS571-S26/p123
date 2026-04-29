import { useState } from "react";
import { colors } from "../design-system/tokens/colors";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    comment: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.name}`;
    const body =
      `${form.comment}`;

    window.location.href =
      `mailto:cadenrxmiller@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id = "contact"
      className={`
        px-6 py-20 mt-20 border-t
        ${colors.bg.base}
        ${colors.border.subtle}
        ${colors.text.primary}
      `}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">
          Get In Touch
        </h2>

        <p className={`${colors.text.secondary} mb-8`}>
          Send me an email through this form or directly to cadenrxmiller@gmail.com
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800"
          />

          <textarea
            name="comment"
            placeholder="Your Message"
            rows="5"
            value={form.comment}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 resize-none"
          />

          <button
            type="submit"
            className={`
              px-6 py-3 rounded-lg font-medium transition
              ${colors.accent.primary}
              ${colors.accent.primaryHover}
              text-black
            `}
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}