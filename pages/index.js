import Head from "next/head";
import CarouselTitle from "../components/carousel/carousel-title/carousel-title";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import MovieFilter from "../components/movie-filter/movie-filter";
import styles from "../styles/Home.module.scss";
import Carousel from "../components/carousel/carousel";
import { useEffect } from "react";

const popularMovies = [
  {
    imdbID: "tt0120737",
  },
  {
    imdbID: "tt0068646",
  },
  {
    imdbID: "tt0108052",
  },
  {
    imdbID: "tt0108052",
  },
];

export default function Home() {
  useEffect(async () => {}, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>MovieUP | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Hero />
        <div className={styles.filterContainer}>
          <MovieFilter onHero={true} />
        </div>
        <CarouselTitle title="Popular Movies" />
        <Carousel movies={popularMovies} />
      </main>
    </div>
  );
}
