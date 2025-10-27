import { About } from "@/partials/index/About";
import { Contact } from "@/partials/index/Contact";
import { Experiences } from "@/partials/index/Experiences";
import { Hero } from "@/partials/index/Hero";
import { Portfolio } from "@/partials/index/Portfolio";
import { TimeLine } from "@/partials/index/Timeline";
import { getGistData } from "@/utils/getGistData";
import { setRequestLocale } from "next-intl/server";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { pastJobs, curriculo, projects } = await getGistData();
  const locale = (await params).locale;
  setRequestLocale(locale);

  return (
    <main role="main">
      <Hero />
      <About />
      <Portfolio projects={projects} />
      <Experiences curriculo={curriculo} />
      <TimeLine pastJobs={pastJobs} />
      <Contact />
    </main>
  );
}
