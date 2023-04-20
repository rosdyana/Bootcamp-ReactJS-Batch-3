// Content jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Spacer from "../../components/Spacer";
import styles from "./styles.module.css";
import { getProducts } from "../../store/product/action";

/**
 * Content component
 * @returns {JSX.Element} - content component
 */
function Content() {
  const { entities } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(getProducts());
  };

  useEffect(() => {
    console.log("fetchProducts");
    fetchProducts();
  }, []);
  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <>
      <div className={styles.container}>
        <Spacer>
          <div className={styles.cardGrid}>
            {entities.map((card, index) => {
              return (
                <Card
                  key={card.id}
                  title={card.name}
                  description={card.description}
                  price={card.price}
                  discountedPrice={card.price}
                  productImage={card.productImage}
                  onClick={() => goToDetail(card.id)}
                />
              );
            })}
          </div>
        </Spacer>
      </div>
    </>
  );
}

export default Content;
