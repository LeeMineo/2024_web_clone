import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

const slides = [
    "/images/slide/s_1.jpg",
    "/images/slide/s_2.jpg",
    "/images/slide/s_3.jpg",
    "/images/slide/s_4.jpg",
    "/images/slide/s_5.jpg",
    "/images/slide/s_6.jpg",
    "/images/slide/s_7.jpg",
    "/images/slide/s_8.jpg",
];

const Banner = () => {
    return (
        <div className={styles.banner}>
            {slides.map((src, index) => (
                <div key={index} className={styles.slide}>
                    <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
                </div>
            ))}
        </div>
    );
};

export default Banner;
