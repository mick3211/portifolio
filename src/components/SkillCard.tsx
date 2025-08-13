import Image from "next/image";
import React from "react";

interface SkillCardProps {
  name: string;
  image?: string;
  level: string;
  progress?: number;
  color?: string;
  tempo?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  image,
  level,
  name,
  progress,
  tempo,
}) => {
  return (
    <div className="relative flex items-center gap-4 rounded-md border-l-2 border-l-blue-500 bg-zinc-800/30 px-4 py-3 shadow-md md:backdrop-blur-md">
      {image && (
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          unoptimized
          className="aspect-square max-h-16 object-contain"
        />
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold sm:text-2xl">{name}</h3>
        <p className="text-xs">
          {level} {tempo && <> &#x2022; </>} {tempo}
        </p>
        {progress && (
          <div className="mt-2 h-1 bg-zinc-700">
            <div
              className="animate-extend h-[inherit] bg-blue-500"
              style={
                {
                  "--final-width": progress + "%",
                } as React.StyleHTMLAttributes<HTMLDivElement>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
