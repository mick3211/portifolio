import { CurriculoInterface } from '@/@types/CurriculoInterface';
import { ProjectInterface } from '@/@types/ProjectInterface';
import { Experiences } from '@/partials/index/Experiences';
import { Hero } from '@/partials/index/Hero';
import { Portfolio } from '@/partials/index/Portfolio';

interface PageData {
    projects: ProjectInterface[];
    curriculo: CurriculoInterface;
}

async function getData(): Promise<PageData> {
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
    const projects = JSON.parse(projectsData);
    const curriculo = JSON.parse(skillsData);

    return {
        projects,
        curriculo,
    };
}

export default async function Home() {
    const { curriculo, projects } = await getData();

    return (
        <main>
            <Hero />
            <Portfolio projects={projects} />
            <Experiences curriculo={curriculo} />
        </main>
    );
}
