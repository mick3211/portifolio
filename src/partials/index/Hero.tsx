import ReactIcon from "../../../public/React-icon.svg";
import TailwindIcon from "../../../public/Tailwind_CSS_Logo.svg";
import FLutterIcon from "../../../public/flutter.svg";
import Lines from "../../../public/lines.svg";
import Gradient from "../../../public/gradient.png";
import Image from "next/image";
import { AnimatedLines } from "@/components/AnimatedLines";
import { Button } from "@/components/form/Button/Button";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const skillIcons = [
  {
    name: "React",
    url: ReactIcon,
  },
  {
    name: "Tailwind CSS",
    url: TailwindIcon,
  },
  {
    name: "Flutter",
    url: FLutterIcon,
  },
];

export const Hero: React.FC = async () => {
  const t = await getTranslations();

  return (
    <section id="hero" className="mb-24 mt-24 gap-12 sm:mt-32">
      <div className="absolute -top-32 -z-50 w-full max-w-xl select-none opacity-10 max-sm:hidden sm:opacity-20 md:left-44">
        <AnimatedLines />
      </div>
      <div className="relative w-full">
        <Image
          src={Gradient}
          className="absolute -z-50 animate-fadeIn select-none sm:-top-64"
          alt=""
          aria-hidden
        />
      </div>
      <div className="relative mx-auto max-w-md">
        <Image
          src={Lines}
          className="absolute -left-4 -top-7 -z-50 w-1/6 max-w-[86px] select-none sm:-left-6 sm:-top-10"
          alt=""
          aria-hidden
        />
        <h1 className="text-4xl font-semibold sm:text-6xl 2xl:text-7xl">
          {t("main.hero.title.1")} <br /> {t("main.hero.title.2")}
        </h1>
        <div className="mt-6 flex gap-2">
          {skillIcons.map((icon) => (
            <span
              key={icon.name}
              className="rounded-md bg-zinc-800 px-3 py-2"
              title={icon.name}
            >
              <Image
                src={icon.url}
                alt={icon.name}
                width={32}
                height={32}
                unoptimized
                className="aspect-square object-contain max-sm:h-6"
              />
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-col-reverse gap-2 sm:flex-row">
          <Button
            as={Link}
            href="#Portifolio"
            variants={{ size: "large", style: "outlined" }}
            className="flex-1"
          >
            {t("common.projects")}
          </Button>
          <Button
            as={Link}
            href="#contato"
            variants={{ size: "large" }}
            className="flex-1"
          >
            {t("common.contactMe")}
          </Button>
        </div>
      </div>
    </section>
  );
};
