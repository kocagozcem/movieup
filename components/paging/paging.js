import styles from "./paging.module.scss";

export default function Paging() {
  function pageButton(text, style = {}, isActive = false) {
    return (
      <div
        className={isActive ? styles.active : styles.pageButton}
        style={style}
      >
        <span>{text}</span>
      </div>
    );
  }

  // TODO: paging not created
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {pageButton("Previous", { marginRight: "1.5rem" })}
        {pageButton("1")}
        {pageButton("2", {}, true)}
        {pageButton("3")}
        {pageButton("...")}
        {pageButton("Next", { marginLeft: "1.5rem" })}
      </div>
    </div>
  );
}
