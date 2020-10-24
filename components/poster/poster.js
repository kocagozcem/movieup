import styles from "./poster.module.scss";

export default function Poster() {
  return (
    <div className={styles.container}>
      <img
        src={
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg"
        }
      />
    </div>
  );
}
