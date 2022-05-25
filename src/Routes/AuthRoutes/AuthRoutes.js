import NavBar from "../../Components/NavBar/NavBar";
import {Outlet} from "react-router-dom";

const AuthRoutes = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default AuthRoutes;