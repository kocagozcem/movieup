import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.coloredBg}>
        <div className={styles.content}>
          <img
            src="/assets/images/circle-element.png"
            className={styles.dots}
          />
          <div className={styles.headline}>
            <div className={styles.welcome}>
              <h2>Welcome to</h2>
              <h1>MovieUP</h1>
            </div>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
