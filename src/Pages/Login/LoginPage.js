import {useState} from "react";
import SignUp from "../../Components/SignUp/SignUp";

const LoginPage = () => {
    const [signUp, setSignUp] = useState(false);
    return (
        <div className={"login_page"}>
            <div className={"login_gradient"}/>
            <div className={"login_body"}>
                <>
                    {
                        signUp ? <SignUp/> :
                            <>
                                <h1>Unlimited film, TV programmes and more. </h1>
                                <h2>Watch anywhere. Cancel anytime.</h2>
                                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                                <div className={"login_screen_input"}>
                                    <form>
                                        <input type={"email"} placeholder={"Email"}/>
                                        <button onClick={() => setSignUp(true)} className={"login_page_getstarted"}>Get
                                            Started
                                        </button>
                                    </form>
                                </div>
                            </>
                    }
                </>
            </div>
        </div>
    )
}

export default LoginPage;