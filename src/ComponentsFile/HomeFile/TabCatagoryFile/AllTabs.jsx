import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import './AllTabs.css'
import { Link } from 'react-router-dom';

const AllTabs = () => {

    const [datas, setDatas] = useState([])
    const [cateName, setCateName] = useState("Ironman")

    useEffect(() => {
        console.log(cateName)
        fetch(`http://localhost:5000/categoryToyData?name=${cateName}`)
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [cateName])

    console.log(datas)


    return (
        <div className='my-10 px-5 mt-20'>

            <Tabs className="bg-gray-100">
                <TabList>

                    <Tab onClick={() => setCateName("Ironman")}>
                        Iron Man
                    </Tab>
                    <Tab onClick={() => setCateName("Hulk")}>
                        Hulk
                    </Tab>
                    <Tab onClick={() => setCateName("Mr-America")}>
                        Mr-America
                    </Tab>

                </TabList>

                <TabPanel>

                    <div className="grid md:grid-cols-3 justify-center  text-center  gap-10 px-10 py-5 ">
                        {
                            datas?.map(data =>

                                < div key={data._id} className='drop-shadow-lg single-data-style' >
                                    <div className=" flex flex-col  ">
                                        <img className=' mx-auto' src={data.picture} alt="" />
                                        <h2>Name : {data.toy_name}</h2>
                                        <p className=' text-red-600 ' >price : {data.price}</p>
                                        <p>rating : {data.rating}</p>

                                        <div className="button">
                                            <Link className='  '>View Ditles</Link>
                                        </div>

                                    </div>
                                </ div>

                            )
                        }
                    </div>

                </TabPanel>

                <TabPanel>
                <div className="grid md:grid-cols-3 justify-center  text-center  gap-10 px-10 py-5 ">
                        {
                            datas?.map(data =>

                                < div key={data._id} className='drop-shadow-lg single-data-style' >
                                    <div className=" flex flex-col  ">
                                        <img className=' mx-auto' src={data.picture} alt="" />
                                        <h2>Name : {data.toy_name}</h2>
                                        <p className=' text-red-600 ' >price : {data.price}</p>
                                        <p>rating : {data.rating}</p>

                                        <div className="button">
                                            <Link className='  '>View Ditles</Link>
                                        </div>

                                    </div>
                                </ div>

                            )
                        }
                    </div>

                </TabPanel>

                <TabPanel>
                <div className="grid md:grid-cols-3 justify-center  text-center  gap-10 px-10 py-5 ">
                        {
                            datas?.map(data =>

                                < div key={data._id} className='drop-shadow-lg single-data-style' >
                                    <div className=" flex flex-col  ">
                                        <img className=' mx-auto' src={data.picture} alt="" />
                                        <h2>Name : {data.toy_name}</h2>
                                        <p className=' text-red-600 ' >price : {data.price}</p>
                                        <p>rating : {data.rating}</p>

                                        <div className="button">
                                            <Link className='  '>View Ditles</Link>
                                        </div>

                                    </div>
                                </ div>

                            )
                        }
                    </div>

                </TabPanel>

            </Tabs>

        </div>
    );
};

export default AllTabs;