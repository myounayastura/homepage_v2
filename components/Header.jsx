"use client"
import { useState } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>My Logo</h1>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>

            <div className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                <ul>
                    <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link href="/products" onClick={toggleMenu}>Products</Link></li>
                    <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;