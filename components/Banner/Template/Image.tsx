import styles from "../Banner.module.scss";
import { frameImgUrl } from "@/utils/helper";

export default function Imagesection({ image }: any) {
  return (
    <div className={`${styles.bannerBackground} position-relative w-100`}>
      <div className={`${styles.imgOverlay} position-absolute w-100 h-100`} />
      <img
        className={`${styles.bannerimage} w-100 h-100`}
        src={`${frameImgUrl(image)}`}
        alt=""
      />
    </div>
  );
}
