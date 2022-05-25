import {useRef} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../Server/firebase"

const SignUp = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);



    const register = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
            emailRef.current.value = "";
            passwordRef.current.value = "";
        }).catch((error) => {
                console.log(error);
            }
        );
    }
    const signIn = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
            emailRef.current.value = "";
            passwordRef.current.value = "";
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className={"signup_page"}>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type={"email"} placeholder={"Email"}/>
                <input ref={passwordRef} type={"password"} placeholder={"Password"}/>
                <button type={"submit"} onClick={signIn}> Sign In</button>
                <h4><span className={"form_gray"}>New to Netflix?</span><span
                    className={"form_link"} onClick={register}>Sign Up now.</span></h4>
            </form>
        </div>
    )


}
export default SignUp;