'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';

const easeExpo = cubicBezier(0.22, 1, 0.36, 1);
const easeSmooth = cubicBezier(0.16, 1, 0.3, 1);

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [time, setTime] = useState('');
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            setScrollOpacity(Math.max(0, 1 - currentScroll / 100));
            setIsScrolled(currentScroll > window.innerHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const isVisitPage = pathname === '/visit';
    const useDarkText = isVisitPage || (isScrolled && !isNavOpen);

    return (
        <>
            <motion.nav
                className={`top-bar ${useDarkText ? 'nav-dark-text' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeSmooth }}
            >
                <div className="nav-spacer" />

                <div className="nav-controls">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <Link href={isVisitPage ? '/' : '/visit'}>
                            <span className="lang-active">{isVisitPage ? 'Home' : 'Visit Us'}</span>
                        </Link>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <Link href="/#reservation">
                            <span className="book-btn">book a table</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="hamburger"
                        onClick={toggleNav}
                        animate={isNavOpen ? 'open' : 'closed'}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span
                            variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 5 } }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                        <motion.span
                            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                        <motion.span
                            variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -5 } }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                    </motion.div>
                </div>

                <motion.div style={{ opacity: scrollOpacity }}>
                    LOCAL TIME AT Elysian Table: {time}
                </motion.div>
            </motion.nav>

            <AnimatePresence>
                {isNavOpen && (
                    <motion.div
                        className="nav-overlay open"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: easeExpo }}
                    >
                        <motion.div
                            className="nav-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                        >
                            {/* content unchanged */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
