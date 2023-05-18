import useTitle from "../../DynamicTitleFile/useTitle";
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



        </div>
    );
};

export default Home;