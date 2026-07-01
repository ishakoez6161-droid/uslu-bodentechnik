"use client";

import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { Reveal, RevealGroup, fadeUp } from "@/components/motion-primitives";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Beratung vor Ort",
    text: "Wir hören zu, messen aus und beraten Sie ehrlich zu Materialien, Aufbau und Zeitplan.",
  },
  {
    number: "02",
    title: "Planung & Angebot",
    text: "Sie erhalten ein transparentes Angebot – klar kalkuliert, ohne versteckte Kosten.",
  },
  {
    number: "03",
    title: "Fachgerechte Umsetzung",
    text: "Unser Team arbeitet präzise, sauber und hält vereinbarte Termine zuverlässig ein.",
  },
  {
    number: "04",
    title: "Abnahme & Nachsorge",
    text: "Nach der Übergabe stehen wir Ihnen weiterhin für Fragen und Service zur Seite.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-ink py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/tools-helmet.jpeg"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="So arbeiten wir"
          title="Von der Idee bis zur Übergabe."
          subtitle="Ein klarer Ablauf für ein Ergebnis, auf das Sie sich verlassen können."
          dark
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div key={step.number} variants={fadeUp} className="relative pl-2">
              <div className="font-display text-5xl text-white/10">
                {step.number}
              </div>
              <h3 className="mt-2 font-display text-xl text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {step.text}
              </p>
              {i < steps.length - 1 && (
                <div className="mt-6 hidden h-px w-full bg-gradient-to-r from-gold/40 to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </RevealGroup>
      </div>
      <Reveal className="sr-only">Prozess</Reveal>
    </section>
  );
}
