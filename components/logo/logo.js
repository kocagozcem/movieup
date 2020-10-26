import { useRouter } from "next/router";
import styles from "./logo.module.scss";

export default function Logo() {
  const router = useRouter();

  // navigate to home page when user pressed to logo
  function navigateToHome() {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <span onClick={() => navigateToHome()}>
        Movie<span className={styles.up}>UP</span>
      </span>
    </div>
  );
}
