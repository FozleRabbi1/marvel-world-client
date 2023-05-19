import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import './AllTabs.css'
import { Link } from 'react-router-dom';
import loadingImgAnim from "../../LottiReactFile/loadingImgAnim.json";
import Lottie from 'lottie-react'

const AllTabs = () => {

    const [datas, setDatas] = useState([])
    const [cateName, setCateName] = useState("Ironman")
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    })

    useEffect(() => {
        console.log(cateName)
        fetch(`http://localhost:5000/categoryToyData?name=${cateName}`)
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [cateName])

    console.log(datas)


    return (
        <div className='my-10 px-5 mt-20'>

            <Tabs className="">
                <TabList>

                    <Tab onMouseUp={() => setLoader(true)} onClick={() => setCateName("Ironman")}>
                        Iron Man
                    </Tab>
                    <Tab onMouseUp={() => setLoader(true)} onClick={() => setCateName("Hulk")}>
                        Hulk
                    </Tab>
                    <Tab onMouseUp={() => setLoader(true)} onClick={() => setCateName("Mr-America")}>
                        Mr-America
                    </Tab>

                </TabList>

                <TabPanel>
                    <h2 className='text-center font-mono text-2xl font-bold py-2 text-red-500'>Iron Man</h2>

                    {
                        loader ? <div className="h-80"> <Lottie className='h-72 mt-6' animationData={loadingImgAnim}></Lottie> </div> :
                            <div className="grid md:grid-cols-3 justify-center  text-center  gap-10 px-10 py-5 ">
                                {
                                    datas?.map(data =>

                                        < div data-aos="zoom-in" key={data._id} className='drop-shadow-lg single-data-style' >
                                            <div className=" flex flex-col  ">
                                                <img className=' mx-auto' src={data.picture} alt="" />
                                                <h2>Name : {data.toy_name}</h2>
                                                <p className=' text-red-600 ' >price : {data.price}</p>
                                                <p>rating : {data.rating}</p>

                                                    <Link to={`viewDitles/${data._id}`} className=' button '>View Ditles</Link>

                                            </div>
                                        </ div>

                                    )
                                }
                            </div>
                    }

                </TabPanel>

                <TabPanel>
                    <h2 className='text-center font-mono text-2xl font-bold py-2 text-green-500'>Hulk</h2>
                    {
                        loader ? <div className="h-80"> <Lottie className='h-72  mt-6' animationData={loadingImgAnim}></Lottie> </div> :
                            <div className="grid md:grid-cols-3 justify-center  text-center  gap-10 px-10 py-5 ">
                                {
                                    datas?.map(data =>

                                        < div data-aos="zoom-in" key={data._id} className='drop-shadow-lg single-data-style' >
                                            <div className=" flex flex-col  ">
                                                <img className=' mx-auto' src={data.picture} alt="" />
                                                <h2>Name : {data.toy_name}</h2>
                                                <p className=' text-red-600 ' >price : {data.price}</p>
                                                <p>rating : {data.rating}</p>

                                                <Link to={`viewDitles/${data._id}`} className=' button '>View Ditles</Link>

                                            </div>
                                        </ div>

                                    )
                                }
                            </div>
                    }

                </TabPanel>

                <TabPanel>
                    <h2 className='text-center font-mono text-2xl font-bold py-2 text-blue-500'>Mr-America</h2>
                    {
                        loader ? <div className="h-80"> <Lottie className='h-72 mt-6' animationData={loadingImgAnim}></Lottie> </div> :
                            <div className="grid md:grid-cols-3 justify-center  text-center  gap-10 px-10 py-5 ">
                                {
                                    datas?.map(data =>

                                        < div data-aos="zoom-in" key={data._id} className='drop-shadow-lg single-data-style' >
                                            <div className=" flex flex-col  ">
                                                <img className=' mx-auto' src={data.picture} alt="" />
                                                <h2>Name : {data.toy_name}</h2>
                                                <p className=' text-red-600 ' >price : {data.price}</p>
                                                <p>rating : {data.rating}</p>

                                                <Link to={`viewDitles/${data._id}`} className=' button '>View Ditles</Link>

                                            </div>
                                        </ div>

                                    )
                                }
                            </div>
                    }

                </TabPanel>

            </Tabs>

            <hr />

        </div>
    );
};

export default AllTabs;