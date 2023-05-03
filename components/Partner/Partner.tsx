// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { frameImgUrl } from "@/utils/helper";
import styles from "./Partner.module.scss";

interface PartnerProps {
  content: any;
}

export default function Partner( { content }: PartnerProps) {

  const logos: string[] = content.logos;
  
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
        {/* <Slider {...settings}>
          {logos?.map((item: any, index: number) => (
            <img
              key={index}
              src={`${frameImgUrl(item?.asset?._ref)}`}
              alt=""
              className="w-100 h-100"
            />
          ))}
        </Slider> */}
      </div>
    </section>
  );
};
