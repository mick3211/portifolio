import type { WorkExperience } from "@/@types/WorkExperience";
import { SectionTitled } from "@/components/SectionTitled";
import { getTranslations, type TranslationProps } from "@/i18n";
import { TimelineContent } from "./content";

type TimeLineProps = {
  pastJobs: WorkExperience[];
} & TranslationProps;

export const TimeLine: React.FC<TimeLineProps> = async ({
  pastJobs,
  locale,
}) => {
  const t = await getTranslations(locale);

  return (
    <SectionTitled
      title={t.main.timeline.title}
      decorationText="history"
      id="timeline"
      className="mt-24"
    >
      <TimelineContent pastJobs={pastJobs} />
    </SectionTitled>
  );
};
