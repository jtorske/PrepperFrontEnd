import React, { useState } from "react";
import "./SignUp.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import logoPlaceholderImage from "../images/logo-placeholder-image.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp({ onSignUp, onClose }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [showSignUp, setShowSignUp] = useState(true);

    const handleFNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleReEntPassChange = (e) => {
        setConfirmedPassword(e.target.value);
    };

    const signUp = () => {
        /*fetch(url, {

    method: 'POST',

    body: {

        email: email,

        password: password

    }

}).then(response => {

    if (response.status === 200){}

    else{

        window.alert("Incorrect email or password entered");

    }

});*/



        // Call onClose function to close the signup component
        if (password === confirmedPassword) {
            setShowSignUp(false);
            onClose();
        } else {
            toast.error("Passwords must match");
        }
    }

    const closeSignUp = () => {
        setShowSignUp(false);
        onClose();
    };

    return (
        <>
            <ToastContainer position="top-center" />

            {showSignUp && (
                <div className="signup-container">
                    <div className="exit">
                        <button onClick={closeSignUp}>X</button>
                    </div>
                    <img
                        className="placeholder-image"
                        src={logoPlaceholderImage}
                        alt="Placeholder"
                    />

                    <hr className="divider" />

                    <div className="login-section">
                        <p>First Name</p>
                        <input
                            onChange={handleFNameChange}
                            type="text"
                        />
                    </div>
                    <div className="login-section">
                        <p>Last Name</p>
                        <input
                            onChange={handleLNameChange}
                            type="text"
                        />
                    </div>
                    <div className="login-section">
                        <p>Email</p>
                        <input
                            onChange={handleEmailChange}
                            type="email"
                        />
                    </div>
                    <div className="login-section">
                        <p>Password</p>
                        <input
                            onChange={handlePasswordChange}
                            type="password"
                        />
                    </div>
                    <div className="login-section">
                        <p>Confirm Password</p>
                        <input
                            onChange={handleReEntPassChange}
                            type="password"
                        />
                    </div>
                    <div className="login-buttons">
                        <button onClick={signUp}>Signup</button>
                    </div>
                </div>)}
            {showSignUp && <div className="overlay"></div>}
        </>
    );
}
export default SignUp;
