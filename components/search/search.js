import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./search.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <span>Enter Movie Name Here</span>
      <FontAwesomeIcon icon={faSearch} size="lg" />
    </div>
  );
}
