import Image from 'next/image';
import React from 'react';

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
    <div className="relative flex gap-4 bg-zinc-800/30 px-4 py-3 rounded-md shadow-md border-l-2 border-l-blue-500 md:backdrop-blur-md">
      {image && (
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          unoptimized
          className="max-h-16 aspect-square object-contain"
        />
      )}
      <div className="flex-1">
        <h3 className="font-bold text-xl sm:text-2xl">{name}</h3>
        <p className="text-xs">
          {level} {tempo && <> &#x2022; </>} {tempo}
        </p>
        {progress && (
          <div className="h-1 bg-zinc-700 mt-2">
            <div
              className="h-[inherit] bg-blue-500 animate-extend"
              style={
                {
                  '--final-width': progress + '%',
                } as React.StyleHTMLAttributes<HTMLDivElement>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
