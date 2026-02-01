'use client';

import { motion, useInView, cubicBezier, Transition } from 'framer-motion';
import { useRef } from 'react';

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
}

const RevealOnScroll = ({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    yOffset = 30,
}: RevealOnScrollProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-10% 0px -10% 0px",
    });

    const transition: Transition = {
        duration,
        delay,
        ease: cubicBezier(0.21, 0.47, 0.32, 0.98),
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: yOffset }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
            transition={transition}
        >
            {children}
        </motion.div>
    );
};

export default RevealOnScroll;
