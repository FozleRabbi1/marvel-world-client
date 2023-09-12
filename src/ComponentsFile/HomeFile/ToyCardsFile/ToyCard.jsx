import { useEffect, useState } from 'react';
import './ToyCard.css';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const ToyCard = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        // fetch("http://localhost:5000/allToysDatas")
        fetch("https://marvel-toy-server.vercel.app/allToysDatas")
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])


    return (
        <div className=' pb-4'>
            <h2 className='headlins-style text-center font-mono text-3xl font-bold my-5'>All Suppre Heros </h2>

            <div className='bg-gray-200 py-10'>
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 md:px-10 gap-3 md:gap-y-8 md:gap-x-8 ">

                    {
                        datas.map(data =>

                            <div key={data._id} className=" card-style ">

                                <div className=''>
                                    <img className='w-full h-72 mx-auto' src={data.picture} alt="" />
                                </div>
                                <div className=" p-2 text-sm">
                                    <h2 className=''>{data.toy_name}</h2>
                                    <p>Category : {data.Sub_category}</p>
                                    <p>Price : {data.price}</p>
                                    <span className='flex justify-between'>
                                        <Link className='bg-sky-500 rounded-full px-2 py-1 text-white font-serif hover:bg-sky-700 duration-700' to={`viewDitles/${data._id}`} >View Details</Link>
                                        <Rating
                                            style={{ maxWidth: 110, justifyContent: "center", margin: "" }}
                                            value={data.rating}
                                            readOnly
                                        />
                                    </span>

                                </div>
                            </div>
                            
                        )
                    }


                </div>
            </div>

        </div>
    );
};

export default ToyCard;