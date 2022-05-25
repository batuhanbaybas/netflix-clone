import NavBar from "../../Components/NavBar/NavBar";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {selectUser} from "../../Redux/features/userSlice";
import {useSelector} from "react-redux";

const HomeRoutes = () => {
    const user = useSelector(selectUser)
    const location = useLocation()
    return (
        <>
            <NavBar/>
            {
                user ? <Outlet/>
                    : <Navigate to={"/login"} state={{from: location}} replace/>

            }

        </>
    )

}


export default HomeRoutes;