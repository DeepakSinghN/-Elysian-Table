'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

const reviews = [
    {
        id: 1,
        name: "Malina Zavodskaya",
        role: "Photographer - Retoucher",
        text: "You have created a real work of art 😻 I didn't even imagine that such an ideal site could turn out) I like that every stage you coordinated with me and took into account all wishes. I felt that you are fully involved in the work on my site 🖤",
        image: "/images/avatar1.jpg" // Placeholder, will fallback or use generic
    },
    {
        id: 2,
        name: "Tatiana",
        role: "Founder of Brand",
        text: "Katya, thank you so much for the site and design, everything is so concise, you responded through the site, recommended to all friends! Special thanks for the creative approach.",
        image: "/images/avatar2.jpg"
    },
    {
        id: 3,
        name: "Anel Aliaskarova",
        role: "Psychologist",
        text: "I'm thrilled with our product ❤️ If anyone wants to get services from Katy - know that she realistically pays attention to every detail. And if you don't like something and want it differently, you visually allow that Katya's options are the best.",
        image: "/images/avatar3.jpg"
    },
    {
        id: 4,
        name: "Yana Chukalovskaya",
        role: "Founder of Online School",
        text: "Katya, the site is amazing! Everything looks stylish and professional. Every detail is thought out to the smallest detail! Once again a huge thank you for the creative approach, attention to detail and fast work 😻",
        image: "/images/avatar4.jpg"
    },
    {
        id: 5,
        name: "Sabina Kasymova",
        role: "Director of Children's Center",
        text: "I want to leave a huge review about working with you! You completed everything quickly, with incredible creativity and attention to detail. The result turned out not only beautiful, but also functional. Working with you is a pleasure! Recommend to everyone!",
        image: "/images/avatar5.jpg"
    },
    {
        id: 6,
        name: "Asema Sadubaeva",
        role: "HR Manager",
        text: "Thank you so much for the work done, separately want to note the sense of taste and how you chose the color palette, fully reflecting my request. I will definitely contact you next time and will recommend to friends and acquaintances ✨",
        image: "/images/avatar6.jpg"
    }
];

const ReviewCard = ({ review }: { review: any }) => (
    <div className="review-card">
        <div className="review-header">
            <div className="review-avatar">
                {/* Placeholder for avatar if image missing, or use Next Image if available */}
                <div className="w-full h-full bg-gray-300 rounded-full overflow-hidden relative">
                    {/* In a real app we'd load the image. Using a colored div for premium feel fallback */}
                    <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400 font-serif text-xl">
                        {review.name.charAt(0)}
                    </div>
                </div>
            </div>
            <div className="review-info">
                <h4 className="text-black font-bold uppercase text-sm tracking-wide">{review.name}</h4>
                <p className="text-gray-500 text-xs uppercase tracking-wider">{review.role}</p>
            </div>
            <div className="review-asterisk">✱</div>
        </div>

        <div className="review-body">
            <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
        </div>

        <div className="review-footer">
            <div className="flex gap-1 text-black text-xs">
                {'♥♥♥♥♥'.split('').map((heart, i) => (
                    <span key={i} style={{ fontSize: '1.2rem' }}>♥</span>
                ))}
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Row 1: Moves Left (0 to -X)
    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

    // Row 2: Moves Right (-X to 0) or (0 to X). 
    // Let's start visually centered-ish and move right
    const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);

    return (
        <section ref={containerRef} className="py-24 bg-[#EBE9E4] overflow-hidden relative">
            <div className="absolute top-10 left-10 opacity-5 pointer-events-none select-none">
                <RevealOnScroll>
                    <h2 className="text-[8rem] font-bold leading-none tracking-tighter uppercase font-serif text-black opacity-10">
                        Client<br />Reviews
                    </h2>
                </RevealOnScroll>
            </div>

            <div className="flex flex-col gap-12 relative z-10">
                {/* Row 1 */}
                <motion.div style={{ x: x1 }} className="flex gap-3 md:gap-8 w-max pl-4 md:pl-12">
                    {/* Double the array to create length for scrolling */}
                    {[...reviews, ...reviews].map((review, idx) => (
                        <ReviewCard key={`${review.id}-row1-${idx}`} review={review} />
                    ))}
                </motion.div>

                {/* Row 2 */}
                <motion.div style={{ x: x2 }} className="flex gap-3 md:gap-8 w-max pr-4 md:pr-12">
                    {[...reviews, ...reviews].reverse().map((review, idx) => (
                        <ReviewCard key={`${review.id}-row2-${idx}`} review={review} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
