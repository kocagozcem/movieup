import Link from "next/link";
import styles from "./header-item.module.scss";

export default function HeaderItem({ headline, href, color = "black" }) {
  return (
    <div className={styles.container}>
      <Link href={href}>
        <span className={styles.headline} style={{ color: color }}>
          {headline}
        </span>
      </Link>
    </div>
  );
}
