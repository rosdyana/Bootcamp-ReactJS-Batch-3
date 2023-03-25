import styles from './styles.module.css';
import convertToRupiah from '../../helpers/convertToRupiah';

/**
 * Card component
 * @param {string} title - title of the card
 * @param {string} subtitle - subtitle of the card
 * @param {string} description - description of the card
 * @param {number} price - price of the product
 * @param {number} discountedPrice - discounted price of the product
 * @param {string} logoSrc - logo source
 * @returns {JSX.Element} - card component
 */
const Card = ({ title, subtitle, description, price, discountedPrice, logoSrc }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={logoSrc} alt="Logo" />
                </div>
                <div className={styles.headerText}>
                    <div className={styles.subtitle}>{subtitle}</div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.text}>
                    <div className={styles.titleBody}>{title}</div>
                    <div className={styles.subtitleBody}>{subtitle}</div>
                    <div className={styles.descriptionBody}>{description}</div>
                    <div className={styles.price}>
                        <div className={styles.normalPrice}>{convertToRupiah(price)}</div>
                        <div className={styles.discountedPrice}>{convertToRupiah(discountedPrice)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
