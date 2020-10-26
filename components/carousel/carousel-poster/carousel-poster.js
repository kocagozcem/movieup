import styles from "./carousel-poster.module.scss";

export default function Poster({ url }) {
  return (
    <div className={styles.container}>
      <img src={url} />
    </div>
  );
}
