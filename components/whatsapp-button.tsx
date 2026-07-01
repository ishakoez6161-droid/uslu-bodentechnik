"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Über WhatsApp kontaktieren"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_28px_rgba(37,211,102,0.45)]"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.353.615 4.646 1.782 6.666L2.667 29.333l6.84-1.795a13.27 13.27 0 0 0 6.497 1.655h.006c7.363 0 13.332-5.97 13.332-13.333 0-3.56-1.386-6.907-3.903-9.425a13.246 13.246 0 0 0-9.435-3.768Zm0 24.4h-.005a11.08 11.08 0 0 1-5.65-1.548l-.405-.24-4.06 1.065 1.084-3.958-.264-.406a11.06 11.06 0 0 1-1.7-5.913c0-6.127 4.987-11.113 11.117-11.113a11.05 11.05 0 0 1 7.86 3.257 11.04 11.04 0 0 1 3.253 7.865c0 6.127-4.99 11.114-11.117 11.114l-.019-.123Zm6.098-8.324c-.334-.167-1.98-.978-2.287-1.09-.307-.111-.53-.166-.753.167-.223.334-.865 1.09-1.06 1.313-.195.223-.39.25-.724.083-.334-.167-1.41-.52-2.686-1.657-.993-.885-1.664-1.978-1.86-2.312-.195-.334-.02-.514.147-.68.15-.15.334-.39.5-.585.167-.195.223-.334.334-.557.111-.223.056-.418-.028-.585-.083-.167-.752-1.813-1.03-2.483-.271-.652-.548-.563-.752-.573l-.641-.011c-.223 0-.585.083-.891.418-.307.334-1.17 1.144-1.17 2.79s1.198 3.237 1.365 3.46c.167.223 2.36 3.604 5.716 5.055.8.345 1.424.551 1.91.706.802.255 1.532.219 2.11.133.644-.096 1.98-.81 2.259-1.593.279-.782.279-1.452.195-1.593-.083-.14-.306-.223-.64-.39Z" />
      </svg>
    </motion.a>
  );
}
