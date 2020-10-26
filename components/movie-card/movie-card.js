import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchMovieByID } from "../../services/api-services";
import Imdb from "../imdb/imdb";
import MovieInformations from "../movie-informations/movie-informations";
import styles from "./movie-card.module.scss";
import { useDispatch } from "react-redux";

export default function MovieCard({ imdbID }) {
  const router = useRouter();
  const dispatcher = useDispatch();

  const [movieDetails, setMovieDetails] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(async () => {
    const response = await searchMovieByID(imdbID);
    setMovieDetails(response);
    setIsReady(true);
  }, []);

  // set imdb id to redux as active movie then navigate app to related movie slug page
  function navigateToMovie() {
    dispatcher({ type: "SET_ACTIVEMOVIE", value: imdbID });
    let path =
      "/movie/" + movieDetails["Title"].toLowerCase().split(" ").join("-");
    router.push(path);
  }

  if (!isReady) {
    return <div />;
  }
  return (
    <div className={styles.container} onClick={() => navigateToMovie()}>
      <div className={styles.posterContainer}>
        <img src={movieDetails["Poster"]} />
      </div>
      <Imdb point={movieDetails["imdbRating"]} />
      <MovieInformations
        year={movieDetails["Year"]}
        title={movieDetails["Title"]}
        description={movieDetails["Plot"]}
      />
    </div>
  );
}
