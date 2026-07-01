import Image from "next/image";
import { Reveal } from "@/components/motion-primitives";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-ink pt-32 pb-16 sm:min-h-[58vh]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-light/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
