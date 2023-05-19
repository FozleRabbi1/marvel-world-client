import { useContext } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";

const AddedToyes = () => {
    const {user} = useContext(AuthContext)

    const handedAddedToyFun = (e) => {
        e.preventDefault();
        const form = e.target;
        const sallerName = form.sallerName.value;
        // const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const categoryName = form.categoryName.value;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const textArea = form.textArea.value;

        const addedData = {
            picture: photoUrl ,
            Sub_category: categoryName,
            toy_name: toyName,
            seller_name: sallerName  ,
            seller_email: user?.email ,
            price: price,
            rating: rating,
            available_quantity: quantity,
            detail_description: textArea
        }

        fetch("http://localhost:5000/allToysDatas", {
            method: 'POST',
            body: JSON.stringify(addedData),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err.message))

        form.reset();

    }
    return (
        <div>
            <h2 className="text-center font-mono text-3xl font-bold py-3"> Addedd Your Product</h2>

            <div className=" grid md:grid-cols-2 mt-5 px-14 ">
                <div className="animation flex items-center">
                    <img src="https://media2.giphy.com/media/3o7aCWgORMkwOF0nq8/giphy.gif" alt="" />
                </div>
                <div className="form">
                    <form onSubmit={handedAddedToyFun} action="" className="p-5 flex flex-col justify-center  ">
                        <input required name="sallerName" className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Seller Name" type="text" />
                        <input required name="email" className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder={user?.email} type="email" />
                        <input required name="photoUrl" className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Image URL" type="text" />
                        <input required name="categoryName" className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Category Name" type="text" />
                        <input required name="toyName" className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Toy Name" type="text" />
                        <input required name="price" className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Price" type="number" />
                        <input required name="rating" className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Rating" type="number" />
                        <input required name="quantity" className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Quantity" type="number" />
                        <textarea name="textArea" placeholder="Description" className=" p-1 px-2 drop-shadow-xl w-10/12 mb-2 mx-auto" id="" cols="5" rows="3"></textarea>
                        <input className="bg-lime-600  w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto font-mono font-bold text-xl text-red-500	" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddedToyes;