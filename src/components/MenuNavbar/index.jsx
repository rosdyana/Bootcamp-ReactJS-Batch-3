import styles from "./styles.module.css";
import Button from "../Button";
import logoEdspert from "../../assets/img/logo.png";

/**
 * Navbar component
 * @returns {JSX.Element} - navbar component
 */
function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Left side of navbar */}
      <div className={styles["navbar-left"]}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={logoEdspert} alt="Edspert ID" />
        </div>
      </div>
      {/* Right side of navbar */}
      <div className={styles["navbar-right"]}>
        {/* Dropdown 1 */}
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Program</button>
          <div className={styles["dropdown-content"]}>
            <a href="https://edspert.id/pages/all-class-filter/program/4d673d3d#product-catalog">
              Webinar
            </a>
            <a href="https://edspert.id/pages/all-class-filter/program/4e413d3d#product-catalog">
              Bootcamp
            </a>
            <a href="https://edspert.id/pages/all-class-filter/program/4e513d3d#product-catalog">
              Online Course
            </a>
          </div>
        </div>
        {/* Dropdown 2 */}
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Bidang Ilmu</button>
          <div className={styles["dropdown-content"]}>
            <a href="https://edspert.id/pages/all-class-filter/bidang/4d513d3d#product-catalog">
              Tech Development
            </a>
            <a href="https://edspert.id/pages/all-class-filter/bidang/4e513d3d#product-catalog">
              Data
            </a>
          </div>
        </div>
        {/* Normal link */}
        <a
          href="https://edspert.id/pages/tentang-kami"
          className={styles["normal-link"]}
        >
          Tentang Edspert
        </a>
        {/* Button */}
        <Button round={true}>Masuk/Daftar</Button>
      </div>
    </nav>
  );
}

export default Navbar;
