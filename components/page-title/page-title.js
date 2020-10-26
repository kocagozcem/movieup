import styles from "./page-title.module.scss";

export default function PageTitle({ title, search = undefined }) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        {title}
        {!!search ? (
          <span className={styles.searchText}>{" " + search}</span>
        ) : (
          ""
        )}
      </span>
    </div>
  );
}
