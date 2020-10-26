import { useRouter } from "next/router";
import Head from "next/head";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Header from "../components/header/header";
import MovieCard from "../components/movie-card/movie-card";
import MovieFilter from "../components/movie-filter/movie-filter";
import PageTitle from "../components/page-title/page-title";
import styles from "../styles/search-result.module.scss";
import { useState, useEffect } from "react";
import { searchMovieByTitle } from "../services/api-services";

export default function SearchResult() {
  const [searchVal, setSearchVal] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(async () => {
    setIsReady(false);
    const { search } = router.query;
    setSearchVal(search);
    let response = await searchMovieByTitle(search);
    setSearchResult(response["Search"]);
    setIsReady(true);
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>MovieUP | Search Result</title>
      </Head>

      {isReady ? (
        <main className={styles.main}>
          <Header />
          <Breadcrumbs crumbs="Search results" />
          <div className={styles.filterContainer}>
            <MovieFilter />
          </div>
          <PageTitle title="Search result" search={searchVal} />

          <div className={styles.movies}>
            {searchResult.map((result) => (
              <MovieCard key={result["imdbID"]} imdbID={result["imdbID"]} />
            ))}
          </div>
        </main>
      ) : (
        <main>loading</main>
      )}
    </div>
  );
}
