import { useLoaderData } from "react-router-dom";
import './Detailes.css';
import { Rating } from "@smastrom/react-rating";
import useTitle from "../DynamicTitleFile/useTitle";

const Detailes = () => {
    useTitle("Detailes")
    const data = useLoaderData();
    const {
        picture, Sub_category, toy_name, seller_name, seller_email, price, rating, available_quantity, detail_description,
    } = data[0]
    console.log(data)
    const defaultImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
    return (
        <div className="">

            <div className="showDitles grid md:grid-cols-2 justify-center items-center gap-10 md:mx-24">
                <div className="img-div mt-4">

                    <img className="" src={picture || defaultImage} alt="" />
                    {/* default image kaj korche na */}


                </div>

                <div className="text ">
                    <h2> <span className="font-bold">Toy name</span> : {toy_name}</h2>
                    <h2> <span className="font-bold">Category</span> : {Sub_category}</h2>
                    <h3> <span className="font-bold">Seller name</span> : {seller_name}</h3>
                    <h3> <span className="font-bold">Email</span> : {seller_email}</h3>
                    <h3> <span className="font-bold">Price</span> : {price} $=/</h3>
                    <h3> <span className="font-bold">Quantity</span> : {available_quantity}</h3>
                    <Rating
                        style={{ maxWidth: 110 }}
                        value={rating}
                        readOnly
                    />
                    <h3> <span className="font-bold">Description</span> : {detail_description}</h3>
                </div>
            </div>

        </div>
    );
};

export default Detailes;