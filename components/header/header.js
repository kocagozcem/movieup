import React from "react";
import Logo from "../logo/logo";
import SearchBar from "../search/search";
import HeaderItem from "./header-item/header-item";
import styles from "./header.module.scss";

export default function Header() {
  const [pageWidth, setPageWidth] = React.useState();
  const handleResize = () => setPageWidth(window.innerWidth);

  React.useEffect(() => {
    setPageWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <Logo />
        {pageWidth > 922 ? (
          <div className={styles.navigationLinks}>
            <HeaderItem headline="Home" />
            <HeaderItem headline="Favorite" color="gold" />
          </div>
        ) : null}
      </div>
      <div className={styles.searchbarContainer}>
        {pageWidth > 922 ? <SearchBar /> : null}
      </div>
    </div>
  );
}
