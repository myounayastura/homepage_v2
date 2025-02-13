"use client"
import styles from './GallerySection.module.css'

const GallerySection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.box1}>
                    <img src="/images/box1.jpg" alt="" className="" />
                </div>
                <div className={styles.box2}>
                    <p>こんにちは</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.box3}>
                   <p>こんばんは</p>
                </div>
                <div className={styles.box4}>
                    <img src="/images/box3.jpg" alt="" className="" />
                </div>
            </div>
        </div>
    );
}

export default GallerySection;