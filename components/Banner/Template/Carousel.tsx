'use client';
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import styles from "../Banner.module.scss";
import { frameImgUrl } from "@/utils/helper";
import PortableText from "react-portable-text";

export default function Carousal({ carousal }: any) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="w-100">
      {carousal.map((item: any) => (
        <Carousel.Item key={item.id} interval={2000}>
          <div
            className={`${styles.bannerBackground} position-relative d-flex align-items-center`}
          >
            <div
              className={`${styles.imgOverlay} position-absolute w-100 h-100`}
            />
            <img
              className={`${styles.bannerimage} w-100 h-100`}
              src={`${frameImgUrl(item?.slide)}`}
              alt=""
            />
            <div
              className={`${styles.bannerContent} position-absolute align-self-center  `}
            >
              <div className="container pl-5">
                {/* <PortableText content={item.title1}/> */}
                <h1 className={styles.title1}>{item.title1}</h1>
                <h1 className={styles.title2}>{item.title2}</h1>
                <p className={styles.desc}>{item.desc}</p>
                {/* buttons for slides */}
                {/* <div className={`${styles.buttonMainBlock} d-flex algin-items-center `}>
                  <div className={`${styles.buttonBlock} row`}>
                    {item.button?.map((e:any) => (
                      <div className="col-6 col-sm-6" key={e.id}>
                        <button
                          className={`${styles.bannerBtn} d-flex flex-row justify-content-center align-items-center `}
                        >
                          {e.name}
                          <img src={e.icon} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
