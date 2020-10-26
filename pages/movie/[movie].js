import { useRouter } from "next/router";
import Poster from "../../components/carousel/carousel-poster/carousel-poster";
import CarouselTitle from "../../components/carousel/carousel-title/carousel-title";
import Carousel from "../../components/carousel/carousel";
import Imdb from "../../components/imdb/imdb";
import FavoriteButton from "../../components/buttons/favorite-button/favorite-button";
import MovieInformations from "../../components/movie-informations/movie-informations";
import Genre from "../../components/genre/genre";
import styles from "../../styles/movie.module.scss";
import Head from "next/head";
import Header from "../../components/header/header";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  searchMovieByID,
  searchMovieByImdbTitle,
  searchMovieByTitle,
} from "../../services/api-services";

// Movie details page. created as slug page
export default function Movie() {
  const router = useRouter(); // router initialized to get slug
  const { movie } = router.query; // movie name on slug
  const imdbID = useSelector((state) => state.activeMovie["value"]); // Get selected movie's imdb id from redux

  const [movieDetails, setMovieDetails] = useState(); // details about selected movie
  const [relatedMovies, setRelatedMovies] = useState(); // related movies with selected movie
  const [inFavorites, setInFavorites] = useState(false); // if movie is already in favorites
  const [isReady, setIsReady] = useState(false); // is page ready?

  useEffect(async () => {
    // if page has imdb id of movie get details by id otherwise search slug on imdb and get movie
    // used slug to provide refreshable page and make user able to save/send details page link
    if (!!imdbID) {
      const favorites = JSON.parse(localStorage.getItem("favorites"));
      const inFavorites = !!favorites
        ? favorites.filter((fav) => fav["imdbID"] == imdbID).length > 0
        : false;
      setInFavorites(inFavorites);
      const response = await searchMovieByID(imdbID);
      setMovieDetails(response);
      getRelatedMovies(response);
      setIsReady(true);
    } else {
      if (!!movie) {
        const response = await searchMovieByImdbTitle(movie);
        setMovieDetails(response);
        getRelatedMovies(response);
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        const inFavorites = !!favorites
          ? favorites.filter((fav) => fav["imdbID"] == response["imdbID"])
              .length > 0
          : false;
        setInFavorites(inFavorites);
        setIsReady(true);
      }
    }
  }, [movie]);

  // Search movie title and get related movies
  async function getRelatedMovies(detailedMovie) {
    const response = await searchMovieByTitle(detailedMovie["Title"]);
    const related = response["Search"].filter(
      (movie) => movie["imdbID"] !== detailedMovie["imdbID"]
    );
    setRelatedMovies(related);
  }

  if (!isReady) {
    return <div>loading</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>MovieUP | {movieDetails["Title"]}</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <Breadcrumbs crumbs={movieDetails["Title"]} />
        <div className={styles.card}>
          <div className={styles.posterContainer}>
            <Poster url={movieDetails["Poster"]} />
          </div>
          <div className={styles.movieDetails}>
            <div className={styles.row}>
              <Imdb point={movieDetails["imdbRating"]} />
              <FavoriteButton isAdded={inFavorites} movie={movieDetails} />
            </div>
            <div className={styles.row}>
              <MovieInformations
                year={movieDetails["Year"]}
                title={movieDetails["Title"]}
                description={movieDetails["Plot"]}
              />
            </div>
            <div className={styles.row}>
              {movieDetails["Genre"].split(", ").map((gen) => (
                <Genre genre={gen} className={styles.genre} key={gen} />
              ))}
            </div>
          </div>
        </div>
        <CarouselTitle title="Releated Movies" />
        {!!relatedMovies ? <Carousel movies={relatedMovies} /> : ""}
      </main>
    </div>
  );
}
