import notFound from '../../ComponentsFile/LottiReactFile/NotFound.json'
import Lottie from 'lottie-react'
const NoteFound = () => {
    return (
        <div>
            <div className=" h-96 ">
                <Lottie className='h-96 mt-12' animationData={notFound} ></Lottie>
            </div>
        </div>
    );
};

export default NoteFound;