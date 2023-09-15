import './ToyCraze.css';
import { FcAddDatabase, FcAutomotive, FcBusinesswoman, FcButtingIn, FcCalculator, FcCustomerSupport } from "react-icons/fc";

const ToyCraze = () => {

    const someInfo = [
        {
            icon : <FcAddDatabase></FcAddDatabase> ,
            heading: "Unmatched Selection",
            description: "Discover a diverse range of top-quality vehicles, ensuring you find the perfect fit for your lifestyle."
        },
        {
            icon : <FcBusinesswoman></FcBusinesswoman> ,
            heading: "Customer-Centric Approach",
            description: "Experience exceptional service from our dedicated team, committed to your satisfaction."
        },
        {
            icon : <FcButtingIn></FcButtingIn> ,
            heading: "Best Deals and Savings",
            description: "Enjoy competitive pricing, exclusive discounts, and special offers on your dream car."
        },
        {
            icon : <FcCalculator></FcCalculator> ,
            heading: "Seamless Financing",
            description: "Benefit from hassle-free financing options tailored to your budget and needs."
        },
        {
            icon : <FcAutomotive></FcAutomotive> ,
            heading: "Transparent Transactions",
            description: "Trust in our upfront pricing and clear documentation for a stress-free buying process."
        },
        {
            icon : <FcCustomerSupport></FcCustomerSupport> ,
            heading: "Expert Guidance",
            description: "Rely on our knowledgeable staff for expert advice on models, features, and more."
        }
    ]

    return (
        <div className="toyCraze-main-div  h-screen flex items-center ">

            <div className="text-center content-div ">
                <div className="text-div w-full md:w-7/12 lg:w-6/12 mx-auto -mt-20 mb-20"> 
                    <h2 className='text-2xl mb-2'>Why Toy Craze?</h2>
                    <p>At toy Craze, we stand out as the ideal choice for all your toy needs.Our dedication to excellence, combined with our customer-centric approach, ensures an unparalleled experience for our valued clients.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10 px-10">
                    {
                        someInfo.map((data, i) =>
                            <div className='single-cards' key={i}>
                                <span className=' text-5xl w-10 block mx-auto mb-1'>{data.icon}</span>
                                <h2>{data.heading}</h2>
                                <p>{data.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default ToyCraze;