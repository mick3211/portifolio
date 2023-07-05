import { Contact } from '@/partials/index/Contact';
import { Experiences } from '@/partials/index/Experiences';
import { Hero } from '@/partials/index/Hero';
import { Portfolio } from '@/partials/index/Portfolio';
import { getGistData } from '@/utils/getGistData';

export default async function Home() {
    const { curriculo, projects } = await getGistData();

    return (
        <main>
            <Hero />
            <Portfolio projects={projects} />
            <Experiences curriculo={curriculo} />
            <Contact />
        </main>
    );
}
