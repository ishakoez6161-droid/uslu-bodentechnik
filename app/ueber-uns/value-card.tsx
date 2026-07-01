"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/motion-primitives";

export default function ValueCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-3xl border border-ink/8 bg-white p-8 shadow-[0_2px_20px_rgba(20,15,10,0.05)]"
    >
      <div className="h-8 w-8 rounded-full border border-gold/40 bg-gold/10" />
      <h3 className="mt-5 font-display text-lg text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/60">{text}</p>
    </motion.div>
  );
}
