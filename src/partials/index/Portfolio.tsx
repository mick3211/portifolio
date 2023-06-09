import { ProjectInterface } from '@/@types/ProjectInterface';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionTitled } from '@/components/SectionTitled';
import Gradient from '../../../public/gradient.png';
import Image from 'next/image';
import Link from 'next/link';

export const Portfolio: React.FC<{ projects: ProjectInterface[] }> = ({
    projects,
}) => {
    return (
        <div className="relative">
            <SectionTitled title="Portifólio" id="Portifolio">
                <ul className="space-y-8 md:mr-64">
                    {projects.slice(0, 5).map((project, index) => (
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

                <Link
                    href="/projetos"
                    className="mt-11 pt-3 pb-2 flex justify-center items-center gap-2 text-xl font-semibold bg-blue-600 rounded-sm md:mr-64 hover:bg-blue-700"
                >
                    Ver todos os projetos
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </Link>
            </SectionTitled>
            <span className="absolute -z-50 -bottom-48 -left-[600px] scale-125 animate-fadeIn">
                <Image src={Gradient} alt="" aria-hidden />
            </span>
        </div>
    );
};
