import styles from "./logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.container}>
      <span>
        Movie<span className={styles.up}>UP</span>
      </span>
    </div>
  );
}
