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
        <div className=''>
            <h2 className='text-center font-mono text-3xl font-bold py-5'>Suppre Heros ForEver</h2>

            <div className=" grid grid-cols-3 px-32   gap-y-10 gap-x-20 ">

                {
                    datas.map(data =>

                        <div key={data._id} className=" card-style ">

                            <div className=''>
                                <img className=' w-52 h-52 mx-auto my-2 ' src={data.picture} alt="" />
                            </div>
                            <div className="">
                                <h2 className='text-center py-2'>{data.toy_name}</h2>

                            </div>
                        </div>
                    )
                }


                {/* {
                    datas.map(data => 
                        <div key={data._id} className="card flex relative flex-column">

                            <div className='imgContainer'>
                                <img src={data.picture} alt="" />
                            </div>
                            <div className="content">
                                <h2>Card One</h2>
                                
                            </div>
                        </div>
                    )
                } */}

                {/* <div className="card flex relative flex-column">

                    <div className='imgContainer'>
                        <img src="" alt="" />
                    </div>
                    <div className="content">
                        <h2>Card One</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default ToyCard;