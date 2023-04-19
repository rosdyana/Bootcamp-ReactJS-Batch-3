// Content jsx
import React, { useState, useEffect} from "react";
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
    // let count = 0;
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 0) {
            console.log(count, "useEffect");
        } else {
            console.log("init")
        }
        
    }, [count]);

    const handleAddCount = () => {
        setCount(count + 1);
        console.log(count);
    }

    return(
        <>
        <p>Nilai count = {count}</p>
        <button onClick={handleAddCount}>Tambah</button>
        </>
    )
}

export default Content;