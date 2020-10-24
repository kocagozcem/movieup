import FavoriteButton from "../../buttons/favorite-button/favorite-button";
import Genre from "../../genre/genre";
import Imdb from "../../imdb/imdb";
import MovieInformations from "../../movie-informations/movie-informations";
import Poster from "../../poster/poster";
import styles from "./carousel-item.module.scss";

export default function CarouselItem() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Poster />
      </div>
      <div className={styles.informationsContainer}>
        <div className={styles.details}>
          <div className={styles.imdbContainer}>
            <Imdb point="9.2" />
          </div>
          <div className={styles.genreContainer}>
            {["Action", "Biography"].map((gen) => (
              <Genre genre={gen} className={styles.genre} key={gen} />
            ))}
          </div>
        </div>
        <div className={styles.informations}>
          <MovieInformations
            year={1992}
            title="The Godfather"
            description="The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
          />
        </div>
        <div className={styles.actions}>
          <FavoriteButton isAdded={false} />
        </div>
      </div>
    </div>
  );
}
