"use client";

import { MotionDiv } from "@/components/clientComponents/MotionDiv";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  "experience1",
  "experience2",
  "experience3",
  "experience4",
] as const;

const presenceThreshold = 1 / experiences.length;
const initialPresenceThreshold = presenceThreshold - presenceThreshold / 2;

export const TimeLine: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [experiencesToShow, setExperiencesToShow] = useState(0);
  const { scrollYProgress } = useScroll({
    axis: "y",
    target: targetRef,
    offset: ["start 0.8", "end 0.8"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextThreshold =
      initialPresenceThreshold + presenceThreshold * experiencesToShow;
    const previousThreshold = nextThreshold - presenceThreshold;
    if (latest >= nextThreshold) {
      setExperiencesToShow((prev) => prev + 1);
    } else if (latest < previousThreshold) {
      setExperiencesToShow((prev) => Math.max(prev - 1, 0));
    }
  });

  return (
    <div className="relative">
      <div className="group grid md:grid-cols-2">
        {experiences.map((experience, index) => {
          const rowStart = index + 1;
          const isVisible = experiencesToShow > index;

          return (
            <MotionDiv
              key={index}
              initial={false}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              style={{
                gridRowStart: rowStart,
              }}
              className="flex items-center justify-between py-40 odd:col-start-1 md:col-start-2 md:odd:flex-row-reverse [&:nth-child(even)>div]:-translate-x-1/2"
            >
              <div className="h-20 w-20 -translate-x-1/2 rounded-full bg-red-400 md:translate-x-1/2" />
              {experience}
            </MotionDiv>
          );
        })}
      </div>
      <div className="absolute left-0 top-0 -z-20 h-full w-4 overflow-hidden rounded-full bg-neutral-400 md:left-1/2 md:-translate-x-1/2">
        <MotionDiv
          ref={targetRef}
          style={{
            scaleY: scrollYProgress,
          }}
          className="h-full w-full origin-top bg-blue-500"
        />
      </div>
    </div>
  );
};
