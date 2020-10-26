import { useEffect, useState } from "react";
import { searchMovieByID } from "../../../services/api-services";
import FavoriteButton from "../../buttons/favorite-button/favorite-button";
import Genre from "../../genre/genre";
import Imdb from "../../imdb/imdb";
import MovieInformations from "../../movie-informations/movie-informations";
import Poster from "../carousel-poster/carousel-poster";
import styles from "./carousel-item.module.scss";

export default function CarouselItem({ id }) {
  const [isReady, setIsReady] = useState(false);
  const [movieDetails, setMovieDetails] = useState();

  useEffect(async () => {
    // get movie by id and set ready
    const response = await searchMovieByID(id);
    setMovieDetails(response);
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Poster url={movieDetails["Poster"]} />
      </div>
      <div className={styles.informationsContainer}>
        <div className={styles.details}>
          <div className={styles.imdbContainer}>
            <Imdb point={movieDetails.imdbRating} />
          </div>
          <div className={styles.genreContainer}>
            {movieDetails["Genre"].split(", ").map((gen) => (
              <Genre genre={gen} className={styles.genre} key={gen} />
            ))}
          </div>
        </div>
        <div className={styles.informations}>
          <MovieInformations
            year={movieDetails["Year"]}
            title={movieDetails["Title"]}
            description={movieDetails["Plot"]}
          />
        </div>
        <div className={styles.actions}>
          <FavoriteButton movie={movieDetails} />
        </div>
      </div>
    </div>
  );
}
