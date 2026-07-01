"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 border border-white/10 backdrop-blur-md transition-all duration-500 ${
            scrolled
              ? "bg-ink/85 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
              : "bg-ink/25"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5">
              <Image
                src="/images/logo.jpeg"
                alt="USLU Estrich & Bodentechnik Logo"
                fill
                className="object-contain p-1"
                sizes="40px"
              />
            </span>
            <span
              className={`font-display text-lg leading-tight tracking-tight transition-colors ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              USLU
              <span className="block text-[0.6rem] font-sans font-medium uppercase tracking-[0.28em] text-gold-light">
                Estrich &amp; Bodentechnik
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-gold-light" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-gold-light"
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 rounded-full bg-gradient-to-r from-gold-light to-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_4px_18px_rgba(183,136,60,0.35)] transition-transform hover:scale-[1.03]"
            >
              Kostenlose Beratung
            </Link>
          </nav>

          <button
            aria-label="Menü öffnen"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                className="h-px w-6 bg-current"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                className="h-px w-6 bg-current"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                className="h-px w-6 bg-current"
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-ink/95 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-white/10 text-gold-light"
                        : "text-white/85 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-xl bg-gradient-to-r from-gold-light to-gold px-4 py-3 text-center text-base font-semibold text-ink"
                >
                  Kostenlose Beratung
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
