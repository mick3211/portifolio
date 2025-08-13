import { About } from "@/partials/index/About";
import { Contact } from "@/partials/index/Contact";
import { Experiences } from "@/partials/index/Experiences";
import { Hero } from "@/partials/index/Hero";
import { Portfolio } from "@/partials/index/Portfolio";
import { TimeLine } from "@/partials/index/Timeline";

export default async function Home() {
  return (
    <main role="main">
      <Hero />
      <About />
      <Portfolio />
      <Experiences />
      <TimeLine />
      <Contact />
    </main>
  );
}
