import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUser} from "../../Redux/features/userSlice";
import {auth} from "../../Server/firebase";
import useTransition from "../../Hooks/Transition/useTransition";

const NavBar = () => {
    const user = useSelector(selectUser)
    const {show} = useTransition(window)
    const navigate = useNavigate()


    const handleLogout = () => {
        auth.signOut()
    }

    const handleIndex = () => {
        navigate("/")
    }


    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <div className={"nav_content"}>
                <img
                    onClick={handleIndex}
                    src={"https://www.freepnglogos.com/uploads/netflix-logo-0.png"}
                    alt={'logo'}
                    className={"nav_logo"}
                />
                {
                    user ?
                        <img
                            onClick={handleLogout}
                            src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"}
                            alt={'avatar'}
                            className={"nav_avatar"}/> :
                        <div className={"login_button"}>Log In</div>
                }
            </div>

        </nav>
    )
}

export default NavBar;