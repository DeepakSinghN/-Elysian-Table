'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import Image from 'next/image';

import scallopImg from '@/images/Smoked Scallop Crudo.png';
import wagyuImg from '@/images/Heritage Wagyu Ribeye.png';
import risottoImg from '@/images/Saffron Risotto.png';
import tartImg from '@/images/Midnight Chocolate Tart.jpeg';
import burrataImg from '@/images/Burrata & Figs.jpeg';
import seaBassImg from '@/images/Pan-Seared Sea Bass.jpeg';
import alchemistImg from '@/images/The Alchemist.jpeg';
import yuzuImg from '@/images/Yuzu Meringue Cloud.jpeg';

const dishes = [
    {
        category: "STARTER",
        name: "Smoked Scallop Crudo",
        desc: "Yuzu kosho, pickled radish, herb oil, puffed grains.",
        price: "24",
        image: scallopImg
    },
    {
        category: "MAIN COURSE",
        name: "Heritage Wagyu Ribeye",
        desc: "Truffle potato pavé, charred broccolini, bone marrow jus.",
        price: "85",
        image: wagyuImg
    },
    {
        category: "MAIN COURSE",
        name: "Saffron Risotto",
        desc: "Acquerello rice, roasted bone marrow, gremolata, gold leaf.",
        price: "32",
        image: risottoImg
    },
    {
        category: "DESSERT",
        name: "Midnight Chocolate Tart",
        desc: "Dark valrhona ganache, sea salt, hazelnut praline, gold dust.",
        price: "18",
        image: tartImg
    },
    {
        category: "STARTER",
        name: "Burrata & Figs",
        desc: "Aged balsamic, toasted pine nuts, basil oil, sourdough crisp.",
        price: "22",
        image: burrataImg
    },
    {
        category: "MAIN COURSE",
        name: "Pan-Seared Sea Bass",
        desc: "Cauliflower purée, caper buerre blanc, rainbow chard.",
        price: "42",
        image: seaBassImg
    },
    {
        category: "COCKTAIL",
        name: "The Alchemist",
        desc: "Gin, elderflower, butterfly pea tea, citrus smoke.",
        price: "18",
        image: alchemistImg
    },
    {
        category: "DESSERT",
        name: "Yuzu Meringue Cloud",
        desc: "Lemon curd, burnt meringue, matcha textures.",
        price: "16",
        image: yuzuImg
    }
];

// Duplicate for "infinite" scroll feel (3 sets: Left Clones, Main, Right Clones)
const infiniteDishes = [...dishes, ...dishes, ...dishes];

const MenuHighlights = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isResetting, setIsResetting] = useState(false);

    // Initial Scroll to Center (Main Set)
    useEffect(() => {
        const initializeScroll = () => {
            if (carouselRef.current) {
                const container = carouselRef.current;
                const cards = Array.from(container.querySelectorAll('.split-card')) as HTMLElement[];
                const N = dishes.length;

                if (cards.length >= 2 * N) {
                    // Set 2 (Main) starts at index N
                    const mainSetStart = cards[N].offsetLeft;

                    // We only set this once initially or if significantly off?
                    // Usually just set it to main set on mount.
                    // Checking if scrollLeft is near 0 checks if it's "fresh" or "reset"
                    if (container.scrollLeft === 0) {
                        container.scrollLeft = mainSetStart;
                    }
                }
            }
        };

        initializeScroll();
        // Also run on resize to keep it centered-ish or rely on logic
        window.addEventListener('resize', initializeScroll);
        return () => window.removeEventListener('resize', initializeScroll);
    }, []);

    const handleScroll = () => {
        if (!carouselRef.current || isResetting) return;

        const container = carouselRef.current;
        const cards = Array.from(container.querySelectorAll('.split-card')) as HTMLElement[];
        const N = dishes.length;

        if (cards.length < 3 * N) return;

        // Calculate precision points
        const mainSetStart = cards[N].offsetLeft;
        const rightSetStart = cards[2 * N].offsetLeft;
        const period = rightSetStart - mainSetStart;

        const { scrollLeft } = container;

        // If scrolled past the right clones (into Set 3), jump back to Set 2
        if (scrollLeft >= rightSetStart) {
            setIsResetting(true);
            container.style.scrollSnapType = 'none';
            container.scrollLeft = scrollLeft - period;
            requestAnimationFrame(() => {
                container.style.scrollSnapType = 'x mandatory';
                setIsResetting(false);
            });
        }
        // If scrolled past the left clones (near start), jump forward to Set 2
        else if (scrollLeft <= 10) {
            setIsResetting(true);
            container.style.scrollSnapType = 'none';

            // Calculate shift
            const shift = mainSetStart - cards[0].offsetLeft;
            container.scrollLeft = scrollLeft + shift;

            requestAnimationFrame(() => {
                container.style.scrollSnapType = 'x mandatory';
                setIsResetting(false);
            });
        }
    };

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const card = carouselRef.current.querySelector('.split-card') as HTMLElement;
            if (!card) return;

            // Get computed gap, fallback to 32px (2rem)
            const style = window.getComputedStyle(carouselRef.current);
            const gap = parseFloat(style.gap || '32');
            const scrollAmount = card.offsetWidth + gap;

            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="section-padding bg-paper">
            <div className="container">
                <h2 className="section-heading text-center" style={{ marginBottom: '4rem' }}>
                    Menu Highlights
                </h2>

                <div className="carousel-wrapper" style={{ position: 'relative' }}>
                    {/* Navigation Buttons */}
                    <button
                        className="carousel-btn prev"
                        onClick={() => scrollCarousel('left')}
                        aria-label="Previous"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        className="carousel-btn next"
                        onClick={() => scrollCarousel('right')}
                        aria-label="Next"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    <div
                        className="menu-highlights-carousel"
                        ref={carouselRef}
                        onScroll={handleScroll}
                        style={{ position: 'relative' }} // Ensure offsetLeft is relative to this container
                    >
                        {infiniteDishes.map((dish, index) => (
                            <RevealOnScroll
                                key={index}
                                className="split-card"
                                delay={(index % 5) * 0.1}
                                duration={0.8}
                            >
                                <div className="split-card-image">
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        placeholder="blur"
                                    />
                                </div>

                                <div className="split-card-content">
                                    <span className="split-card-category">{dish.category}</span>
                                    <h3 className="split-card-title">{dish.name}</h3>
                                    <p className="split-card-desc">{dish.desc}</p>
                                    <span className="split-card-link">DISCOVER</span>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuHighlights;
