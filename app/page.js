import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ProdactCarousel from "@/components/PorodactCarousel";
import ProdactSlider from "@/components/ProdactSlider";

export default function Home() {
  return (
    <>
      <main>
        <section className={styles.section}>
          <HeroSection></HeroSection>
        </section>

        <section className={styles.section}>
          <ProdactSlider></ProdactSlider>
        </section>

        <section className={styles.section}>
          <GallerySection></GallerySection>
        </section>
      </main>
    </>
  );
}
