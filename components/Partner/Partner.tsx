'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { frameImgUrl } from "@/utils/helper";
import styles from "./Partner.module.scss";
import Image from "next/image";

interface PartnerProps {
  content: any;
}

export default function Partner( { content }: PartnerProps) {

  const logos: string[] = content.logos || 0;;
  
  const settings: any = {
    arrows:false,
    dots: false,
    infinite: true,
    slidesToShow: logos.length < 6 ? logos.length : 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 400,
    cssEase: "linear",
    // pauseOnFocus: false,
    // pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.partner}>
      <div className="position-relative container">
        <Slider {...settings}>
          {logos && logos?.map((item: any, index: number) => (
            <Image
              key={index}
              src={`${frameImgUrl(item?.asset?._ref)}`}
              alt="Partners logo" 
              className="w-100 h-100"
              width={150}
              height={80}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
