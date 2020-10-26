import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./search.module.scss";

export default function SearchBar() {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");

  // Search movie by title
  function searchMovie() {
    router.push(`/search-result?search=${searchVal}`);
  }

  return (
    <div className={styles.container}>
      <input
        onChange={(e) => setSearchVal(e.target.value)}
        type="text"
        id="search"
        name="search"
        placeholder="Enter movie name here"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            searchMovie();
          }
        }}
      />
      <Link href={`/search-result?search=${searchVal}`}>
        <span>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </span>
      </Link>
    </div>
  );
}
