import styles from "./genre.module.scss";

export default function Genre({ genre }) {
  return (
    <div className={styles.container}>
      <span className={styles.genreText}>{genre}</span>
    </div>
  );
}
