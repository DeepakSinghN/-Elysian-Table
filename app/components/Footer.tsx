'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
        }
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

                {/* Top Section: Info & Contact */}
                <motion.div variants={itemVariants} className="flex flex-row justify-between items-start mb-10 md:mb-16 gap-2 md:gap-10 text-[10px] md:text-sm font-light tracking-wide opacity-90">
                    {/* Left: Address & Hours */}
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

                    {/* Right: Contact & Socials */}
                    <div className="text-right space-y-1 md:space-y-2 max-w-[50%]">
                        <p><a href="mailto:drink@elysiantable.com" className="hover:opacity-70 transition">drink@elysiantable.com</a></p>
                        <p className="mb-2 md:mb-4 block"><a href="tel:+351229760002" className="hover:opacity-70 transition">(+351) 229 760 002</a></p>
                        <div className="flex flex-col gap-2 pt-2 items-end">
                            <a href="#" className="flex flex-row items-center gap-2 hover:opacity-70 transition group" aria-label="Instagram">
                                <span className=" tracking-wide">Instagram</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" className="flex flex-row items-center gap-2 hover:opacity-70 transition group" aria-label="TikTok">
                                <span className=" tracking-wide">TikTok</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                                </svg>
                            </a>
                            <a href="#" className="flex flex-row items-center gap-2 hover:opacity-70 transition group" aria-label="Facebook">
                                <span className=" tracking-wide">Facebook</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Middle Section: Branding & Illustrations */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between mb-24 relative">

                    {/* Left Icon: Wine Bottle & Glass Image */}
                    <div className="hidden md:block w-32 xl:w-40 opacity-90">
                        <Image
                            src="/images/footer/wine-bottle.png"
                            alt="Wine Bottle"
                            width={160}
                            height={160}
                            className="object-contain"
                        />
                    </div>

                    {/* Center Logo */}
                    <div className="text-center z-10">
                        <div className="mb-2 md:mb-4 flex justify-center">
                            {/* Abstract Icon similar to reference */}
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="white">
                                <circle cx="30" cy="10" r="5" />
                                <path d="M30 60 C10 40 10 20 30 30 C50 20 50 40 30 60 Z" fill="transparent" stroke="white" strokeWidth="2" />
                                <path d="M15 30 Q30 50 45 30" stroke="white" strokeWidth="2" fill="none" />
                                <path d="M30 30 V 50" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif tracking-tighter uppercase leading-none text-[#EBCFB2]">
                            Elysian
                        </h1>
                    </div>

                    {/* Right Icon: Flowers Image */}
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

                {/* Bottom Section: Legal */}
                <motion.div variants={itemVariants} className="flex flex-row justify-between items-end text-[9px] md:text-xs font-light tracking-wide opacity-70 border-t border-white/10 pt-4 md:pt-8">
                    <div className="space-y-0.5 md:space-y-1 max-w-[45%]">
                        <p className="uppercase font-medium">Elysian Hospitality Grp</p>
                        <p>Largo de São Domingos 62</p>
                        <p>VAT No. 51361450155</p>
                    </div>

                    <div className="hidden md:block">
                        <span className="font-serif italic text-lg">since 2000</span>
                    </div>

                    <div className="text-right space-y-0.5 md:space-y-1 max-w-[45%]">
                        <div className="flex flex-col md:items-end gap-0.5 md:gap-1">
                            <Link href="#" className="hover:underline">Privacy Policy</Link>
                            <Link href="#" className="hover:underline">Terms</Link>
                        </div>
                        <a href="https://www.elevenxsolutions.com/" target="_blank" className="mt-2 md:mt-4 pt-1 md:pt-4">Designed by ElevenX Solutions</a>
                    </div>
                </motion.div>

            </motion.div>
        </footer>
    );
};

export default Footer;
