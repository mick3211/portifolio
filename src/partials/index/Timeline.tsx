"use client";

import { WorkExperience } from "@/@types/WorkExperience";
import { MotionDiv } from "@/components/clientComponents/MotionDiv";
import { SectionTitled } from "@/components/SectionTitled";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const experiences: WorkExperience[] = [
  {
    companyName: "Tribunal de Contas da União",
    startDate: "06/2024",
    endDate: "06/2025",
    position: "Estagiário de Power BI",
    description:
      "Atuei como estagiário no Tribunal de Contas da União, desenvolvendo dashboards e relatórios em Power BI para análise de dados do órgão.",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_nzsVwo7RpejWfNajuD0rkQ3RuFHu1RP4bEIQzzHCjiFA=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    companyName: "Arcane Companion",
    startDate: "01/2024",
    endDate: "08/2024",
    position: "Desenvolvedor Flutter",
    description:
      "Criei meu primeiro aplicativo mobile, o Arcane Companion, utilizando Flutter e disponibilizei-o na Play Store.",
    imgUrl:
      "https://play-lh.googleusercontent.com/vjpkNCYBDs8sNZocMsjHB1HXabHmeD0gkrkWGpkgNMnSQi5fSYtYgHiFdScj2hSb1VE=w240-h480-rw",
  },
  {
    companyName: "Facedoor",
    startDate: "06/2024",
    endDate: "Atualmente",
    position: "Desenvolvedor Frontend Jr.",
    description:
      "Atualmente sou desenvolvedor frontend na Facedoor, responsável pela implementação de interfaces e melhorias na experiência do usuário.",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQHe58osSdurnA/company-logo_400_400/company-logo_400_400/0/1707071560333?e=2147483647&v=beta&t=MesU2ZdoBCOII7-lw1tXF20AOl35bj3u92XZCU_5-zY",
  },
] as const;

const presenceThreshold = 1 / experiences.length;
const initialPresenceThreshold = presenceThreshold - presenceThreshold / 2;

export const TimeLine: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [experiencesToShow, setExperiencesToShow] = useState(0);
  const { scrollYProgress } = useScroll({
    axis: "y",
    target: targetRef,
    offset: ["start 0.8", "end 0.8"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextThreshold =
      initialPresenceThreshold + presenceThreshold * experiencesToShow;
    const previousThreshold = nextThreshold - presenceThreshold;
    if (latest >= nextThreshold) {
      setExperiencesToShow((prev) => prev + 1);
    } else if (latest < previousThreshold) {
      setExperiencesToShow((prev) => Math.max(prev - 1, 0));
    }
  });

  return (
    <SectionTitled
      title="Experiências profissionais"
      decorationText="history"
      id="timeline"
      className="mt-24"
    >
      <div className="relative max-md:ml-7">
        <div className="group grid max-md:ml-2 md:grid-cols-2">
          {experiences.map((experience, index) => {
            const rowStart = index + 1;
            const isVisible = experiencesToShow > index;

            return (
              <MotionDiv
                key={index}
                initial={false}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
                transition={{ duration: 0.3 }}
                style={{
                  gridRowStart: rowStart,
                }}
                className="flex items-center justify-between py-20 odd:col-start-1 md:col-start-2 md:py-24 md:odd:flex-row-reverse [&:nth-child(even)>span]:-translate-x-1/2"
              >
                <span className="h-14 w-14 shrink-0 -translate-x-1/2 before:absolute before:-top-4 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] before:from-transparent before:from-45% before:to-zinc-900 before:to-45% after:absolute after:-bottom-4 after:left-1/2 after:h-4 after:w-4 after:-translate-x-1/2 after:bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] after:from-transparent after:from-45% after:to-zinc-900 after:to-45% md:h-20 md:w-20 md:translate-x-1/2">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <img
                      alt={experience.companyName}
                      src={experience.imgUrl}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </span>
                <div className="rounded-md bg-zinc-800/40 px-4 py-3 md:backdrop-blur-md">
                  <h3 className="font-semibold md:text-lg">
                    {experience.position}
                  </h3>
                  <p className="text-xs text-gray-500 md:text-sm">
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <p className="mt-2 text-sm md:text-base">
                    {experience.description}
                  </p>
                </div>
              </MotionDiv>
            );
          })}
        </div>
        <div className="absolute left-0 top-0 -z-20 h-full w-4 overflow-hidden rounded-full bg-neutral-400 md:left-1/2 md:-translate-x-1/2">
          <MotionDiv
            ref={targetRef}
            style={{
              scaleY: scrollYProgress,
            }}
            className="h-full w-full origin-top rounded-full bg-blue-500"
          />
        </div>
      </div>
    </SectionTitled>
  );
};
