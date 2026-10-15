"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "uslu-intro-seen";
const AUTO_CLOSE_MS = 4000;

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);

  const close = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (seen) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(close, AUTO_CLOSE_MS);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="intro-splash"
          role="dialog"
          aria-label="USLU Estrich & Bodentechnik"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={close}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center overflow-hidden bg-ink"
        >
          <Image
            src="/images/intro-uslu.jpeg"
            alt=""
            fill
            priority
            className="scale-110 object-cover opacity-40 blur-2xl"
            sizes="100vw"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full max-w-[min(100vw,75vh)]"
          >
            <Image
              src="/images/intro-uslu.jpeg"
              alt="USLU Estrich & Bodentechnik – Estricharbeiten, Fußbodenheizung, Bodentechnik"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 75vh"
            />
          </motion.div>
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute bottom-6 right-6 rounded-full border border-white/25 bg-ink/60 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Zur Webseite →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
