import Image from "next/image";
import { Inter } from "next/font/google";
import style from "../styles/ test.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import autoprefixer from "autoprefixer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className={style.top}>つれづれ日記</h1>
      <p className={style.news_sub}>コーギーとのほのぼの過ごす日々</p>
      <SimpleSlider /> {/* SimpleSlider コンポーネントの追加 */}
    </div>
  );
}

export function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true, // 自動再生を有効化
    autoplaySpeed: 3000,
  };
  return (
    <div className={style.toko_area}>
      <Slider {...settings}>
        <div className={style.toko_box}>
          <div className={style.picture_box}>
            <Image
              src="/corgi_1.png"
              alt="Corgi Image"
              width={240}
              height={160}
            />
          </div>
          <div className={style.text_title}>
            <p className={style.p_a}>今日のできごと</p>
            <p className={style.p_a}>日付</p>
          </div>
          <div className={style.text_box}></div>
        </div>
        <div className={style.toko_box}>
          <div className={style.picture_box}>
            <Image
              src="/corgi_2.png"
              alt="Corgi Image"
              width={240}
              height={160}
            />
          </div>
          <div className={style.text_title}>
            <p className={style.p_a}>今日のできごと</p>
            <p className={style.p_a}>日付</p>
          </div>
          <div className={style.text_box}></div>
        </div>
        <div className={style.toko_box}>
          <div className={style.picture_box}>
            <Image
              src="/corgi_4.png"
              alt="Corgi Image"
              width={240}
              height={160}
            />
          </div>
          <div className={style.text_title}>
            <p className={style.p_a}>今日のできごと</p>
            <p className={style.p_a}>日付</p>
          </div>
          <div className={style.text_box}></div>
        </div>
        <div className={style.toko_box}>
          <div className={style.picture_box}>
            <Image
              src="/corgi_5.jpeg"
              alt="Corgi Image"
              width={240}
              height={160}
            />
          </div>
          <div className={style.text_title}>
            <p className={style.p_a}>今日のできごと</p>
            <p className={style.p_a}>日付</p>
          </div>
          <div className={style.text_box}></div>
        </div>
        <div className={style.toko_box}>
          <div className={style.picture_box}>
            <Image
              src="/corgi_6.png"
              alt="Corgi Image"
              width={240}
              height={160}
            />
          </div>
          <div className={style.text_title}>
            <p className={style.p_a}>今日のできごと</p>
            <p className={style.p_a}>日付</p>
          </div>
          <div className={style.text_box}></div>
        </div>
        <div className={style.toko_box}>
          <div className={style.picture_box}>
            <Image
              src="/corgi_8.jpg"
              alt="Corgi Image"
              width={240}
              height={160}
            />
          </div>
          <div className={style.text_title}>
            <p className={style.p_a}>今日のできごと</p>
            <p className={style.p_a}>日付</p>
          </div>
          <div className={style.text_box}></div>
        </div>
      </Slider>
    </div>
  );
}
