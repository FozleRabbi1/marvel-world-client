import { useLoaderData } from "react-router-dom";
import './Update.css';
import Swal from "sweetalert2";
import useTitle from "../DynamicTitleFile/useTitle";

const UpdateToy = () => {
    useTitle("Update")
    const data = useLoaderData();
    const {_id, price, picture, available_quantity, detail_description } = data[0]

    const updatedFormHandeler = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const available_quantity = form.quantity.value;
        const detail_description = form.desctiption.value;
        const updatedData = { price, available_quantity, detail_description };
        // console.log(updatedData)

        // fetch(`http://localhost:5000/updateRouteData/${_id}`, {
        fetch(`https://marvel-toy-server.vercel.app/updateRouteData/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedData),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.matchedCount > 0){
                    Swal.fire({
                        position: '',
                        icon: 'success',
                        title: 'Data Updated',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            }).catch(err => console.error(err.message))

    }

    return (
        <div>

            <div className="parent-div">
                <div className="image-div">

                    <img src={picture} alt="" />

                    <div className="updateForm">
                        <form onSubmit={updatedFormHandeler} action="">
                            <input name="price" required placeholder={`Price : ${price}`} className="input text-black" type="number" />
                            <input name="quantity" required placeholder={`Quantity : ${available_quantity}`} className="input" type="text" />
                            <textarea name="desctiption" required placeholder={`Desctiption : ${detail_description}`} className="textarea" id="" cols="30" rows="3"></textarea>
                            <input className="button text-white text-xl" type="submit" value="Update" />
                        </form>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default UpdateToy;