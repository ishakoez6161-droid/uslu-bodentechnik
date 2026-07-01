"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Reveal, staggerContainer, fadeUp } from "@/components/motion-primitives";
import { site } from "@/lib/site";

const icons: Record<string, React.ReactNode> = {
  estricharbeiten: (
    <path
      d="M4 32h24M8 32V16l8-6 8 6v16M14 32v-8h4v8"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  fussbodenheizung: (
    <path
      d="M6 24c2-4 4-6 4-9a4 4 0 1 1 8 0c0 3 2 5 4 9a6 6 0 1 1-16 0Z M18 8c1.5 2 2 3.5 2 5"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  haussanierung: (
    <path
      d="M6 18 18 8l12 10M9 16v14h18V16 M15 30v-8h6v8"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "beratung-planung": (
    <path
      d="M8 28V10h16l4 4v14H8Z M12 16h12M12 20h12M12 24h8"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Services() {
  return (
    <section id="leistungen" className="relative bg-stone py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Alles aus einer Hand, mit einem Anspruch."
          subtitle="Zuverlässigkeit, Qualität und persönliche Betreuung stehen bei uns im Fokus – von der ersten Beratung bis zur letzten Fuge."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {site.services.map((service) => (
            <motion.div
              key={service.slug}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl border border-ink/8 bg-white p-8 shadow-[0_2px_20px_rgba(20,15,10,0.05)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(183,136,60,0.18)]"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-soft/0 transition-colors duration-500 group-hover:bg-gold-soft/40" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-gold-light transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" className="h-7 w-7">
                  {icons[service.slug]}
                </svg>
              </div>
              <h3 className="relative mt-6 font-display text-xl text-ink">
                {service.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-ink/60">
                {service.short}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <p className="max-w-2xl text-center text-sm text-ink/50">
            Sie haben ein individuelles Anliegen? Kontaktieren Sie uns – wir
            beraten Sie gerne persönlich und finden die passende Lösung für
            Ihr Projekt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
