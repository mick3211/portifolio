import { Contact } from '@/partials/index/Contact';
import { Experiences } from '@/partials/index/Experiences';
import { Hero } from '@/partials/index/Hero';
import { Portfolio } from '@/partials/index/Portfolio';

export default async function Home() {
  return (
    <main role="main">
      <Hero />
      <Portfolio />
      <Experiences />
      <Contact />
    </main>
  );
}
