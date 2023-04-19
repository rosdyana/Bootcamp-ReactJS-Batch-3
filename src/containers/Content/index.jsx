// Content jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Spacer from "../../components/Spacer";
import styles from "./styles.module.css";
import cardLogo from "../../assets/img/card-logo.png";
import { getProducts } from "../../redux/actions/product";

/**
 * Content component
 * @returns {JSX.Element} - content component
 */
function Content() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 500;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const { cards } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    dispatchEvent(getProducts());
  };

  return (
    <>
      <div className={styles.container}>
        <Spacer>
          <div className={styles.cardGrid}>
            {cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                price={card.price}
                discountedPrice={card.discountedPrice}
                logoSrc={card.logoSrc}
              />
            ))}
          </div>
        </Spacer>
        <Spacer>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Spacer>
      </div>
    </>
  );
}

export default Content;
