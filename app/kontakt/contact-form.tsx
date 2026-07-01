"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Anfrage von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nTelefon: ${phone}\n\nNachricht:\n${message}`
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink/70">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ihr vollständiger Name"
            className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink/70">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Ihre Telefonnummer"
            className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink/70">
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Beschreiben Sie kurz Ihr Projekt..."
          className="w-full resize-none rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-xl bg-gradient-to-r from-gold-light to-gold px-7 py-4 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(183,136,60,0.35)] transition-shadow hover:shadow-[0_14px_38px_rgba(183,136,60,0.5)] sm:w-auto"
      >
        Nachricht senden
      </motion.button>
      {sent && (
        <p className="text-sm text-gold-deep">
          Ihr E-Mail-Programm öffnet sich – bitte senden Sie die vorbereitete
          Nachricht ab.
        </p>
      )}
    </form>
  );
}
