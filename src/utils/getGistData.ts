import type { CurriculoInterface } from '@/@types/CurriculoInterface';
import type { ProjectInterface } from '@/@types/ProjectInterface';

interface Data {
    projects: ProjectInterface[];
    curriculo: CurriculoInterface;
}

export async function getGistData(): Promise<Data> {
    const baseURL = 'https://api.github.com';

    const portifolioGistURL = new URL(
        '/gists/93505c62889886fc136e5c028de5bc15',
        baseURL
    );

    const data = await fetch(portifolioGistURL, {
        headers: {
            accept: 'application/vnd.github+json',
            authorization: 'bearer ' + process.env.GITHUB_API_TOKEN,
        },
        next: {
            revalidate: 3600,
        },
    }).then(resp => resp.json());

    const projectsData = data.files['projects.json'].content;
    const skillsData = data.files['skills.json'].content;
    const projects = JSON.parse(projectsData) as ProjectInterface[];
    const curriculo = JSON.parse(skillsData) as CurriculoInterface;

    return {
        projects,
        curriculo,
    };
}
