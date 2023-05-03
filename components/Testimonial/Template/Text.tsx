import { PortableText } from "@portabletext/react";
import styles from "../Testimonial.module.scss";

interface TestimonialTextComponentProps {
  quote: any;
}
export const Text: React.FC<TestimonialTextComponentProps> = ({ quote }) => {
  return (
    <>
      <div className={`${styles.feedbackTextBlock}`}>
       <span className={`${styles.feedbackText}`}>
          <PortableText value={quote}/>
        </span>
      </div>
    </>
  );
};
