import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Pieces } from "@/components/Pieces";
import { Beyond } from "@/components/Beyond";
import { Showcase } from "@/components/Showcase";
import { Process } from "@/components/Process";
import { Founder } from "@/components/Founder";
import { Reels } from "@/components/Reels";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Pieces />
        <Beyond />
        <Showcase />
        <Process />
        <Founder />
        <Reels />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
