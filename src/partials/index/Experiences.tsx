import { SectionTitled } from '@/components/SectionTitled';
import { SkillCard } from '@/components/SkillCard';
import { Button } from '@/components/form/Button/Button';
import { getGistData } from '@/utils/getGistData';
import Link from 'next/link';

export const Experiences: React.FC = async () => {
    const { curriculo } = await getGistData();

    return (
        <SectionTitled title="Skills" id="skills" className="pt-24">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                Conhecimentos
            </h2>
            <ul className="grid lg:grid-cols-2 gap-4 md:mr-64">
                {curriculo.skills.hardSkills.map((skill, index) => (
                    <li key={index} className="grid">
                        <SkillCard
                            name={skill.name}
                            image={skill.image}
                            level={skill.level}
                            color={skill.color}
                        />
                    </li>
                ))}
            </ul>
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-5">
                Outros conhecimentos
            </h2>
            <ul className="md:mr-64 flex flex-wrap gap-2">
                {curriculo.skills.softSkills.map((skill, index) => (
                    <li
                        key={index}
                        className="p-3 bg-zinc-800/30 rounded-md shadow-md"
                    >
                        <span className="sm:text-xl">{skill}</span>
                    </li>
                ))}
            </ul>
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-5">
                Línguas
            </h2>
            <ul className="grid lg:grid-cols-2 gap-4 md:mr-64">
                {curriculo.languages.map((language, index) => (
                    <li key={index}>
                        <SkillCard
                            name={language.language}
                            level={language.level}
                        />
                    </li>
                ))}
            </ul>
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-5">
                Educação
            </h2>
            <ul className="grid lg:grid-cols-2 gap-4 md:mr-64">
                {curriculo.education.map((item, index) => (
                    <li key={index}>
                        <SkillCard
                            key={index}
                            name={item.title}
                            level={item.university}
                            tempo={
                                item.startDate +
                                (item.endDate
                                    ? ` - ${item.endDate}`
                                    : ' - Agora')
                            }
                        />
                    </li>
                ))}
            </ul>
            <Button
                as={Link}
                title="Baixar currículo"
                href="https://docs.google.com/document/d/1oA2qOnHfasYOHSsggIhI6i53FHCDbdwJcjKarZqxrcA/export?format=pdf"
                download="Currículo Mickael"
                target="_blank"
                rel="noreferrer"
                variants={{ style: 'outlined' }}
                className="mt-4"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
                Baixar CV
            </Button>
        </SectionTitled>
    );
};
