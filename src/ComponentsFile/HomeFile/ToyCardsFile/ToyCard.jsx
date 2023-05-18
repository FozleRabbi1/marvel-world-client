import { useEffect, useState } from 'react';
import './ToyCard.css';

const ToyCard = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/allToysDatas")
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    return (
        <div className='bg-gray-200 pb-4'>
            <h2 className='text-center font-mono text-3xl font-bold py-5'>Suppre Heros ForEver</h2>

            <div className=" grid md:grid-cols-4 px-6 md:px-10  gap-10  md:gap-y-8 md:gap-x-8 ">

                {
                    datas.map(data =>

                        <div key={data._id} data-aos="fade-up" className=" card-style ">

                            <div className=''>
                                <img className=' w-80 h-80 md:w-52 md:h-52 mx-auto my-2 ' src={data.picture} alt="" />
                            </div>
                            <div className="">
                                <h2 className='text-center text-sm py-2'>{data.toy_name}</h2>

                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    );
};

export default ToyCard;