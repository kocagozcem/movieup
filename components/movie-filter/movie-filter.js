import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./movie-filter.module.scss";

export default function MovieFilter() {
  return (
    <div className={styles.container}>
      <div className={styles.selects}>
        <select name="year" id="year">
          <option hidden>Year</option>
          <option value="saab">Saab</option>
        </select>

        <select name="type" id="type">
          <option hidden>Type</option>
          <option value="saab">Saab</option>
        </select>
      </div>

      <div className={styles.inputAndButton}>
        <input
          type="text"
          id="mName"
          name="mName"
          placeholder="Enter movie name here"
        />

        <button type="button">
          <span className={styles.buttonText}>Search</span>{" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
