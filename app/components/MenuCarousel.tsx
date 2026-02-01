'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const MENU_ITEMS = [
    {
        id: 1,
        title: 'Smoked Scallop Crudo',
        price: '$32',
        description: 'Citrus pearls, fennel pollen, dill oil.',
        imageGradient: 'linear-gradient(to top right, #333, #444)',
        delay: 0
    },
    {
        id: 2,
        title: 'Heritage Wagyu Ribeye',
        price: '$120',
        description: 'Truffle pomme purée, charred leeks, bordelaise.',
        imageGradient: 'linear-gradient(to top right, #3e2723, #5d4037)',
        delay: 0.1
    },
    {
        id: 3,
        title: 'Saffron Risotto',
        price: '$45',
        description: 'Gold leaf, aged parmesan, wild mushrooms.',
        imageGradient: 'linear-gradient(to top right, #fbc02d, #f57f17)',
        delay: 0.2
    },
    {
        id: 4,
        title: 'Truffle Tagliatelle',
        price: '$55',
        description: 'Fresh pasta, black winter truffle, aged parmesan.',
        imageGradient: 'linear-gradient(to top right, #4a4036, #8c7b6c)',
        delay: 0.3
    },
    {
        id: 5,
        title: 'Pan-Seared Sea Bass',
        price: '$48',
        description: 'Cauliflower purée, caper raisin emulsion.',
        imageGradient: 'linear-gradient(to top right, #006064, #00bcd4)',
        delay: 0.4
    },
    {
        id: 6,
        title: 'Duck Breast Magret',
        price: '$65',
        description: 'Cherry gastrique, parsnip crisp, wild rice.',
        imageGradient: 'linear-gradient(to top right, #880e4f, #d81b60)',
        delay: 0.5
    },
    {
        id: 7,
        title: 'Chocolate Ganache Tart',
        price: '$25',
        description: 'Sea salt, gold leaf, raspberry coulis.',
        imageGradient: 'linear-gradient(to top right, #212121, #000000)',
        delay: 0.6
    }
];

export default function MenuCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
        Autoplay({ delay: 4000, stopOnInteraction: false })
    ]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="carousel-wrapper">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {MENU_ITEMS.map((item) => (

                        <motion.div
                            className="embla__slide"
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            style={{ height: 'auto', display: 'flex' }}
                        >

                            <div className="menu-card">
                                <div
                                    className="card-image"
                                    style={{ background: item.imageGradient, backgroundBlendMode: 'overlay' }}
                                ></div>
                                <div className="card-content">
                                    <h3>{item.title}</h3>
                                    <span className="price">{item.price}</span>
                                    <p className="description">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="carousel-controls">
                <button className="carousel-btn prev" onClick={scrollPrev}>
                    ←
                </button>
                <button className="carousel-btn next" onClick={scrollNext}>
                    →
                </button>
            </div>
        </div>
    );
}
