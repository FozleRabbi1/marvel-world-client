import "./kids.css"
const Kidex = () => {
    const images = [
        "https://cdn10.bestreviews.com/images/v4desktop/image-full-page-cb/image-1-71c5bc.jpg?p=w1228",
        "https://static-01.daraz.pk/p/a75be42681d2043870b69e6322668514.jpg",
        "https://m.media-amazon.com/images/I/81h38tZxY3L._AC_SX425_.jpg",
        "https://m.media-amazon.com/images/I/81tQarUO9KL.jpg",
        "https://m.media-amazon.com/images/I/81h38tZxY3L._AC_SX425_.jpg",
        "https://m.media-amazon.com/images/I/81tQarUO9KL.jpg",
        "https://static-01.daraz.pk/p/a75be42681d2043870b69e6322668514.jpg",
        "https://cdn10.bestreviews.com/images/v4desktop/image-full-page-cb/image-1-71c5bc.jpg?p=w1228",
    ]

    return (
        <div className="py-10 md:py-32 bg-slate-200">
            <h2 className='headlins-style text-center font-mono text-3xl font-bold -mt-8 mb-8'>Happy Customers </h2>

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
                    images.slice(3, 8).map((image, i) =>
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