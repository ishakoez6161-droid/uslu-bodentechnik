import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import AboutPreview from "@/components/sections/about-preview";
import Gallery from "@/components/sections/gallery";
import Process from "@/components/sections/process";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <Gallery />
      <Process />
      <Cta />
    </>
  );
}
