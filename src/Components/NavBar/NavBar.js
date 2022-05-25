import {useEffect, useState} from "react";

const NavBar = () => {
    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])
    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <div className={"nav_content"}>
                <img
                    src={"https://www.freepnglogos.com/uploads/netflix-logo-0.png"}
                    alt={'logo'}
                    className={"nav_logo"}
                />
                <img
                    src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"}
                    alt={'avatar'}
                    className={"nav_avatar"}/>
            </div>

        </nav>
    )
}

export default NavBar;