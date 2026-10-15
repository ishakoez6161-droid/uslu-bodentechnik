"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/button";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 top-0 flex h-screen items-center"
        aria-hidden="true"
      >
        <div className="relative mx-auto aspect-[1528/557] w-[calc(100%-3rem)] max-w-7xl opacity-[0.09] lg:ml-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:w-[min(44vw,40rem)]">
          <Image
            src="/images/logo-uslu.png"
            alt=""
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
        </div>
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Estrich &amp; Bodentechnik aus Bergkamen – deutschlandweit im Einsatz
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            Böden mit
            <span className="block text-gradient-gold italic">Charakter</span>
            und Handwerk mit Herz.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.7 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-ink/65"
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
            <LinkButton href={site.phoneHref} variant="ghost-light">
              {site.phones[0]} anrufen
            </LinkButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-ink/10 pt-8"
          >
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-ink sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-ink/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[1087/1447] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(20,15,10,0.25)] ring-1 ring-ink/5">
            <Image
              src="/images/intro-uslu.jpeg"
              alt="USLU Estrich & Bodentechnik – Estricharbeiten, Fußbodenheizung, Bodentechnik"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/40 sm:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scrollen</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
