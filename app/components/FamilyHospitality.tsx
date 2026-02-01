'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';

const FamilyHospitality = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Vertical (0) -> Tilted (-6/6) -> Vertical (0)
    const rotateLeft = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, -6, 0]);
    const rotateRight = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 6, 0]);

    // Optional: Subtle parallax or scale to enhance the effect
    const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1, 0.95]);

    return (
        <section ref={containerRef} className="section-padding" style={{ backgroundColor: 'var(--color-paper-light)' }}>
            <div className="container">
                <div className="flex-center" style={{ flexDirection: 'column', textAlign: 'center' }}>

                    {/* Top Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: 'var(--color-green-deep)', /* Deep Green from image */
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '3rem',
                            color: 'var(--color-primary)'
                        }}
                    >
                        {/* Family Icon */}
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                    </motion.div>

                    {/* Heading */}
                    <RevealOnScroll delay={0.2}>
                        <h2
                            className="section-heading"
                            style={{
                                fontFamily: 'var(--font-heading), serif',
                                color: 'var(--color-green-deep)',
                                textTransform: 'none',
                                fontSize: '3.5rem',
                                marginBottom: '2rem'
                            }}
                        >
                            The welcome is family-like
                        </h2>
                    </RevealOnScroll>

                    {/* Description */}
                    <RevealOnScroll delay={0.4}>
                        <p
                            className="body-text"
                            style={{
                                maxWidth: '700px',
                                margin: '0 auto 4rem auto',
                                color: 'var(--color-green-deep)',
                                fontSize: '1.2rem',
                                lineHeight: '1.6'
                            }}
                        >
                            There is a hospitality that cannot be improvised: the one that is born in the family, grows with care, and is recognized in gestures.
                        </p>
                    </RevealOnScroll>

                    {/* Button */}
                    <RevealOnScroll delay={0.6}>
                        <motion.button
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--color-green-deep)',
                                borderRadius: '50px',
                                padding: '1rem 2.5rem',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--color-green-deep)',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-body)',
                                fontWeight: 500,
                                marginBottom: '4rem'
                            }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(5, 46, 35, 0.05)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            THE ELYSIAN FAMILY
                        </motion.button>
                    </RevealOnScroll>

                    {/* Images Section */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        width: '100%',
                        perspective: '1000px', // Add perspective for better 3D feel
                        marginBottom: '2rem' // Add space for the absolute positioned text
                    }}>
                        {/* Left Image - Tilted Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} // Entrance only
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            style={{
                                position: 'relative',
                                width: '350px',
                                height: '450px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                zIndex: 1,
                                rotate: rotateLeft,
                                scale: scale
                            }}
                        >
                            <Image
                                src="/images/Women dinnig.jpeg"
                                alt="Family dining together"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </motion.div>

                        {/* Right Image Wrapper */}
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            {/* Right Image - Tilted Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }} // Entrance only
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                                style={{
                                    position: 'relative',
                                    width: '380px',
                                    height: '500px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    marginTop: '-2rem',
                                    rotate: rotateRight,
                                    scale: scale
                                }}
                            >
                                <Image
                                    src="/images/Man standing.jpeg"
                                    alt="Man smiling"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </motion.div>

                            {/* Handwritten Text Image */}
                            <motion.div
                                initial={{ opacity: 0, x: "calc(-50% + 30px)" }}
                                whileInView={{ opacity: 1, x: "-50%" }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                style={{
                                    position: 'absolute',
                                    bottom: '-110px',
                                    left: '50%',
                                    // x is handled by motion props for animation
                                    width: '300px',
                                    height: '120px',
                                    zIndex: 3,
                                    rotate: rotateRight
                                }}
                            >
                                <Image
                                    src="/images/Handwritten.png"
                                    alt="Whoever knows us always comes back"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FamilyHospitality;
