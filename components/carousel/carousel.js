import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselItem from "./carousel-item/carousel-item";
import styles from "./carousel.module.scss";

export default function Carousel({ movies = [] }) {
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
        {movies.map((movie) => (
          <CarouselItem id={movie["imdbID"]} key={movie["imdbID"]} />
        ))}
      </div>
      {/* if has more than 3 movies show arrow buttons (TODO: carousel not working) */}
      {movies.length > 3 ? (
        <>
          <div className={styles.leftArrow}>{arrowButton()}</div>
          <div className={styles.rightArrow}>{arrowButton()}</div>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
