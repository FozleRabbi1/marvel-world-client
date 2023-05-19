import { createBrowserRouter } from "react-router-dom";
import Main from "../MainFile/Main";
import Home from "../HomeFile/Home/Home";
import AllToys from "../AllToysFile/AllToys";
import MyToys from "../MyAllToysFile/MyToys";
import Login from "../LoginFile/Login";
import Register from "../RegisterFile/Register";
import NoteFound from "../NotFoundFile/NoteFound";
import AddedToyes from "../AddedToyFile/AddedToyes";
import Detailes from "../DetailesFile/Detailes";
import Private from "../PriveteRouteFile/Private";


const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "allToys", element: <AllToys></AllToys> },
            {
                path: "myToys", element:
                    <Private>
                        <MyToys></MyToys>
                    </Private>
            },
            {
                path: "addedToyes", element: 
                <Private>
                    <AddedToyes></AddedToyes>
                </Private>
            },
            {
                path: "viewDitles/:id", element: 
                <Private>
                    <Detailes></Detailes>
                </Private>,
                loader: ({ params }) => fetch(`http://localhost:5000/allToysDatas/${params.id}`)
            },
            { path: "login", element: <Login></Login> },
            { path: "register", element: <Register></Register> },
        ]
    },
    { path: "*", element: <NoteFound></NoteFound> }
])

export default router;