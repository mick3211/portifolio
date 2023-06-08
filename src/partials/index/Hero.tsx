import ReactIcon from '../../../public/React-icon.svg';
import NextIcon from '../../../public/Nextjs-logo.svg';
import TailwindIcon from '../../../public/Tailwind_CSS_Logo.svg';
import Lines from '../../../public/lines.svg';
import Gradient from '../../../public/gradient.png';
import Image from 'next/image';
import { AnimatedLines } from '@/components/AnimatedLines';

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
        <section
            id="hero"
            className="mt-24 flex flex-col-reverse items-center gap-12 sm:mt-32 lg:flex-row lg:items-end lg:gap-20 xl:gap-32"
        >
            {/* <Image
                src={Lines}
                className="absolute -top-32 -z-50 w-[564px] select-none opacity-10 sm:-left-50 sm:opacity-20"
                alt=""
            /> */}
            <span className="absolute -top-32 -z-50 w-[564px] select-none opacity-10 sm:-left-50 sm:opacity-20">
                <AnimatedLines />
            </span>
            <Image
                src={Gradient}
                className="absolute -z-50 select-none sm:-top-48 animate-fadeIn"
                alt=""
            />
            <div className="relative mx-auto">
                <Image
                    src={Lines}
                    className="absolute -top-7 -left-4 -z-50 w-1/6 max-w-[86px] select-none sm:-top-10 sm:-left-6"
                    alt=""
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
        </section>
    );
};
