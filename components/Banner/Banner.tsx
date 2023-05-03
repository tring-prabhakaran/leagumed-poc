import Link from 'next/link';
import Video from "./Template/Video";
import Imagesection from "./Template/Image";
import Carousal from "./Template/Carousel";
import { PortableText } from "@portabletext/react";
import styles from "./Banner.module.scss";

async function getData(data: any) {

  let bannerData: any = {};
    let slide: any = [];
    bannerData.contenttype = data?._type;
    bannerData.title1 = data?.blockContentOverview === undefined ? " " : data?.blockContentOverview[0]?.children[0]?.text;
    bannerData.title2 = data?.blockContentOverview === undefined ? " " :data?.blockContentOverview[1]?.children[0]?.text;
    bannerData.description = data?.blockContentOverview === undefined ? " " : data?.blockContentOverview[2]?.children[0]?.text;
    
    bannerData.joincta = data?.joincta;
    bannerData.aboutcta = data?.aboutcta;

    bannerData.video = data?.videoUrl;
    bannerData.image = data?.herobgimage?.asset?._ref;

    data?.imageGalleryField?.map(
      (item: any, index: number) => {
        let Carousel: any = {};
        (Carousel.id = index),
          (Carousel.slide = item.photo?.asset?._ref),
          (Carousel.title1 = item.imagesliderscontent[0]?.children[0]?.text),
          (Carousel.title2 = item.imagesliderscontent[1]?.children[0]?.text),
          (Carousel.desc = item.imagesliderscontent[2]?.children[0]?.text);
        slide.push(Carousel);
      }
    );
    return { bannerData, slide};
};

export default async function Banner ({ content }: any) {

  const { bannerData, slide } = await getData(content);
  console.log('banner', bannerData);
  return (
    <section
      className={`${styles.banner} position-relative w-100 d-flex align-items-center`}
    >
      {bannerData.contenttype == "hero_video_template" ? (
        null // <Video video={bannerData.video} />
      ) : bannerData.contenttype == "hero_image_template" ? (
        <Imagesection image={bannerData.image} />
      ) : (
        <Carousal carousal={slide} />
      )}

      {bannerData.contenttype !== "hero_image_gallery_template" ? (
        <div
          className={`${styles.bannerContent}  position-absolute align-self-center  `}
        >
          <div className="container">
            <PortableText value={bannerData}/>
            <h1 className={styles.title1}>{bannerData.title1}</h1>
            <h1 className={styles.title2}>{bannerData.title2}</h1>
            <p className={styles.desc}>{bannerData?.description}</p>
            <div
              className={`${styles.buttonMainBlock} d-flex algin-items-center `}
            >
              <div className={`${styles.buttonBlock} w-100 row`}>
                <div className="col-6 col-sm-6">
                  <Link
                    href={'/register'}
                    className={`${styles.bannerBtn} w-100 d-flex flex-row justify-content-center align-items-center `}
                  >
                    {bannerData.joincta} <img src="/assets/icons/ic-plus.svg" />
                  </Link>
                </div>
                <div className="col-6 col-sm-6">
                  <button
                    className={`${styles.bannerBtn} w-100 d-flex flex-row justify-content-center align-items-center `}
                  >
                    {bannerData.aboutcta} <img src="/assets/icons/ic-about.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
