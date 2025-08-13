import { SectionAnimatedText } from "./clientComponents/SectionAnimatedText";

interface SectionTitledProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children?: React.ReactNode;
}

export const SectionTitled: React.FC<SectionTitledProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <section {...props}>
      <div className="relative overflow-hidden">
        <h2 className="relative mb-6 w-fit text-xl font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-10/12 after:bg-blue-500">
          {title}
        </h2>
        <SectionAnimatedText title={title} />
        {children}
      </div>
    </section>
  );
};
