import { useEffect, useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import Footer from "../SharedFile/FooterFile/Footer";
import preloader from '../../ComponentsFile/LottiReactFile/Preloader.json'
import Lottie from 'lottie-react'
import useTitle from "../DynamicTitleFile/useTitle";

const AllToys = () => {
    useTitle("All Toys")
    const [name, setName] = useState('')
    const [datas, setDatas] = useState([])
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 500);
    })

    useEffect(() => {
        fetch("http://localhost:5000/allToysDatas")
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/allToysDatasName?toyName=${name}`)
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [name])

    const searchFileHeandler = (e) => {
        e.preventDefault();
        const value = e.target.searchFiled.value;
        setName(value)
        e.target.reset()

    }
    return (
        <div>
            {
                loader ? <div className="flex justify-center h-96 items-center ">
                    <Lottie className=" w-40 h-40  mt-14" animationData={preloader}></Lottie>
                </div> :

                    <div className="">
                        <h2 className="text-center font-mono text-2xl font-bold py-2">See All Toyes</h2>
                        <div className="search-fild flex justify-center w-full">

                            <form onSubmit={searchFileHeandler} action="" className="md:w-6/12  flex justify-center ">

                                <input placeholder="Search Your Favourite Toy" className="bg-gray-200 ps-5 border mb-6 w-10/12 py-2 rounded-3xl " name="searchFiled" type="text" />
                                <button className="  mt-0 w-14 md:w-11 h-10 -ml-10 md:-ml-10 flex  items-center rounded-full bg-red-500 text-center"> <FaSearchPlus className="ms-3.5 md:ms-3 text-white text-lg"></FaSearchPlus> </button>

                                <input onClick={() => setName("")} className=" w-32 h-10 ms-2 rounded-full bg-red-500" type="submit" value="Show All" />

                            </form>
                        </div>

                        <div className="overflow-x-auto w-full ">
                            <table className="table w-full ">
                                {/* head */}
                                <thead >
                                    <tr className=" text-black">
                                        <th className="bg-gray-600 text-white">No</th>
                                        <th className="bg-gray-600 text-white" >Seller</th>
                                        <th className="bg-gray-600 text-white" >Sub-category</th>
                                        <th className="bg-gray-600 text-white" >Price</th>
                                        <th className="bg-gray-600 text-white" >Quantity</th>
                                        <th className="bg-gray-600 text-white" >Show More</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {/* row 1 */}
                                    {
                                        datas.slice(0, 20).map((data, index) =>
                                            <tr key={data._id} className="">
                                                <th className="bg-gray-500 text-white">
                                                    <label>
                                                        {index + 1}
                                                    </label>
                                                </th>
                                                <td className="bg-gray-500 text-white">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={data.picture} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-sm ">{data.toy_name}</div>
                                                            <div className="text-sm opacity-50 text-green-400">{data.seller_name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="bg-gray-500 text-white">
                                                    {data.Sub_category}
                                                </td>
                                                <td className="bg-gray-500 text-red-400">{data.price} $=/</td>
                                                <td className="bg-gray-500 text-white"> {data.available_quantity} </td>
                                                <th className="bg-gray-500 text-white">
                                                    <button className=" bg-green-300 rounded-lg px-5 py-1 ">details</button>
                                                </th>
                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>
                        </div>

                        <div className="footer w-full pt-20">
                        </div>
                        <Footer></Footer>
                    </div>
            }

        </div>
    );
};

export default AllToys;