import styles from "../Banner.module.scss";
import ReactPlayer from "react-player";

export default function Video({ video }: any) {
  console.log('video url', video);

  return (
    <div className={`${styles.bannerBackground} position-relative w-100`}>
      <div className={`${styles.imgOverlay} position-absolute w-100 h-100`} />
      {video && 
      <ReactPlayer
        playing
        loop
        muted
        width="100%"
        height="700px"
        className={`${styles.bannervideo} w-100 `}
        url={video}
      />
    }
    </div>
  );
}
