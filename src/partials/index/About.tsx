import Image from "next/image";

export const About: React.FC = () => {
  return (
    <section id="about" className="mb-24">
      <div className="flex animate-fadeInUpShort flex-col items-center justify-center gap-8 sm:flex-row">
        <Image
          src="/profile.jpg"
          alt="Foto de perfil"
          width={200}
          height={200}
          className="rounded-full border-4 border-blue-500 max-sm:w-40"
          unoptimized={false}
        />
        <div>
          <p className="mb-2 max-w-[48ch] text-base leading-7 sm:text-justify md:text-lg">
            Sou desenvolvedor front-end com 3 anos de experiência criando
            interfaces modernas e responsivas que realmente funcionam para as
            pessoas. Com domínio de React, Next.js e Flutter, venho
            transformando ideias em produtos digitais leves, acessíveis e
            visualmente atraentes, tanto para web quanto mobile.
          </p>
          <span className="text-sm italic text-neutral-300 underline decoration-blue-500 underline-offset-2">
            Mickael Rodrigues Felizardo
          </span>
        </div>
      </div>
    </section>
  );
};
