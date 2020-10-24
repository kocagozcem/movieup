import styles from "./imdb.module.scss";

export default function Imdb({ point }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={"/assets/images/IMDB-icon.png"} />
      <span className={styles.score}>{point}</span>
    </div>
  );
}
