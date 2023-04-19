// Content jsx
import React, { useState } from "react";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Spacer from "../../components/Spacer";
import styles from "./styles.module.css";
import cardLogo from "../../assets/img/card-logo.png";

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

    // Generate data for cards
    const cards = [
        {
            id: 1,
            title: "Card 1",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 2,
            title: "Card 2",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 3,
            title: "Card 3",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 4,
            title: "Card 4",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 5,
            title: "Card 5",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 6,
            title: "Card 6",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 7,
            title: "Card 7",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 8,
            title: "Card 8",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 9,
            title: "Card 9",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 10,
            title: "Card 10",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 11,
            title: "Card 11",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
        {
            id: 12,
            title: "Card 12",
            subtitle: "Subtitle",
            logoSrc: cardLogo,
            description: "this is card description",
            price: "1000000",
            discountedPrice: "500000",
        },
    ];

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
    )
}

export default Content;