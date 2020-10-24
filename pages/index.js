import Head from "next/head";
import CarouselItem from "../components/carousel/carousel-item/carousel-item";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import MovieFilter from "../components/movie-filter/movie-filter";
import styles from "../styles/Home.module.scss";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Carousel from "../components/carousel/carousel";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Hero />
        <div className={styles.filterContainer}>
          <MovieFilter />
        </div>
        <Carousel />
      </main>
    </div>
  );
}
