import HomePage from "./Pages/HomePage/HomePage";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import HomeRoutes from "./Routes/HomeRoutes/HomeRoutes";
import LoginPage from "./Pages/Login/LoginPage";
import {useDispatch} from "react-redux";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./Server/firebase";
import {useEffect} from "react";
import {setUser} from "./Redux/features/userSlice";
import AuthRoutes from "./Routes/AuthRoutes/AuthRoutes";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                dispatch(setUser({
                    id: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                }))
                navigate(from, {replace: true})
            } else {
                dispatch(setUser(null))
            }
        })
    }, [dispatch])
    return (
        <div className="app">
            <Routes>
                <Route element={<AuthRoutes/>}>
                    <Route path={"login"} element={<LoginPage/>}/>
                </Route>
                <Route element={<HomeRoutes/>}>
                    <Route path={"/"} element={<HomePage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
