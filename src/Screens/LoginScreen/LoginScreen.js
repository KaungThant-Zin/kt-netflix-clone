import "./LoginScreen.css";
import netflix from '../../images/netflix-logo.png';
import { useState } from 'react';
import SignupScreen from '../SignupScreen/SignupScreen';

const LoginScreen = () => {

    const [signup, setSignup] = useState(false);

    const signupHandler = (e) => {
        e.preventDefault();
        setSignup(true);
    }

    return (
        <div className="login-screen">
            <div className="login-header">
                <img className="login-logo" src={netflix} alt="loginLogo" />
                <button className="login-btn" onClick={signupHandler}>Sign in</button>
            </div>
            {signup ? <SignupScreen /> :
                <div className="login-body">

                    <>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className="login-input">
                            <form>
                                <input type="email" placeholder="email" />
                                <button onClick={signupHandler}>GET STARTED </button>
                            </form>
                        </div>
                    </>

                </div>
            }
            <div className="login-gradient" />
        </div>
    )
}

export default LoginScreen
