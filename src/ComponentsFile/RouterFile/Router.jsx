import { createBrowserRouter } from "react-router-dom";
import Main from "../MainFile/Main";
import Home from "../HomeFile/Home/Home";
import AllToys from "../AllToysFile/AllToys";
import MyToys from "../MyAllToysFile/MyToys";
import Login from "../LoginFile/Login";
import Register from "../RegisterFile/Register";


const router = createBrowserRouter([
    {path : "/", element : <Main></Main>,
    children : [
        {path : "/", element : <Home></Home> },
        {path : "allToys", element : <AllToys></AllToys>},
        {path : "myToys", element : <MyToys></MyToys>},
        {path : "login", element : <Login></Login> },
        {path : "register", element : <Register></Register> }
    ]
}
])

export default router;