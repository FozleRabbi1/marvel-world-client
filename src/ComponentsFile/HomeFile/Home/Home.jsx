import useTitle from "../../DynamicTitleFile/useTitle";
import Footer from "../../SharedFile/FooterFile/Footer";
import CotactUs from "../ContactUsFile/CotactUs";
import Header from "../HeaderFile/Header";
import AllTabs from "../TabCatagoryFile/AllTabs";
import ToyCard from "../ToyCardsFile/ToyCard";
import preloader from '../../LottiReactFile/Preloader.json'
import Lottie from 'lottie-react'
import { useEffect, useState } from "react";
import Kidex from "../KidesFile/Kidex";
// import Count from "../CountUpFile/Count";

const Home = () => {
    useTitle("Home")
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 500);
    })

    return (

        <div>
            {
                loader ? <div className="flex justify-center h-96 items-center ">
                    <Lottie className=" w-40 h-40  mt-14" animationData={preloader}></Lottie>
                </div>
                    :
                    <div>
                        <Header></Header>
                        <ToyCard></ToyCard>
                        <AllTabs></AllTabs>
                        {/* <Count></Count> */}
                        <Kidex></Kidex>
                        <CotactUs></CotactUs>
                        <Footer></Footer>
                    </div>
            }
        </div>
    );
};

export default Home;