import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  tags: string[];
  url?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  image,
  name,
  tags,
  url,
}) => {
  return (
    <div className="flex flex-col gap-8 rounded-md bg-zinc-800/30 px-6 py-4 shadow shadow-white/5 md:backdrop-blur-md max-xl:items-center">
      <Link
        href={url || '/'}
        target="_blank"
        rel="noreferrer"
        className="aspect-video w-full relative group"
      >
        <span className="flex items-center justify-center gap-2 absolute inset-0 z-10 bg-black/70 opacity-0 text-2xl group-hover:opacity-100">
          Visualizar{' '}
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Nova guia"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <Image src={image} alt={name} className="w-full object-cover" fill />
      </Link>
      <div className="text-center lg:text-left">
        <h3 className="mb-4 text-2xl font-semibold lg:mb-2 xl:text-3xl">
          {name}
        </h3>
        <p
          className="text-neutral-300 text-lg xl:text-xl highlight-link"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {tags.length > 0 && (
          <ul
            className="mt-6 flex flex-wrap justify-center gap-2 lg:mt-4 lg:justify-start"
            aria-label="Tags"
          >
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-sm bg-blue-500/50 px-2 py-1 text-sm xl:text-base"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
