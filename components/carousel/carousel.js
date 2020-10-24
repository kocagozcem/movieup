import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselItem from "./carousel-item/carousel-item";
import styles from "./carousel.module.scss";

export default function Carousel({ item }) {
  function arrowButton() {
    return (
      <div className={styles.arrowButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={"lg"} />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
      <div className={styles.leftArrow}>{arrowButton()}</div>
      <div className={styles.rightArrow}>{arrowButton()}</div>
    </div>
  );
}
