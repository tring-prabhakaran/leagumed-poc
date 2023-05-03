import styles from "./Skeleton.module.scss";
export default function SkeletonComponent() {
  return (
    <section>
      <div className={styles.skeletonParent}>
        <div className={`w-100 ${styles.banner}`}>
          <div className={`${styles.header}`}></div>

          <div
            className={`d-flex flex-column justify-content-center placeholder-glow ${styles.body}`}
          >
            <div className={`placeholder ${styles.bodyHead}`}></div>
            <div className={`placeholder ${styles.bodyHead}`}></div>
            <div className={`placeholder ${styles.bodyDesc}`}></div>
            <div className={`placeholder ${styles.bodyDesc}`}></div>
            <div className={`placeholder ${styles.bodyDesc}`}></div>
            <div className={`d-flex gap-5 flex-wrap ${styles.bannerBtn}`}>
              <div className={`placeholder ${styles.bodyBtn}`}></div>
              <div className={`placeholder ${styles.bodyBtn}`}></div>
            </div>
          </div>
        </div>

        <div
          className={`d-flex flex-wrap justify-content-center placeholder-glow ${styles.partner}`}
        >
          <div className={`placeholder ${styles.partnerLogo}`} />
          <div className={`placeholder ${styles.partnerLogo}`} />
          <div className={`placeholder ${styles.partnerLogo}`} />
          <div className={`placeholder ${styles.partnerLogo}`} />
          <div className={`placeholder ${styles.partnerLogo}`} />
          <div className={`placeholder ${styles.partnerLogo}`} />
        </div>

        <div
          className={`d-flex gap-5 align-items-center placeholder-glow ${styles.membership}`}
        >
          <div className={`placeholder ${styles.imagePerk}`}></div>


          <div className={`placeholder-glow gap-5 d-flex flex-column justify-content-center align-items-center ${styles.card}`}>

<div className={`placeholder ${styles.cardData}`}></div>
<div className={`placeholder ${styles.cardData}`}></div>
<div className={`placeholder ${styles.cardData}`}></div>
<div className={`placeholder ${styles.cardData}`}></div>
<div className={`placeholder ${styles.cardData}`}></div>

          </div>



        </div>

        <div className={`d-flex flex-column ${styles.testimonial}`}>
          <div className="d-flex flex-column gap-5 placeholder-glow">
            <div className={`placeholder ${styles.smallText}`}></div>
            <div className={`placeholder ${styles.bigText}`}></div>
          </div>

          <div className={`position-relative ${styles.videoContainer}`}>
            <div
              className={`placeholder-glow  position-absolute d-flex ${styles.imgParent}`}
            >
              <div className={`placeholder ${styles.roundImg}`}></div>
              <div className={`placeholder ${styles.roundImg}`}></div>
              <div className={`placeholder ${styles.roundImg}`}></div>
            </div>

            <div className={`placeholder ${styles.box}`}></div>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}
