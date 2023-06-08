import ReactIcon from '../../../public/React-icon.svg';
import NextIcon from '../../../public/Nextjs-logo.svg';
import TailwindIcon from '../../../public/Tailwind_CSS_Logo.svg';
import Lines from '../../../public/lines.svg';
import Gradient from '../../../public/gradient.png';
import Image from 'next/image';
import { AnimatedLines } from '@/components/AnimatedLines';
import { AnimatedText } from '@/components/clientComponents/AnimatedText';

const skillIcons = [
    {
        name: 'React',
        url: ReactIcon,
    },
    {
        name: 'Next.JS',
        url: NextIcon,
    },
    {
        name: 'Tailwind CSS',
        url: TailwindIcon,
    },
];

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="mt-24 mb-24 gap-12 sm:mt-32">
            <div className="absolute -top-32 -z-50 w-full max-w-xl select-none opacity-10 md:left-44 sm:opacity-20 max-sm:hidden">
                <AnimatedLines />
            </div>
            <div className="relative w-full">
                <Image
                    src={Gradient}
                    className="absolute -z-50 select-none animate-fadeIn sm:-top-64"
                    alt=""
                    aria-hidden
                />
            </div>
            <div className="relative w-fit mx-auto">
                <Image
                    src={Lines}
                    className="absolute -top-7 -left-4 -z-50 w-1/6 max-w-[86px] select-none sm:-top-10 sm:-left-6"
                    alt=""
                    aria-hidden
                />
                <h1 className="text-4xl font-semibold sm:text-6xl 2xl:text-7xl">
                    Desenvolvedor <br /> Front End
                </h1>
                <div className="mt-6 flex gap-2">
                    {skillIcons.map(icon => (
                        <span
                            key={icon.name}
                            className="rounded-md bg-zinc-800 px-3 py-2"
                            title={icon.name}
                        >
                            <Image
                                src={icon.url}
                                alt={icon.name}
                                className="max-sm:h-6"
                            />
                        </span>
                    ))}
                </div>
            </div>

            <AnimatedText />
        </section>
    );
};
