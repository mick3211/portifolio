'use client';

import { motion } from 'framer-motion';
import { ComponentPropsWithRef } from 'react';

interface Props extends ComponentPropsWithRef<typeof motion.div> {}

export const MotionDiv: React.FC<Props> = props => {
    return <motion.div {...props} />;
};
