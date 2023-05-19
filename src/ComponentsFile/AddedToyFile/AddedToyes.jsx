
const AddedToyes = () => {
    return (
        <div>
           <h2 className="text-center font-mono text-3xl font-bold py-3"> Addedd Your Product</h2>
            {/* picture, Sub_category, toy_name, seller_name, seller_email, price, rating, available_quantity, detail_description, */}
    
            <div className=" grid md:grid-cols-2 mt-5 px-14 ">
                <div className="animation flex items-center">
                    <img src="https://media2.giphy.com/media/3o7aCWgORMkwOF0nq8/giphy.gif" alt="" />
                </div>
                <div className="form">
                    <form action="" className="p-5 flex flex-col justify-center  ">
                        <input className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Seller Name" type="text" />
                        <input className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Email" type="email" />
                        <input className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Image URL" type="text" />
                        <input className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Category Name" type="text" />
                        <input className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Toy Name" type="text" />
                        <input className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Price" type="number" />
                        <input className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Rating" type="number" />
                        <input className=" w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto" placeholder="Quantity" type="number" />
                        <textarea  placeholder="Description" className=" p-1 px-2 drop-shadow-xl w-10/12 mb-2 mx-auto" name="" id="" cols="5" rows="3"></textarea>
                        <input className="bg-lime-600  w-10/12 mb-4 p-1 px-2 drop-shadow-lg mx-auto font-mono font-bold text-xl text-red-500	" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddedToyes;