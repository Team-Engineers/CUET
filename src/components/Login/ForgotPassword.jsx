import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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
        axios.post(`${API} / auth / forgot - password, { email }`)
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
        <div className="overflow-x-hidden bg-gradient-to-b from-[#af9fe9de] to-[#fff] ">
            <Navbar />
            <div className='md:h-[60vh] h-[80vh] flex justify-center items-center'>
                <div className="mt-6 max-w-[600px] border-solid border-[1px] mx-auto bg-white rounded-xl shadow-lg  border-blue-600">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-xl font-semibold text-gray-800">Forgot password?</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                Remember your password?
                                <Link to="/login" className="text-blue-600 font-semibold ml-1 hover:underline">
                                    Login here
                                </Link>
                            </p>
                        </div>

                        <div className="mt-5">
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2">Email address</label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="py-3 px-4 w-[90%] block  border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                                placeholder="Enter Email Address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                aria-describedby="email-error"
                                            />
                                        </div>

                                    </div>
                                    <button
                                        type="submit"
                                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 cursor-pointer focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                                    >
                                        Reset password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ForgotPassword;