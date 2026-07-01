"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/components/motion-primitives";

export default function ContactInfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_2px_16px_rgba(20,15,10,0.04)]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-gold-light">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-ink/40">
          {title}
        </div>
        <div className="mt-1 text-sm leading-relaxed text-ink/80">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
