import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitled } from "@/components/SectionTitled";
import Gradient from "../../../public/gradient.png";
import Image from "next/image";
import Link from "next/link";
import { getGistData } from "@/utils/getGistData";
import { MotionDiv } from "@/components/clientComponents/MotionDiv";
import { Button } from "@/components/form/Button/Button";

export const Portfolio: React.FC = async () => {
  const { projects } = await getGistData();

  return (
    <div className="relative">
      <SectionTitled title="Projetos" decorationText="Projects" id="Portifolio">
        <ul className="grid items-stretch gap-8 md:mr-64 lg:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <li key={project.name}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index > 1 ? 0 : 0.4,
                  duration: 1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  tags={project.tags}
                  url={project.url}
                />
              </MotionDiv>
            </li>
          ))}
        </ul>

        <Button
          as={Link}
          href="/projetos"
          variants={{ style: "outlined" }}
          className="mt-8 max-md:w-full md:mr-64"
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
        </Button>
      </SectionTitled>
      <span className="absolute -bottom-48 -left-[600px] -z-50 md:scale-125">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src={Gradient} alt="" aria-hidden />
        </MotionDiv>
      </span>
    </div>
  );
};
