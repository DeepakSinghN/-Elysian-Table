'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants, cubicBezier } from 'framer-motion';

const Footer = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    return (
        <footer className="bg-[#023020] text-white pt-8 pb-6 md:pt-10 md:pb-10 px-2 md:px-6 font-sans overflow-hidden">
            <motion.div
                className="container mx-auto max-w-7xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                {/* Top Section */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-row justify-between items-start mb-10 md:mb-16 gap-2 md:gap-10 text-[10px] md:text-sm font-light tracking-wide opacity-90"
                >
                    {/* Address */}
                    <div className="space-y-2 md:space-y-4 max-w-[50%]">
                        <div>
                            <p>Largo de São Domingos 62</p>
                            <p>4050-545 Porto, Portugal</p>
                        </div>
                        <div className="pt-1 md:pt-2">
                            <p className="opacity-70">The restaurant is open</p>
                            <p>Every day from 12:00 to 00:00</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="text-right space-y-1 md:space-y-2 max-w-[50%]">
                        <p>
                            <a href="mailto:drink@elysiantable.com" className="hover:opacity-70 transition">
                                drink@elysiantable.com
                            </a>
                        </p>
                        <p className="mb-2 md:mb-4">
                            <a href="tel:+351229760002" className="hover:opacity-70 transition">
                                (+351) 229 760 002
                            </a>
                        </p>

                        <div className="flex flex-col gap-2 pt-2 items-end">
                            {['Instagram', 'TikTok', 'Facebook'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="hover:opacity-70 transition"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Branding Section */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-center justify-between mb-24"
                >
                    <div className="hidden md:block w-32 xl:w-40 opacity-90">
                        <Image
                            src="/images/footer/wine-bottle.png"
                            alt="Wine Bottle"
                            width={160}
                            height={160}
                            className="object-contain"
                        />
                    </div>

                    <div className="text-center">
                        <h1 className="text-6xl md:text-8xl font-serif tracking-tighter uppercase text-[#EBCFB2]">
                            Elysian
                        </h1>
                    </div>

                    <div className="hidden md:block w-32 xl:w-40 opacity-90 rotate-12">
                        <Image
                            src="/images/footer/flower.png"
                            alt="Flowers"
                            width={160}
                            height={160}
                            className="object-contain"
                        />
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-between items-end text-[9px] md:text-xs font-light tracking-wide opacity-70 border-t border-white/10 pt-4 md:pt-8"
                >
                    <div>
                        <p className="uppercase font-medium">Elysian Hospitality Grp</p>
                        <p>Largo de São Domingos 62</p>
                        <p>VAT No. 51361450155</p>
                    </div>

                    <div className="text-right">
                        <Link href="#" className="hover:underline block">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:underline block">
                            Terms
                        </Link>
                        <a
                            href="https://www.elevenxsolutions.com/"
                            target="_blank"
                            className="block mt-2"
                        >
                            Designed by ElevenX Solutions
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
