"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { fadeUp } from "@/components/motion-primitives";
import { site } from "@/lib/site";

export default function Gallery() {
  return (
    <section className="relative bg-stone py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Unsere Projekte"
          title="Einblicke in unsere Arbeit."
          subtitle={site.serviceArea}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {site.gallery.map((item) => (
            <motion.div
              key={item.src}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_10px_35px_rgba(20,15,10,0.12)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-light/30 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur">
                  {item.tag}
                </span>
                <div className="mt-2 font-display text-lg text-white">
                  {item.caption}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
