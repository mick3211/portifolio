import { ProjectCard } from '@/components/ProjectCard';
import { SectionTitled } from '@/components/SectionTitled';
import { getGistData } from '@/utils/getGistData';
import Image from 'next/image';
import Gradient from '../../../public/gradient.png';

export default async function Projects() {
    const { projects } = await getGistData();

    return (
        <div className="relative">
            <SectionTitled title="Projetos">
                <h2 className="text-5xl font-semibold">Todos os projetos</h2>
                <ul className="my-16 space-y-8 md:mr-64">
                    {projects.map((project, index) => (
                        <li key={index}>
                            <ProjectCard
                                name={project.name}
                                image={project.image}
                                description={project.description}
                                tags={project.tags}
                                url={project.url}
                            />
                        </li>
                    ))}
                </ul>
            </SectionTitled>
            <span className="absolute -z-50 bottom-48 -left-[600px] scale-125 animate-fadeIn">
                <Image src={Gradient} alt="" aria-hidden />
            </span>
        </div>
    );
}
