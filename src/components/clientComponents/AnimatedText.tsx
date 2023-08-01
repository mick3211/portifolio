'use client';

import { motion } from 'framer-motion';

export const AnimatedText = () => {
    return (
        <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        >
            <p>Ou dê uma olhada nos meus projetos :)</p>
            <svg
                width="32"
                height="32"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-pulse mx-auto"
            >
                <path
                    d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                ></path>
            </svg>
        </motion.div>
    );
};
