import "./kids.css"
const Kidex = () => {
    const images = [
        "https://cdn10.bestreviews.com/images/v4desktop/image-full-page-cb/image-1-71c5bc.jpg?p=w1228",
        "https://static-01.daraz.pk/p/a75be42681d2043870b69e6322668514.jpg",
        "https://m.media-amazon.com/images/I/81h38tZxY3L._AC_SX425_.jpg",
        "https://m.media-amazon.com/images/I/81tQarUO9KL.jpg",
        "https://ibuygreat.co.uk/cdn/shop/products/01.jpg?v=1673328050",

        "https://momlovesbest.com/wp-content/uploads/2023/01/Marvel-Spider-Man-Talking-Action-Figure.jpg",
        "https://m.media-amazon.com/images/I/61XwCVUQktL._AC_UF350,350_QL80_.jpg",
        "https://media.centrepointstores.com/i/centrepoint/161905280-161905280-BSRG19100719_02-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-sqr-pdp-2x$",
        "https://i5.walmartimages.com/asr/6a343ec0-6829-4fb3-b2bc-cf7ca0169f84.d90a97177a8bda9907c01fbd05c63413.jpeg",
        "https://m.media-amazon.com/images/I/61IUHRimTaL._AC_UF894,1000_QL80_.jpg",
    ]

    return (
        <div className="pt-4 pb-10 md:py-32 bg-slate-200">
            <h2 className='headlins-style text-center font-mono text-3xl font-bold'>Happy Customers </h2>

            <ul className="accordian mx-auto">

                {
                    images.slice(0, 5).map((image, i) =>
                        <li className=" relative-style" key={i}>
                            <img src={image} alt="" />
                            <div className="absolute-style">
                                <div className="context-div">
                                    <button>show review</button>
                                </div>
                            </div>

                        </li>
                    )
                }

            </ul>
            <ul className="accordian mx-auto mt-10">

                {
                    images.slice(5, 10).map((image, i) =>
                        <li className=" relative-style" key={i}>
                            <img src={image} alt="" />
                            <div className=" absolute-style">
                                <div className="context-div">
                                    <button>show review</button>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
            

            {/* <div className="maildiv grid md:grid-cols-4 gap-10 w-11/12 mx-auto justify-center">
                {
                    images.map((image, i) =>
                        <div className="relative" key={i}>
                            <img src={image} alt="" />

                            <div className="absolute">
                                <div className="context-div">
                                    <button>show review</button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div> */}


        </div>
    );
};

export default Kidex;