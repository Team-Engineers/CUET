import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import "./forgotPassword.css";

function ForgotPassword() {
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8800/api/auth/forgot-password', { email })
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/login')

                }
            }).catch(err => console.log(err))
    }

    return (
        <div className="  overflow-x-hidden">
            <Navbar />
            <div className="forgot-body ">
                <div className="forgot-form">
                    <h2>Reset Password</h2>
                    <hr className='grey mt-[-10px] mb-6'></hr>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 ">
                            <p className='forgot-description-p'>Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.</p>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                // autoComplete="off"
                                name="email"
                                className="forgot-description-input "
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="forgot-btn" onClick={handleSubmit}>
                            Reset My Password
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;

