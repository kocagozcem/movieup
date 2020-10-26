import styles from "./breadcrumbs.module.scss";

export default function Breadcrumbs({ crumbs }) {
  return (
    <div className={styles.container}>
      <span className={styles.crumbs}>
        <span className={styles.root}>Home /</span> {crumbs}
      </span>
    </div>
  );
}
