import "./LoginScreen.css";
import netflix from '../../images/netflix-logo.png';
import { useState, useRef } from 'react';
import SignupScreen from '../SignupScreen/SignupScreen';
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import tv from '../../images/tv.png';
import mobile from '../../images/mobile.jpg';
import kids from '../../images/kids.png';
import Accordion from "../../Components/Accordion/Accordion";
import Footer from "../../Components/Footer/Footer";

const LoginScreen = () => {

    const [signup, setSignup] = useState(false);
    const email = useRef(null);

    const signupHandler = (e) => {
        e.preventDefault();
        setSignup(true);
        localStorage.setItem("email", email.current.value);
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
                                <input type="email" placeholder="email" ref={email} />
                                <button onClick={signupHandler}>GET STARTED </button>
                            </form>
                        </div>
                    </>
                </div>
            }
            <div className="login-gradient" />
            {!signup && (
                <>
                    <Jumbotron title="Enjoy on your TV." content="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." img={tv} />
                    <Jumbotron title="Download your shows to watch offline." content="Save your favorites easily and always have something to watch." img={mobile} reverse={true} />
                    <Jumbotron title="Watch everywhere." content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
                    <Jumbotron title="Create profiles for kids." content="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." img={kids} reverse={true} />
                    <Accordion />
                    <Footer />
                </>
            )
            }
        </div>
    )
}

export default LoginScreen
