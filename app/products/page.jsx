"use client"
import styles from './page.module.css'

export default function products() {
  return (
    <>
      <div className={styles.container}>
        <img src="/images/hachimitsu.jpg"></img>
        <p>
            この商品は〜〜〜〜〜〜〜〜〜〜〜。<br/>
            〜〜〜〜〜〜〜〜〜〜〜〜。
        </p>
      </div>

      <div className={styles.container}>
        <img src="/images/hachimitsu2.jpg"></img>
        <p>
            この商品は〜〜〜〜〜〜〜〜〜〜〜。<br/>
            〜〜〜〜〜〜〜〜〜〜〜〜。
        </p>
      </div>

      <div className={styles.container}>
        <img src="/images/hachimitsu3.jpg"></img>
        <p>
            この商品は〜〜〜〜〜〜〜〜〜〜〜。<br/>
            〜〜〜〜〜〜〜〜〜〜〜〜。
        </p>
      </div>
    </>
  );
}