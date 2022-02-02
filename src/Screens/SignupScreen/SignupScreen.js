import "./SignupScreen.css"
import { useRef, useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import LoadingSmall from "../../Components/Loading/LoadingSmall";

const SignupScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    //signin loading
    const [loading, setLoading] = useState(false);
    //signup loading
    const [signuploading, setSignuploading] = useState(false);
    const [error, setError] = useState('');

    const signupHandle = (e) => {
        e.preventDefault();
        setSignuploading(true);
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user);
            setSignuploading(false)
        }).catch(e => {
            console.log(e);
            setError(e.code)
            setSignuploading(false);
        })
    }

    const signinHandle = (e) => {
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
            setLoading(false);
        }).catch(e => {
            console.log(e)
            setLoading(false)
            setError(e.code)
        })
    }
    return (
        <div className="signup-screen">
            <form>
                <h1>Sign In</h1>
                {/* <span>{loading ? <LoadingSmall /> : null}</span> */}
                <span className="signup-screen-error">{error ? `${error}` : null}</span>
                <input ref={emailRef} type="email" placeholder="Email or phone number" defaultValue={localStorage.getItem("email")}/>
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button className="signup-btn" onClick={signinHandle} ><span>{loading ? <LoadingSmall /> : 'Sign In'}</span></button>
                <h4>
                    <span className="signup-grey">New to Netflix?</span>
                    <span className="signup-link" onClick={signupHandle}><span>{signuploading ? 'please wait' : 'Sign up Now'}</span></span>
                </h4>
                <h5> Clicking Sign up now will create a new user!!</h5>
            </form>
        </div>
    )
}

export default SignupScreen
