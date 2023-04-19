import styles from "./styles.module.css";
import Button from "../Button";
import heroImage from "../../assets/img/hero-image.png";

/**
 * Hero banner component
 * @returns {JSX.Element} - hero banner component
 */
function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-content"]}>
        <h1 className={styles.title}>Jadi expert bersama edspert.id</h1>
        <p className={styles.subtitle}>
          Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
          bidangnya, untuk siapkan karir impian anda.
        </p>
        <Button round={false}>Masuk/Daftar</Button>
      </div>
      <div className={styles["hero-image"]}>
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default HeroBanner;
