'use client';

import Image from 'next/image';
import Rectangle1 from '../../public/Rectangle 2.svg';
import Rectangle2 from '../../public/Rectangle 4.svg';
import { motion } from 'framer-motion';

const translateValue = 100;
const MotionImage = motion(Image);

export const AnimatedLines: React.FC = () => {
    return (
        <div className="relative w-full max-w-xl">
            <MotionImage
                src={Rectangle2}
                alt=""
                initial={{ x: translateValue, y: -translateValue, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                className="absolute"
                transition={{ bounce: false, duration: 1, ease: 'easeOut' }}
            />
            <MotionImage
                src={Rectangle1}
                alt=""
                className="absolute"
                initial={{
                    left: `calc(50% - ${translateValue}px)`,
                    y: 232 + translateValue,
                    opacity: 0,
                }}
                animate={{ left: '50%', y: 232, opacity: 1 }}
                transition={{
                    delay: 0.1,
                    bounce: false,
                    duration: 1,
                    ease: 'easeOut',
                }}
                style={{ x: '-50%' }}
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
                    bounce: false,
                    duration: 1,
                    ease: 'easeOut',
                }}
            />
        </div>
    );
};
