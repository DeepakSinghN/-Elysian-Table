'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, Variants } from 'framer-motion';

export default function VisitPage() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <main className="bg-paper min-h-screen flex flex-col">
            <Navbar />

            {/* Spacer for fixed navbar */}
            <div className="h-32"></div>

            <motion.div
                className="container mx-auto px-6 py-12 flex-grow"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1
                    className="section-heading text-center mb-16"
                    variants={itemVariants}
                >
                    Parking & How to Get Here
                </motion.h1>

                <div className="visit-grid">
                    {/* Map Section */}
                    <motion.div
                        className="map-container"
                        variants={itemVariants}
                    >
                        {/* Embedded Map using iframe for better visual */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.568466633719!2d-8.614136923946026!3d41.14444527133182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e317bb7d57%3A0x629555c277717646!2sLargo%20de%20S%C3%A3o%20Domingos%2062%2C%204050-545%20Porto%2C%20Portugal!5e0!3m2!1sen!2sus!4v1706789012345!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* Overlay to blend it nicely */}
                        <div className="map-overlay-blend"></div>
                    </motion.div>

                    {/* Transport Info Section */}
                    <motion.div
                        className="transport-info"
                        variants={itemVariants}
                    >
                        {/* Parking */}
                        <div className="transport-item">
                            <div className="transport-icon-col">
                                <div className="icon-parking">P</div>
                            </div>
                            <div className="transport-text">
                                <h3>Parking</h3>
                                <p>2 hour parking on Old Colony Ave, and at the parking lot at 323 Dorchester Ave.</p>
                            </div>
                        </div>

                        {/* Subway */}
                        <div className="transport-item">
                            <div className="transport-icon-col">
                                <div className="icon-subway">RED LINE</div>
                            </div>
                            <div className="transport-text">
                                <h3>Subway</h3>
                                <p>Broadway Station</p>
                            </div>
                        </div>

                        {/* Bus */}
                        <div className="transport-item">
                            <div className="transport-icon-col">
                                <div className="icon-bus">T</div>
                            </div>
                            <div className="transport-text">
                                <h3>Bus</h3>
                                <p>9, 11, 17, 47</p>
                            </div>
                        </div>

                        {/* Bikes */}
                        <div className="transport-item">
                            <div className="transport-icon-col">
                                <div className="icon-bike">
                                    <span>BLUE</span>
                                    <span>bikes</span>
                                </div>
                            </div>
                            <div className="transport-text">
                                <h3>Bikes</h3>
                                <p>W Broadway at D St, W Broadway at Dorchester St, Dorchester Ave at Gillette Park</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a href="https://maps.google.com" target="_blank" className="book-btn text-black border-black hover:opacity-70">
                                GET DIRECTIONS
                            </a>
                        </div>

                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </main>
    );
}
