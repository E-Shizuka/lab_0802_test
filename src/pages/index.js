import Image from "next/image";
import { Inter } from "next/font/google";
import style from "../styles/ test.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import React from "react";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import autoprefixer from "autoprefixer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={style.body}>
      <h1 className={style.top}>つれづれ日記</h1>
      <p className={style.news_sub}>コーギーとのほのぼの過ごす日々</p>
      <SimpleSlider /> {/* SimpleSlider コンポーネントの追加 */}
    </div>
  );
}

export function SimpleSlider() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   autoplay: true, // 自動再生を有効化
  //   autoplaySpeed: 3000,
  // };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // 初回実行
    checkWindowSize();

    // ウィンドウのリサイズイベントを監視
    window.addEventListener("resize", checkWindowSize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 4,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={style.body}>
      <div className={style.toko_area}>
        <Slider {...settings}>
          <div className={style.toko_box}>
            <div className={style.picture_box}>
              <Image
                src="/corgi_1.png"
                alt="Corgi Image"
                width={240}
                height={160}
                layout="responsive"
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
                layout="responsive"
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
                layout="responsive"
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
                layout="responsive"
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
                layout="responsive"
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
                layout="responsive"
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
    </div>
  );
}
