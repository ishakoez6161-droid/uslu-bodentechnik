"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/button";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/construction-site.jpeg"
          alt="Rohbau mit Estrichvorbereitung – USLU Estrich & Bodentechnik"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-light/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold-light backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
          Estrich &amp; Bodentechnik aus Bergkamen – deutschlandweit im Einsatz
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Böden mit
          <span className="block text-gradient-gold italic">Charakter</span>
          und Handwerk mit Herz.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.7 }}
          className="mt-7 max-w-lg text-lg leading-relaxed text-white/70"
        >
          Estricharbeiten, Fußbodenheizung und Haussanierung aus einer Hand –
          präzise geplant, sauber umgesetzt und termintreu übergeben. Auf
          Wunsch übernehmen wir Ihr Projekt auch überregional in ganz
          Deutschland.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <LinkButton href="/kontakt" variant="primary">
            Projekt anfragen
          </LinkButton>
          <LinkButton href={site.phoneHref} variant="ghost-dark">
            {site.phones[0]} anrufen
          </LinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
        >
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scrollen</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-gold-light to-transparent"
        />
      </motion.div>
    </section>
  );
}
