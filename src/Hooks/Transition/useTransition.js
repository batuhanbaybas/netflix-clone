import {useEffect, useState} from "react";

const useTransition = (window) => {
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
    }, [window])


    return {show};
}

export default useTransition