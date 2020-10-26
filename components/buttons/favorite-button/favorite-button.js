import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./favorite-button.module.scss";

export default function FavoriteButton({ isAdded = false, movie }) {
  const [active, setActive] = useState(isAdded);

  function addToFavorites() {
    // get favorite movies from local storage
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (active) {
      // remove movie from favorites
      favorites = favorites.filter((fav) => fav["imdbID"] !== movie["imdbID"]);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setActive(!active);
    } else {
      // add movie to favorites
      favorites = [...favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setActive(!active);
    }
  }

  return (
    <button
      className={active ? styles.containerActive : styles.container}
      onClick={() => addToFavorites()}
    >
      <span className={styles.icon}>
        <FontAwesomeIcon icon={faHeart} size="2x" className={styles.icon} />
      </span>
      {active ? "Added to favorites" : "Add to favorites"}
    </button>
  );
}
