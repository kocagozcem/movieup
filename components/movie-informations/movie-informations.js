import styles from "./movie-informations.module.scss";

export default function MovieInformations({ year, title, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.year}>{year}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
