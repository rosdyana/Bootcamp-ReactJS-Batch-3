import styles from "./styles.module.css";

/**
 * Button component
 * @param {string} children - children of the component
 * @param {boolean} round - round button
 * @returns {JSX.Element} - button component
 */
const Button = ({ children, round }) => {
    const buttonStyle = round ? styles.roundButton : styles.button;
    return <button className={buttonStyle}>{children}</button>;
};

export default Button;
