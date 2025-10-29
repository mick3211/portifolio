import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitled } from "@/components/SectionTitled";
import { getGistData } from "@/utils/getGistData";
import Image from "next/image";
import Gradient from "../../../../public/gradient.png";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Projetos",
};

export const revalidate = 86400; // 1 day

export default async function Projects({
  params,
}: PageProps<"/[locale]/projetos">) {
  const locale = (await params).locale;
  const { projects } = await getGistData(locale);
  setRequestLocale(locale);
  const t = await getTranslations("common");

  return (
    <main className="relative pb-12" role="main">
      <SectionTitled title={t("allProjects")} decorationText={t("projects")}>
        <ul className="grid items-stretch gap-8 md:mr-64 lg:grid-cols-2 xl:grid-cols-3">
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
      <span className="absolute -left-[600px] bottom-48 -z-50 animate-fadeIn md:scale-125">
        <Image src={Gradient} alt="" aria-hidden />
      </span>
    </main>
  );
}
