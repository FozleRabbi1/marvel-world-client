import { useLoaderData } from "react-router-dom";
import './Detailes.css';

const Detailes = () => {
    const data = useLoaderData();
    const {
        picture, Sub_category, toy_name, seller_name, seller_email, price, rating, available_quantity, detail_description,
    } = data[0]
    console.log(data)
    return (
        <div className="">

            <div className="showDitles grid md:grid-cols-2 justify-center items-center gap-10 md:mx-24">
                <div className="img-div mt-4">
                    <img className="" src={picture} alt="" />
                </div>

                <div className="text ">
                    <h2> <span className="font-bold">Toy name</span> : {toy_name}</h2>
                    <h2> <span className="font-bold">Category</span> : {Sub_category}</h2>
                    <h3> <span className="font-bold">Seller name</span> : {seller_name}</h3>
                    <h3> <span className="font-bold">Email</span> : {seller_email}</h3>
                    <h3> <span className="font-bold">Price</span> : {price} $=/</h3>
                    <h3> <span className="font-bold">Quantity</span> : {available_quantity}</h3>
                    <h3> <span className="font-bold">rating</span> : {rating}</h3>
                    <h3> <span className="font-bold">Description</span> : {detail_description}</h3>
                </div>
            </div>

        </div>
    );
};

export default Detailes;