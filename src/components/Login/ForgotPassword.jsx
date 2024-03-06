import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../utils/constants";
import Navbar from '../Navbar';
import "./forgotPassword.css";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/auth/forgot-password`, { email })
            .then(res => {
                if (res.data.Status === "Success") {
                    toast.success("Password Reset Link has been sent to your email.", { toastId: "success-toast" });
                    setTimeout(() => {
                        navigate('/login');
                    }, 5000);
                }
                else {
                    toast.error("Failed to send reset link. Please try again later.");
                }
            })
            .catch(error => {
                toast.error("An error occurred while processing your request. Please try again later.");
                console.error("Error:", error);
            });
    }

    return (
        <div className="overflow-x-hidden bg-gradient-to-br from-[#fff] to-[#a691f5de]">
            <Navbar />
            <div className="forgot-body">
                <div className="forgot-form">
                    <h2>Reset Password</h2>
                    <hr className='grey mt-[-10px] mb-6'></hr>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <p className='forgot-description-p'>Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.</p>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                name="email"
                                className="forgot-description-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="forgot-btn">
                            Reset My Password
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ForgotPassword;
