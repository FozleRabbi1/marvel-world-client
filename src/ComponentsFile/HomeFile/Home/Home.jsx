import useTitle from "../../DynamicTitleFile/useTitle";
import Footer from "../../SharedFile/FooterFile/Footer";
import CotactUs from "../ContactUsFile/CotactUs";
import Header from "../HeaderFile/Header";
import AllTabs from "../TabCatagoryFile/AllTabs";
import ToyCard from "../ToyCardsFile/ToyCard";

const Home = () => {
    useTitle("home")
    return (

        <div>


            <Header></Header>
            <ToyCard></ToyCard>
            <AllTabs></AllTabs>
            <CotactUs></CotactUs>
            <Footer></Footer>



        </div>
    );
};

export default Home;