// Header jsx
import MenuNavbar from "../../components/MenuNavbar";
import HeroBanner from "../../components/HeroBanner";
import style from "./styles.module.css";

/**
 * Header component
 * @returns {JSX.Element} - header component
 */
const Header = () => {
  return (
    <div className={style["container-header"]}>
      <MenuNavbar />
      <HeroBanner />
    </div>
  );
};

export default Header;
