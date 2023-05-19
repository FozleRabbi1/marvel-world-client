import loading from '.././LottiReactFile/Loading.json';
import Lottie from 'lottie-react'

const Loading = () => {
    return (
        <div>
            <Lottie className='my-auto h-96' animationData={loading} ></Lottie>
        </div>
    );
};

export default Loading;