import styles from "../Testimonial.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TestimonialVideoComponentProps {
  content: any;
}
export const Video: React.FC<TestimonialVideoComponentProps> = ({
  content,
}) => {
  const [onover, setonover] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);
  const [videostatus, setVideostatus] = useState<boolean>(false);

  const videoRef = useRef<any>();
  const myCallback = () => {
    setPlay(false);
  };
  const handleplay = () => {
    setPlay(true);
    videoRef.current.play();
    setVideostatus(!videostatus);
  };

  const handlepause = () => {
    setPlay(false);
    videoRef.current.pause();
    setVideostatus(!videostatus);
  };
  return (
    <>
      <video
        poster={`/assets/images/${content.thumbnail}`}
        onClick={(e) => e.stopPropagation()}
        onMouseOver={() => {
          setonover(true);
        }}
        onMouseOut={() => {
          setonover(false);
        }}
        className={`w-100 h-100 ${styles.htmlVideo}`}
        ref={videoRef}
        onEnded={() => myCallback()}
        key={`/assets/videos/${content.videopath}`}
      >
        <source src={`/assets/videos/${content.videopath}`} />
      </video>
      {!play && (
        <Image
          alt="play"
          src="/assets/icons/ic-play.svg"
          width={66}
          height={66}
          className={`position-absolute ${styles.playPause}`}
          onClick={() => handleplay()}
        />
      )}
      {play && onover && (
        <Image
          alt="pause"
          src="/assets/icons/ic-pause.svg"
          width={66}
          height={66}
          className={`position-absolute ${styles.playPause}`}
          onMouseOver={() => setonover(true)}
          onClick={() => handlepause()}
        />
      )}
    </>
  );
};
