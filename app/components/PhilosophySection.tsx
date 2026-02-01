'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const PhilosophySection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Content Zoom In (Scale Up: 0.9 -> 1.1)
    const contentScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

    // Background Image Zoom Out (Scale Down: 1.4 -> 1.0)
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1.0]);

    return (
        <section ref={containerRef} className="relative h-screen bg-[#2F4F3E] overflow-hidden">
            <div className="h-full w-full flex flex-col justify-between px-6 py-12 text-white">

                {/* Background Image Layer - Zoom Out */}
                <motion.div style={{ scale: imageScale }} className="absolute inset-0 z-0">
                    <Image
                        src="/images/PhilosophySectionImages/1.png"
                        alt="Philosophy Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
                </motion.div>

                {/* Content Layer - Zoom In */}
                <motion.div
                    style={{ scale: contentScale }}
                    className="container mx-auto flex-grow flex flex-col justify-between relative z-10 origin-center"
                >
                    {/* Top Text */}
                    <div className="text-[clamp(2rem,4vw,4rem)] font-bold leading-none tracking-tighter uppercase font-helvetica text-white drop-shadow-lg">
                        SO WE BUILT
                    </div>

                    {/* Middle Highlighted Text */}
                    <div className="text-[clamp(5rem,14vw,16rem)] font-black leading-[1] md:leading-[0.8] tracking-tighter uppercase font-helvetica text-[#ebcfb2] drop-shadow-xl">
                        A Elysian<br />JOURNEY
                    </div>

                    {/* Bottom Right Text */}
                    <div className="self-end text-right text-[clamp(2rem,4vw,4rem)] font-bold italic leading-none tracking-tighter uppercase font-helvetica text-white drop-shadow-lg">
                        AS IT SHOULD BE
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PhilosophySection;
