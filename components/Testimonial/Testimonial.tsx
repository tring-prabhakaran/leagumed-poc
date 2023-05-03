'use client';
import styles from "./Testimonial.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Text } from "./Template/Text";
import { Video } from "./Template/Video";
import { frameImgUrl } from "@/utils/helper";
import { PortableText } from "@portabletext/react";
import useSWR from "swr";


export default function Testiomial({Content}:any) {
  const videoRef = useRef<any>();
  const [videopath, setVideopath] = useState<string>("spouter.mp4");
  const [currentvideo, setCurrentvideo] = useState<any>({
    id: 1,
    type: "text",
    avatar: "feed1.png",
    videopath: "video.mp4",
    thumbnail: "feedthumb1.png",
    title: "Dr. Andrew Ramos",
    description: "Chief Orthotics & Prosthetics, Sloan Kettering",
    quote:
      "“1There used to be an impenetrable wall between practicing medicine and partnering to aide in advancement of medical technology. LeagueMed sits where they took that wall down. I feel more driven to be a doctor than ever!”",
  });

  const [videodata, setVideodata] = useState<any>([
    {
      id: 1,
      type: "text",
      avatar: "feed1.png",
      videopath: "video.mp4",
      thumbnail: "feedthumb1.png",
      title: "Dr. Andrew Ramos",
      description: "Chief Orthotics & Prosthetics, Sloan Kettering",
      quote:
        "“There used to be an impenetrable wall between practicing medicine and partnering to aide in advancement of medical technology. LeagueMed sits where they took that wall down. I feel more driven to be a doctor than ever!”",
    },
    {
      id: 2,
      type: "text",
      avatar: "feed2.png",
      videopath: "eagle.mp4",
      thumbnail: "feedthumb2.png",
      title: "Dr. Jos Buttler",
      description: "Surgical technologist, Sloan Kettering",
      quote:
        "“There used to be an impenetrable wall between practicing medicine and partnering to aide in advancement of medical technology. LeagueMed sits where they took that wall down. I feel more driven to be a doctor than ever!”",
    },
    {
      id: 3,
      type: "text",
      avatar: "feed3.png",
      title: "Dr. Adam Zampa",
      description: "MRI technologist, Sloan Kettering",
      quote:
        "“There used to be an impenetrable wall between practicing medicine and partnering to aide in advancement of medical technology. LeagueMed sits where they took that wall down. I feel more driven to be a doctor than ever!”",
    },
  ]);

  useEffect(() => {
    videoRef.current?.load();
  }, [videopath]);

  const [activeClient, setActiveClient] = useState<any>('');
  const [testimonialData, setTestimonialData] = useState<any>([]); 
  const [ClientFeedBack, setClientFeedBack] = useState<any>([]);

  const feedBackChange = async (data:any) => {
    setActiveClient(data);
    setClientFeedBack(data?.testimony[0])
  };
  
  const gettestimonialdata = () => {
    let data: any = {}
    data.title = Content?.title;
    data.subtitle = Content?.testimony_sub_title[0]?.children[0]?.text;
    data.secSubtitle = Content?.testimony_sub_title[0]?.children[2]?.text;
    data.testimony = Content?.testimony;
    setTestimonialData(data);
    setActiveClient(Content?.testimony[0]);
    setClientFeedBack(Content?.testimony[0]?.testimony[0])
  };

  const {data, error} = useSWR(Content?._id, gettestimonialdata)

  return (
    <section className={styles.sectionContainer}>
      <div
        className={`${styles.testimonialParent} d-flex flex-column align-items-center pt-5 pb-5`}
      >
        <div className={`position-relative ${styles.videoContainer}`}>
          <p className={styles.testimonialText}>{testimonialData?.title}</p>
          <p className={styles.clientFeedback}>
          {/* <PortableText value={testimonialData?.testimony_sub_title}/> */}
            <span style={{ color: "#081439" }}>{testimonialData?.subtitle} </span>
            <span style={{ color: "#d7ab48" }}>{testimonialData?.secSubtitle}</span>
          </p>
          <div className={`d-flex position-absolute ${styles.imgParent}`}>
            {testimonialData?.testimony &&
              testimonialData?.testimony?.map((data: any, index: any) => (
                <div key={index} className="position-relative">
                  <img
                    alt={`Av${index}`}
                    src={`${frameImgUrl(data?.photo?.asset?._ref)}`}
                    onClick={(e) => feedBackChange(data)}
                    width={86}
                    height={86}
                    className={data?._key === activeClient?._key ? styles.selectedAvatar : styles.unselectedAvatar}
                  />
                  {data?._key === activeClient?._key && (
                    <Image
                      alt=""
                      src="/assets/icons/ic-quotes.svg"
                      width={40}
                      height={40}
                      className={`position-absolute ${styles.quotes}`}
                    />
                  )}
                </div>
              ))}
          </div>

          <div className={`w-100 ${styles.videos}`}>
            {currentvideo.type === "video" ? (
              <>
                <Video content={currentvideo} />
              </>
            ) : (
              <Text quote={ClientFeedBack} />
            )}
          </div>

          <p className={`position-absolute ${styles.feedName}`}>
            {activeClient?.name}
          </p>
          <p className={`position-absolute ${styles.feedExplain}`}>
            {activeClient?.designation}
          </p>
        </div>
      </div>
    </section>
  );
}


