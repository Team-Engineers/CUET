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
        <div className="overflow-x-hidden h-[100vh] bg-gradient-to-br from-[#fff] to-[#a691f5de] ">
            <Navbar />
            <div className='flex justify-center items-center'>
                <div className=' bg-white grid md:grid-cols-2 grid-cols-1 max-w-[700px] border-solid border-[1px] rounded-3xl mx-auto p-5 justify-center items-center  shadow-xl  border-blue-600 '>
                    <div>
                        <img src={require('../../assets/forgot.jpg')} className='w-[400px] max-md:max-h-[300px] max-md:max-w-[300px] max-md:mb-[-10px] rounded-3xl' alt="" />
                    </div>
                    <div className=" max-w-[600px] mx-auto bg-white rounded-xl md:shadow-lg ">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                <h1 className="block text-xl max-md:font-semibold font-bold md:mt-0 mt-[-10px] text-gray-800">Forgot password?</h1>
                                <p className="mt-2 text-sm text-gray-600">
                                    Remember your password?
                                    <Link to="/login" className="text-blue-600 font-medium hover:underline">
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
                                                    className="py-3 px-4 w-[90%] mx-auto block  border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 md:shadow-sm"
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
                                            className="py-3 max-md:mb-4 px-4 inline-flex justify-center max-md:mx-auto items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                                        >
                                            Reset password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default ForgotPassword;