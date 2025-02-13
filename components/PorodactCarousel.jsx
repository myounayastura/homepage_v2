"use client"
import { useState, useEffect } from 'react';
import styles from "./ProdactCarousel.module.css"

const itemsDate = [
    {id: 1, name: '商品1', price: '1000円', imageURL: '/images/MainVisual.jpg'},
    {id: 2, name: '商品2', price: '1500円', imageURL: '/images/MainVisual.jpg'},
    {id: 3, name: '商品3', price: '800円', imageURL: '/images/MainVisual.jpg'},
    {id: 4, name: '商品4', price: '1200円', imageURL: '/images/MainVisual.jpg'},
];

const ProdactCarousel = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const itemsPerview = isMobile ? 1 : 4;
    const itemCount = itemsDate.length;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % itemCount);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 1 + itemCount) % itemCount);
    };

    return (
        <div className={styles.carouselContainer}>
            <button onClick={prevSlide} className={styles.prevButton}>&#10094;</button>
            <div className={styles.carouselWrapper}>
                <div className={styles.carouselItem} style={{ transform: `translateX(-$(currentIndex * 100) / itemPerView)%}`}}>
                    {itemsDate.map((item, index) => (
                        <div key={item.id} className={styles.carouselItem}>
                             <img className={styles.itemImage} src={item.imageUrl} alt={item.name}/>
                             <div className={styles.itemInfo}>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide} className={styles.nextButton}>&#10095;</button>
        </div>

    )
}

export default ProdactCarousel;