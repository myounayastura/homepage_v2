"use client"
import styles from './page.module.css'

export default function about() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>ごあいさつ</h2>
            <p className={styles.subtitle}>
                はちみつは今から約1万年前に東スペイン、アルタミラ洞窟で採蜜風景を描いた岩壁画が残っているように、太古から人々と共にありました。<br/>
                今では養蜂の技術も進歩し、たくさんのはちみつが安定して採れるようになりました。
            </p>
        </div>

        <div className={styles.wrapper}>
            <h2 className={styles.title}>企業理念</h2>
            <p className={styles.subtitle}>
                はちみつは今から約1万年前に東スペイン、アルタミラ洞窟で採蜜風景を描いた岩壁画が残っているように、太古から人々と共にありました。<br/>
                今では養蜂の技術も進歩し、たくさんのはちみつが安定して採れるようになりました。
            </p>
        </div>

        <div className={styles.wrapper}>
            <h2 className={styles.title}>会社概要</h2>
            <p className={styles.subtitle}>
                はちみつは今から約1万年前に東スペイン、アルタミラ洞窟で採蜜風景を描いた岩壁画が残っているように、太古から人々と共にありました。<br/>
                今では養蜂の技術も進歩し、たくさんのはちみつが安定して採れるようになりました。
            </p>
        </div>
      </section>
    </>
  );
}
