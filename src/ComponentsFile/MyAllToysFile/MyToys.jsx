import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";
import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Footer from "../SharedFile/FooterFile/Footer";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [userDatas, setUserData] = useState();
    const [isSort, setSort] = useState(true)

    useEffect(() => {
        console.log(isSort)
        // fetch(`http://localhost:5000/logedInUserDatas?email=${user?.email}&isSort=${isSort}`)
        fetch(`https://marvel-toy-server.vercel.app/logedInUserDatas?email=${user?.email}&isSort=${isSort}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [user?.email, isSort])


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

                // fetch(`http://localhost:5000/allToysDatas/${id}`, {
                fetch(`https://marvel-toy-server.vercel.app/allToysDatas/${id}`, {
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
                        fetch(`https://marvel-toy-server.vercel.app/logedInUserDatas?email=${user?.email}`)
                            .then(res => res.json())
                            .then(data => setUserData(data))
                    })

            }
        })

    }

    return (
        <div>

            <h2 className='text-center font-mono text-2xl font-bold py-5 text-red-500'>this is my toyes</h2>


            <div>

                {
                    userDatas?.length === 0 ? <h2 className="text-center font-mono text-5xl font-bold py-2 mb-44 mt-24 text-red-500">Data Not Available Add Some Products</h2>
                        :

                        <div>

                            <div className="button flex justify-end w-10/12  mx-auto ">
                                {
                                    isSort ? <button className="p-2 text-green-600 text-lg mb-2 bg-red-100 rounded-lg " onMouseUp={() => setSort(!isSort)}> Low To High </button> :
                                        <button className="p-2 text-green-600 text-lg mb-2 bg-red-100 rounded-lg " onMouseUp={() => setSort(!isSort)} > High To Low </button>
                                }
                            </div>

                            {
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
                                                <Rating
                                                    style={{ maxWidth: 110 }}
                                                    value={data.rating}
                                                    readOnly
                                                />
                                                <h2> <span className="font-bold"> Quantity</span> : {data.available_quantity} </h2>
                                            </div>

                                            <div className="buttons flex flex-col justify-center items-center">
                                                <Link to={`/viewDitles/${data._id}`} className="">
                                                    <FaEye className="text-2xl text-blue-500"></FaEye>
                                                </Link>
                                                <Link to={`/updateToy/${data._id}`} className="my-2 ps-1">
                                                    <FaEdit className=" text-2xl text-green-500  "></FaEdit>
                                                </Link>
                                                <Link onClick={() => deleteButton(data._id)} className="" >
                                                    <FaRegTrashAlt className="text-2xl text-red-500"></FaRegTrashAlt>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>

                                )
                            }
                        </div>
                }
            </div>

            <div className="mt-20">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyToys;