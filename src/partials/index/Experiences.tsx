import type { CurriculoInterface } from "@/@types/CurriculoInterface";
import { SectionTitled } from "@/components/SectionTitled";
import { SkillCard } from "@/components/SkillCard";
import { Button } from "@/components/form/Button/Button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

type ExperiencesProps = {
  curriculo: CurriculoInterface;
};

export const Experiences: React.FC<ExperiencesProps> = async ({
  curriculo,
}) => {
  const t = await getTranslations("main.experiences");

  return (
    <SectionTitled title="Skills" id="skills" className="pt-24">
      <h3 className="mb-5 text-lg font-bold">{t("knowledge")}</h3>
      <ul className="grid gap-4 md:mr-64 lg:grid-cols-2">
        {curriculo.skills.hardSkills.map((skill, index) => (
          <li key={index}>
            <SkillCard
              name={skill.name}
              image={skill.image}
              color={skill.color}
            />
          </li>
        ))}
      </ul>
      <h3 className="mb-5 mt-8 text-lg font-bold">{t("otherKnowledge")}</h3>
      <ul className="flex flex-wrap gap-2 md:mr-64">
        {curriculo.skills.softSkills.map((skill, index) => (
          <li key={index} className="rounded-md bg-zinc-800/30 p-3 shadow-md">
            <span>{skill}</span>
          </li>
        ))}
      </ul>
      <h3 className="mb-5 mt-8 text-lg font-bold">{t("languages")}</h3>
      <ul className="grid gap-4 md:mr-64 lg:grid-cols-2">
        {curriculo.languages.map((language, index) => (
          <li key={index}>
            <SkillCard name={language.language} level={language.level} />
          </li>
        ))}
      </ul>
      <h3 className="mb-5 mt-8 text-lg font-bold">{t("education")}</h3>
      <ul className="grid gap-4 md:mr-64 lg:grid-cols-2">
        {curriculo.education.map((item, index) => (
          <li key={index}>
            <SkillCard
              key={index}
              name={item.title}
              level={item.university}
              tempo={
                item.startDate +
                (item.endDate ? ` - ${item.endDate}` : ` - ${t("now")}`)
              }
            />
          </li>
        ))}
      </ul>
      <Button
        as={Link}
        title={t("downloadResume")}
        href="https://docs.google.com/document/d/1oA2qOnHfasYOHSsggIhI6i53FHCDbdwJcjKarZqxrcA/export?format=pdf"
        download="Currículo Mickael"
        target="_blank"
        rel="noreferrer"
        variants={{ style: "outlined" }}
        className="mt-4"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        {t("downloadResume")}
      </Button>
    </SectionTitled>
  );
};
