import type { CurriculoInterface } from "@/@types/CurriculoInterface";
import type { ProjectInterface } from "@/@types/ProjectInterface";
import { WorkExperience } from "@/@types/WorkExperience";

interface Data {
  projects: ProjectInterface[];
  curriculo: CurriculoInterface;
  pastJobs: WorkExperience[];
}
type InternationalizedGistFile<Locale extends string, Data> = Record<
  Locale,
  Data
>;

export async function getGistData<Locale extends string>(
  locale: Locale,
): Promise<Data> {
  const baseURL = "https://api.github.com";

  const portifolioGistURL = new URL(
    "/gists/93505c62889886fc136e5c028de5bc15",
    baseURL,
  );

  const data = await fetch(portifolioGistURL, {
    headers: {
      accept: "application/vnd.github+json",
      authorization: "bearer " + process.env.GITHUB_API_TOKEN,
    },
  }).then((resp) => resp.json());

  const projectsData = data.files["projects.json"].content;
  const skillsData = data.files["skills.json"].content;
  const pastJobsData = data.files["pastJobs.json"].content;
  const projects = JSON.parse(projectsData) as InternationalizedGistFile<
    Locale,
    ProjectInterface[]
  >;
  const curriculo = JSON.parse(skillsData) as InternationalizedGistFile<
    Locale,
    CurriculoInterface
  >;
  const pastJobs = JSON.parse(pastJobsData) as InternationalizedGistFile<
    Locale,
    WorkExperience[]
  >;

  return {
    projects: projects[locale],
    curriculo: curriculo[locale],
    pastJobs: pastJobs[locale],
  };
}
