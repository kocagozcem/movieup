import styles from "./header-item.module.scss";

export default function HeaderItem({ headline, color = "black" }) {
  return (
    <div className={styles.container}>
      <span className={styles.headline} style={{ color: color }}>
        {headline}
      </span>
    </div>
  );
}
