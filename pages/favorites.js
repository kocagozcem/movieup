import Head from "next/head";
import { useEffect, useState } from "react";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Header from "../components/header/header";
import MovieCard from "../components/movie-card/movie-card";
import MovieFilter from "../components/movie-filter/movie-filter";
import PageTitle from "../components/page-title/page-title";
import Paging from "../components/paging/paging";
import styles from "../styles/favorites.module.scss";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Get favorites list from local host
  useEffect(async () => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>MovieUP | Favorites</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <Breadcrumbs crumbs="Favorites" />
        <div className={styles.filterContainer}>
          <MovieFilter />
        </div>
        <PageTitle title="Favorites" />

        <div className={styles.movies}>
          {favorites.map((result) => (
            <MovieCard key={result["imdbID"]} imdbID={result["imdbID"]}>
              {console.log(result["imdbID"])}{" "}
            </MovieCard>
          ))}
        </div>
        <Paging />
      </main>
    </div>
  );
}
