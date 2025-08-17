"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type SectionAnimatedTextProps = {
  title: string;
};

export const SectionAnimatedText: React.FC<SectionAnimatedTextProps> = ({
  title,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    axis: "y",
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="absolute -right-8 -z-50 hidden h-0 w-0 select-none md:block"
      aria-hidden
      style={{
        opacity: opacity,
        y: scrollOffset,
        rotate: 90,
      }}
    >
      <span
        title={title}
        className="to-zinc-1000 whitespace-nowrap bg-gradient-to-b from-blue-600 bg-clip-text text-[220px] font-bold uppercase text-transparent opacity-40"
      >
        {title}
      </span>
    </motion.div>
  );
};
