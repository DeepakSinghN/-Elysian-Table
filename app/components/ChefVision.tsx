'use client';


import Image from 'next/image';
import chefImage from '@/images/ChefImage.png';
import RevealOnScroll from './RevealOnScroll';

const ChefVision = () => {
    return (
        <section className="section-padding bg-paper">
            <div className="container">
                <div className="chef-vision-layout">
                    {/* Text Content */}
                    <div className="chef-text-col">
                        <RevealOnScroll>
                            <h2 className="section-heading">Culinary Vision</h2>
                            <div className="separator-line"></div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.2}>
                            <p className="body-text-large">
                                At Elysian Table, we believe that true flavor is born from deep respect for nature's rhythm.
                                Our kitchen operates at the intersection of wild inspiration and disciplined technique.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.4}>
                            <p className="body-text">
                                Every dish tells a story of the season, sourcing ingredients from local artisans who
                                share our passion for purity. We invite you to experience a menu that is as honest
                                as it is innovative—where every bite is a celebration of the present moment.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.6}>
                            <div className="signature">
                                Chef Alexander Thorne
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Image Content */}
                    <RevealOnScroll
                        className="chef-image-col"
                        delay={0.2}
                    >
                        <div className="image-frame-elegant">
                            <Image
                                src={chefImage}
                                alt="Chef plating a dish"
                                fill
                                style={{ objectFit: 'cover' }}
                                placeholder="blur"
                            />
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default ChefVision;
