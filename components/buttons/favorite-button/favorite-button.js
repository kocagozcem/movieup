import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./favorite-button.module.scss";

export default function FavoriteButton({ isAdded = false }) {
  const [active, setActive] = useState(isAdded);

  return (
    <button
      className={active ? styles.containerActive : styles.container}
      onClick={() => setActive(!active)}
    >
      <span className={styles.icon}>
        <FontAwesomeIcon icon={faHeart} size="2x" className={styles.icon} />
      </span>
      {active ? "Added to favorites" : "Add to favorites"}
    </button>
  );
}
