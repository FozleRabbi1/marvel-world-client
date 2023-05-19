import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Footer from "../SharedFile/FooterFile/Footer";
import { Link } from "react-router-dom";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [userDatas, setUserData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/logedInUserDatas?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [user?.email])

    const deleteButton = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {




                fetch(`http://localhost:5000/allToysDatas/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        // const newdata = userDatas.map(data => parseInt(data._id) !== parseInt(id));
                        // setUserData(newdata)
                        fetch(`http://localhost:5000/logedInUserDatas?email=${user?.email}`)
                            .then(res => res.json())
                            .then(data => setUserData(data))
                    })

            }
        })

    }

    return (
        <div>

            <h2 className='text-center font-mono text-2xl font-bold py-5 text-red-500'>this is my toyes</h2>

            {
                userDatas?.length === 0 ? <h2 className="text-center font-mono text-5xl font-bold py-2 mb-44 mt-24 text-red-500">Data Not Available Add Some Products</h2>
                    :
                    userDatas?.map(data =>

                        <div key={data._id}>

                            <div className="flex bg-red-100 justify-around w-10/12 mx-auto mb-5">
                                <img className="h-32 w-32 p-1 rounded-lg" src={data.picture} alt="" />

                                <div className="text flex flex-col  justify-center">
                                    <h2> <span className="font-bold"> Name</span> : {data.seller_name}</h2>
                                    <h2> <span className="font-bold"> Toy</span> : {data.toy_name}</h2>
                                    <h2> <span className="font-bold"> Email</span> : {data.seller_email}</h2>
                                </div>

                                <div className="text flex flex-col  justify-center">
                                    <h2 className="text-red-500"> <span className="font-bold "> Price</span> : {data.price} =/$</h2>
                                    <h2> <span className="font-bold"> Rating</span> : {data.rating}</h2>
                                    <h2> <span className="font-bold"> Quantity</span> : {data.available_quantity} </h2>
                                </div>

                                <div className="buttons flex flex-col justify-center items-center">
                                    <Link to={`/updateToy/${data._id}`} className="mb-2 flex justify-center items-center">
                                        <FaEdit className=" text-2xl text-green-500  "></FaEdit>
                                    </Link>
                                    <button onClick={() => deleteButton(data._id)} className="" >
                                        <FaRegTrashAlt className="text-2xl text-red-500"></FaRegTrashAlt>
                                    </button>
                                </div>

                            </div>

                        </div>

                    )
            }

            <div className="mt-20">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyToys;