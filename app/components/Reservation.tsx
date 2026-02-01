'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const Reservation = () => {
    const [seats, setSeats] = useState("1 Person");

    return (
        <section id="reservation" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden bg-white">
                    {/* Mobile Title (Visible only on mobile) */}
                    <div className="lg:hidden text-center p-8 pb-0 mb-4">
                        <RevealOnScroll>
                            <h2 className="text-4xl font-serif text-gray-900 mb-4">Online Reservation</h2>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.2}>
                            <p className="text-gray-500 text-sm">
                                Booking request <span className="text-[#D4A373] font-medium">+84 (800) 1433 555</span> or fill out the order form
                            </p>
                        </RevealOnScroll>
                    </div>

                    {/* Left Side: Video & Offer */}
                    <div className="w-full lg:w-5/12 relative min-h-[500px] lg:min-h-[750px]">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/videos/reservation-video.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-7/12 p-12 lg:p-16 flex flex-col justify-center relative">
                        {/* Chef Cap Icon */}
                        <div className="absolute top-6 right-6 text-[#D4A373] opacity-50 cursor-default">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 14C20.6569 14 22 12.6569 22 11C22 9.34315 20.6569 8 19 8C18.657 8 18.3312 8.05779 18.0289 8.1643C17.6534 5.30594 15.1118 3 12 3C9.09849 3 6.69741 5.01953 6.09545 7.60477C5.74864 7.53676 5.38573 7.5 5.01174 7.5C2.7963 7.5 1 9.29086 1 11.5C1 13.5265 2.51009 15.1953 4.46452 15.4593C4.26909 16.5913 4 18.2587 4 20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20C20 18.1565 19.6896 16.3986 19.4674 15.228C20.9329 14.9392 22 13.6338 22 12.0625L19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>


                        {/* Reservation Title */}
                        {/* Reservation Title (Visible only on desktop) */}
                        <div className="text-center mb-10 hidden lg:block">
                            <RevealOnScroll>
                                <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">Online Reservation</h2>
                            </RevealOnScroll>
                            <RevealOnScroll delay={0.2}>
                                <p className="text-gray-500 text-sm">
                                    Booking request <span className="text-[#D4A373] font-medium">+84 (800) 1433 555</span> or fill out the order form
                                </p>
                            </RevealOnScroll>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full border-b border-gray-200 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4A373] transition-colors bg-transparent"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full border-b border-gray-200 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4A373] transition-colors bg-transparent"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="relative">
                                    <select
                                        className="w-full border-b border-gray-200 py-3 text-gray-800 appearance-none bg-transparent focus:outline-none focus:border-[#D4A373] cursor-pointer"
                                        value={seats}
                                        onChange={(e) => setSeats(e.target.value)}
                                    >
                                        <option>1 Person</option>
                                        <option>2 People</option>
                                        <option>3 People</option>
                                        <option>4 People</option>
                                        <option>5 People</option>
                                        <option>6+ People</option>
                                    </select>
                                    <span className="absolute right-0 top-3 pointer-events-none text-gray-400">▼</span>
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="DD/MM/YYYY"
                                        onFocus={(e) => e.target.type = 'date'}
                                        onBlur={(e) => e.target.type = 'text'}
                                        className="w-full border-b border-gray-200 py-3 text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none focus:border-[#D4A373]"
                                    />
                                </div>

                                <div className="relative">
                                    <select className="w-full border-b border-gray-200 py-3 text-gray-800 appearance-none bg-transparent focus:outline-none focus:border-[#D4A373] cursor-pointer">
                                        <option>07:00 pm</option>
                                        <option>07:30 pm</option>
                                        <option>08:00 pm</option>
                                        <option>08:30 pm</option>
                                    </select>
                                    <span className="absolute right-0 top-3 pointer-events-none text-gray-400">▼</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    placeholder="Message"
                                    rows={1}
                                    className="w-full border-b border-gray-200 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4A373] transition-colors bg-transparent resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full bg-[#A97155] text-white py-4 uppercase tracking-widest text-xs font-medium hover:bg-[#8e5e45] transition-colors mt-4">
                                Book a Table
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
