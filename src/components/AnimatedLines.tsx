"use client";

import Image from "next/image";
import Rectangle1 from "../../public/Rectangle 2.svg";
import Rectangle2 from "../../public/Rectangle 4.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const translateValue = 100;
const duration = 0.3;
const MotionImage = motion.create(Image);

export const AnimatedLines: React.FC = () => {
  const [done1, setDone1] = useState(false);
  const [done2, setDone2] = useState(false);
  const [done3, setDone3] = useState(false);
  const { scrollYProgress } = useScroll({
    offset: ["0", "600px"],
  });

  const opacity = useTransform(scrollYProgress, (value) => 1 - value);

  const img1X = useTransform(
    scrollYProgress,
    (value) => value * translateValue,
  );

  const img1Y = useTransform(img1X, (value) => -value);

  const img2X = useTransform(scrollYProgress, [0, 1], [translateValue, 0]);

  const img2Y = useTransform(
    scrollYProgress,
    (value) => 232 + translateValue * value,
  );

  const img3Y = useTransform(
    scrollYProgress,
    (value) => 320 - translateValue * value,
  );

  return (
    <div className="relative w-full max-w-xl print:hidden" aria-hidden>
      <MotionImage
        src={Rectangle2}
        alt=""
        initial={{ x: translateValue, y: -translateValue, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        className="absolute"
        transition={{ duration: duration }}
        style={
          done1
            ? {
                opacity: opacity as any,
                x: img1X,
                y: img1Y,
              }
            : {}
        }
        onAnimationComplete={() => setDone1(true)}
      />
      <MotionImage
        src={Rectangle1}
        alt=""
        className="absolute"
        initial={{
          y: 232 + translateValue,
          opacity: 0,
        }}
        animate={{ x: translateValue, y: 232, opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: duration,
        }}
        style={
          done2
            ? {
                opacity: opacity as any,
                x: img2X,
                y: img2Y,
              }
            : {}
        }
        onAnimationComplete={() => setDone2(true)}
      />
      <MotionImage
        src={Rectangle2}
        alt=""
        initial={{
          x: translateValue,
          y: 320 - translateValue,
          opacity: 0,
        }}
        animate={{ x: 0, y: 320, opacity: 1 }}
        className="absolute"
        transition={{
          delay: 0.2,
          duration: duration,
        }}
        style={
          done3
            ? {
                opacity: opacity as any,
                x: img1X,
                y: img3Y,
              }
            : {}
        }
        onAnimationComplete={() => setDone3(true)}
      />
    </div>
  );
};
