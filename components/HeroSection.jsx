"use client"
import styles from './HeroSection.module.css'

const HeroSection = () => {
    return (
        <div className={styles.container}>
            <img src="/images/MainVisual.jpg" alt="はちみつのイラスト" />
            
            <div className={styles.text_overlay}>
                <div className={styles.title}>
                    <h1>Hunny Howse</h1>
                </div>
                <div className={styles.subtitle}>
                    <p>ハチミツの家</p>
                    <p>お茶目なハチミツをみんなへ</p>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;