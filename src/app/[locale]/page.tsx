import { Locale } from "@/i18n";
import { About } from "@/partials/index/About";
// import { Contact } from "@/partials/index/Contact";
import { Experiences } from "@/partials/index/Experiences";
import { Hero } from "@/partials/index/Hero";
import { Portfolio } from "@/partials/index/Portfolio";
import { TimeLine } from "@/partials/index/timeline/Timeline";
import { getGistData } from "@/utils/getGistData";

export const revalidate = 86400; // 1 day

export default async function Home({ params }: PageProps<"/[locale]">) {
  const locale = (await params).locale as Locale;
  const { pastJobs, curriculo, projects } = await getGistData(locale);

  return (
    <main role="main">
      <Hero locale={locale} />
      <About locale={locale} />
      <Portfolio locale={locale} projects={projects} />
      <Experiences locale={locale} curriculo={curriculo} />
      <TimeLine locale={locale} pastJobs={pastJobs} />
      {/* <Contact /> */}
    </main>
  );
}
