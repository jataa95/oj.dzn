import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Problem } from "@/components/Problem";
import { Work } from "@/components/Work";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Compare } from "@/components/Compare";
import { Process } from "@/components/Process";
import { Packages } from "@/components/Packages";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Problem />
        <Work />
        <Marquee />
        <Services />
        <Compare />
        <Process />
        <Packages />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
