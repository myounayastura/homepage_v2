"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from "./ProdactSlider.module.css"

function ProdactSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
      };
      return (
        <div className={styles.container}>
          <Slider {...settings}>
            <div className={styles.SliderItem}>
              <img src="/images/hachimitsu.jpg" alt="" className="" />
            </div>
            <div className={styles.SliderItem}>
              <img src="/images/hachimitsu2.jpg" alt="" className="" />
            </div>
            <div className={styles.SliderItem}>
              <img src="/images/hachimitsu3.jpg" alt="" className="" />
            </div>
            <div className={styles.SliderItem}>
              <img src="/images/hachimitsu.jpg" alt="" className="" />
            </div>
            <div className={styles.SliderItem}>
              <img src="/images/hachimitsu.jpg" alt="" className="" />
            </div>
            <div className={styles.SliderItem}>
              <img src="/images/hachimitsu.jpg" alt="" className="" />
            </div>
          </Slider>
        </div>
    );
}

export default ProdactSlider;