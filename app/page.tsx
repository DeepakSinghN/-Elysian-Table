'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import ChefVision from './components/ChefVision';
import FamilyHospitality from './components/FamilyHospitality';
import PhilosophySection from './components/PhilosophySection';
import Features from './components/Features';
import MenuHighlights from './components/MenuHighlights';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';


export default function Home() {
  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const logoY = useTransform(scrollY, [0, 500], [0, 100]);

  // Smooth out scroll values
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Tilt effect for hero image
  const heroRotateX = useTransform(smoothScrollY, [0, 600], [0, 15]);
  const heroScale = useTransform(smoothScrollY, [0, 600], [1, 0.85]); // Zoom out effect

  return (
    <main className="main-wrapper">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="hero-wrapper"
        style={{ perspective: '1000px' }} // Add perspective for 3D tilt
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          scale: 1
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Blurred Background Image */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden',
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/hero-bg.png"
            alt="Background"
            fill
            style={{
              objectFit: 'cover',
              filter: 'blur(30px)',
              transform: 'scale(1.1)',
              opacity: 0.7
            }}
            quality={50}
            priority
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,0.1)'
          }}></div>
        </motion.div>

        <motion.div
          className="hero-central-image"
          style={{
            zIndex: 1,
            position: 'relative',
            rotateX: heroRotateX, // Apply tilt
            scale: heroScale // Apply subtle scale
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#332' }}>
            <div className="hero-image-overlay"></div>
            <Image
              src="/images/hero-bg.png"
              alt="Flor Drink"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="logo-centering-container">
              <motion.div
                className="logo-image-overlay"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                style={{
                  scale: logoScale,
                  opacity: logoOpacity,
                  y: logoY
                }}
              >
                <Image
                  src="/elysian-logo-new.png"
                  alt="Elysian Table"
                  width={800}
                  height={300}
                  priority
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '800px',
                    objectFit: 'contain'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <RevealOnScroll className="hero-bottom-text" delay={0.1}>
          Breakfast &nbsp;•&nbsp; Lunch &nbsp;•&nbsp; Dinner
        </RevealOnScroll>
      </motion.section>

      {/* New Content Sections */}
      <ChefVision />
      <FamilyHospitality />
      <Features />
      <PhilosophySection />
      <MenuHighlights />
      <Reservation />
      <Testimonials />
      <Footer />
    </main>
  );
}
