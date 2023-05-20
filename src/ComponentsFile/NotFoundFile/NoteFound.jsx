import { Link } from 'react-router-dom';
import notFound from '../../ComponentsFile/LottiReactFile/NotFound.json'
import Lottie from 'lottie-react'
import useTitle from '../DynamicTitleFile/useTitle';
const NoteFound = () => {
    useTitle("NotFound")
    return (
        <div>
            <div className=" w-full flex justify-center my-5">
            <Link className='bg-green-300 px-10 py-2 rounded-full  font-bold text-2xl' to={"/"}>Back To Home </Link>
            </div>

            <div className=" h-96 ">
                <Lottie className='h-96 mt-12' animationData={notFound} ></Lottie>
            </div>
        </div>
    );
};

export default NoteFound;