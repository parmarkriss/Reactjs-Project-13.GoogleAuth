import React, { useEffect, useState } from "react";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import './style.css';


function SignIn() {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return (
        <div>
            <h1>Sing in Google With React</h1>
            {
                value ? <Home/> : <a href="#" className="google-btn" onClick={handleClick}>
                <span className="google-icon"><img src="https://www.liblogo.com/img-logo/go567ga39-google-logo-google-logo-free-vector-graphic-on-liblogo.png" alt="Google icon" /></span>
                Sign in with Google
                </a>
            }
        </div>
    );
}
export default SignIn;