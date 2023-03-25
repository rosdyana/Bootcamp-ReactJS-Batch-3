import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import Content from "../../containers/Content";

/**
 *  Home component
 * @returns {JSX.Element} - home component
 */
const Home = () => {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
}

export default Home;