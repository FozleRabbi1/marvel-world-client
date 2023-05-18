import './Header.css'
import circkeAnimaion from '../../LottiReactFile/CircleAnimation.json'
import Lottie from 'lottie-react'

const Header = () => {
    return (
        <div>
            {/* https://preview.themeforest.net/item/kidol-kids-toys-store-ecommerce-html-template/full_screen_preview/33337677?_ga=2.22748859.1031248380.1684343620-287098857.1682955932 */}

            <div className="banner-section">
                <h2 className="text-center bg-slate-100 py-4 text-xl">Give The Gift Of Your Children Everyday</h2>

                <div className="banner grid grid-cols-2">
                    <div className="text mt-28 ms-20">
                        <h2 className="text-6xl font-bold">Best Kids Store <br /> & Online Shop</h2>
                        <p className="mt-4">Take Care Of Your Children In Every Monent</p>
                        <button className="btn btn-outline btn-success mt-3">Shop Now</button>

                    </div>
                    <div className="image  flex justify-center">
                        {/* https://i.ibb.co/GktH6mt/fling3.png
                        https://i.ibb.co/yRYTqKv/fling2.png
                        https://i.ibb.co/hXJmpg3/fling.png */}
                        <div className="animation  ">
                            <Lottie className='lottie  ' animationData={circkeAnimaion}></Lottie>
                        </div>
                        <div className=" absolute">
                            <img className="image-upDown h-96 mt-10   " src="https://i.ibb.co/G7qQnML/fling3-removebg-preview.png" alt="" />

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Header;