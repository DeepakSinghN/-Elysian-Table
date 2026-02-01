'use client';

import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const features = [
    {
        title: "the day begins",
        description: "The day begins with freshly baked pastries and a thoughtful coffee program built around quality and comfort. It’s a space for early meetings, quiet rituals, or something sweet to start the day.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
        )
    },
    {
        title: "midday moments",
        description: "As the day unfolds, savoury snacks, cold drinks, and wines take centre stage. Designed for grazing and sharing, the menu is playful, seasonal, and unfussy, setting the tone for a slower, more relaxed pace.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 22h8"></path>
                <path d="M7 10h10"></path>
                <path d="M12 15v7"></path>
                <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
            </svg>
        )
    },
    {
        title: "into the evening",
        description: "As the light shifts, the bar comes alive with conversation and carefully crafted cocktails. Each drink is rooted in local ingredients, new techniques, and a spirit of generosity.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 22h8"></path>
                <path d="M12 15v7"></path>
                <path d="M6 3h12"></path>
                <path d="M6 3l6 12 6-12"></path>
            </svg>
        )
    }
];

const Features = () => {
    return (
        <section className="section-padding bg-dark">
            <div className="container">
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <RevealOnScroll
                            key={index}
                            className="feature-card"
                            delay={index * 0.2}
                            duration={0.6}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
