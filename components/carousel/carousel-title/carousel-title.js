import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./carousel-title.module.scss";

export default function CarouselTitle({ title }) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <span>
        View More <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </div>
  );
}
