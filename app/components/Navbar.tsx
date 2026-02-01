'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [time, setTime] = useState('');
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Handle local time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Handle scroll state
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            const newOpacity = Math.max(0, 1 - currentScroll / 100);
            setScrollOpacity(newOpacity);

            // On Home page, Hero is 100vh. We wait until we pass it to switch text color.
            // On Visit page, this logic is overridden by isVisitPage check anyway.
            const heroHeight = window.innerHeight;
            setIsScrolled(currentScroll > (heroHeight - 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const isVisitPage = pathname === '/visit';

    // Determine if we should use dark text
    // 1. If on Visit page: background is light, so use dark text always (unless we had a dark hero, but we have a spacer)
    // 2. If on Home page: use dark text when scrolled past hero (approx > 100px or when it hits content)
    //    Actually, Home hero is tall. Let's say if scrolled > Windows height - nav height? 
    //    For simplicity requested by user "when light bg is there", let's assume content starts after fold.
    //    But user just wants visibility. 
    //    Let's use a simpler heuristic: Dark text if (VisitPage) OR (Home and Scrolled).
    const useDarkText = isVisitPage || (isScrolled && !isNavOpen);

    return (
        <>
            <motion.nav
                className={`top-bar ${useDarkText ? 'nav-dark-text' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
                <div className="nav-spacer"></div>

                <div className="nav-controls">
                    <motion.div
                        className="lang-switch"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href={isVisitPage ? "/" : "/visit"}>
                            <span className="lang-active">{isVisitPage ? "Home" : "Visit Us"}</span>
                        </Link>
                    </motion.div>

                    {/* Book button could also be a link or modal trigger */}
                    <motion.div
                        className="book-btn-wrapper"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/#reservation"
                            onClick={(e) => {
                                if (!isVisitPage) {
                                    e.preventDefault();
                                    const element = document.getElementById('reservation');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }
                            }}
                        >
                            <span className="book-btn">book a table</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="hamburger"
                        onClick={toggleNav}
                        initial="closed"
                        animate={isNavOpen ? "open" : "closed"}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span
                            style={{ width: '100%', transformOrigin: "center" }}
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 5 }
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <motion.span
                            style={{ width: '100%' }}
                            variants={{
                                closed: { opacity: 1, x: 0 },
                                open: { opacity: 0, x: 20 }
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <motion.span
                            style={{ width: '100%', transformOrigin: "center" }}
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -5 }
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </motion.div>
                </div>

                <motion.div
                    className="nav-time-display"
                    style={{ opacity: scrollOpacity }}
                >
                    LOCAL TIME AT Elysian Table: {time}
                </motion.div>
            </motion.nav>

            {/* Navigation Overlay */}
            <AnimatePresence>
                {isNavOpen && (
                    <motion.div
                        className="nav-overlay open"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
                        }}
                    >
                        <motion.div
                            className="nav-content"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        delayChildren: 0.3,
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                        >
                            <div className="nav-columns">
                                {/* Left Column: Navigation Links */}
                                <div className="nav-left-col">
                                    <motion.div
                                        className="nav-section-title"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
                                        }}
                                    >
                                        NAVIGATION
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
                                        }}
                                    >
                                        <Link href="/" onClick={toggleNav}>
                                            <span className="nav-link-large">
                                                Elysian
                                            </span>
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
                                        }}
                                    >
                                        <Link href="/visit" onClick={toggleNav}>
                                            <span className="nav-link-large">
                                                Table
                                            </span>
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
                                        }}
                                    >
                                        <Link href="/#menu" onClick={toggleNav}>
                                            <span className="">
                                                Since 2000
                                            </span>
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Right Column: Contact & Hours */}
                                <div className="nav-right-col">
                                    <motion.div
                                        className="nav-section-title"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
                                        }}
                                    >
                                        CONTACT & HOURS
                                    </motion.div>

                                    {['Address', 'Phone', 'Email', 'Hours'].map((item) => (
                                        <motion.div
                                            key={item}
                                            className="contact-group"
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
                                            }}
                                        >
                                            <div className="contact-info">
                                                <p style={{ fontWeight: 500 }}>{item}</p>
                                                <p>
                                                    {item === 'Address' && 'Largo de São Domingos 62'}
                                                    {item === 'Phone' && '(+351) 229 760 002'}
                                                    {item === 'Email' && 'drink@ElysianTable.com'}
                                                    {item === 'Hours' && 'open daily 10:00 to 00:00'}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
