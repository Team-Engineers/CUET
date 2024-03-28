import axios from 'axios';
import React, { useState } from 'react';
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../utils/constants";
import Navbar from '../Navbar';
import "./forgotPassword.css";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        axios.post(`${API}/auth/forgot-password`, { email })
            .then(res => {
                if (res.data.Status === "Success") {
                    toast.success("Password Reset Link has been sent to your email.", { toastId: "success-toast" });
                    setLoading(false)

                    setTimeout(() => {
                        navigate('/login');
                    }, 5000);
                }
                else {
                    toast.error("Failed to send reset link. Please try again later.", res.data.Status);
                    setLoading(false)

                }
            })
            .catch(error => {
                toast.error("An error occurred while processing your request. Please try again later.");
                setLoading(false)

                console.error("Error:", error);
            });
    }

    return (
        <div className="overflow-hidden sm:h-screen  bg-gradient-to-br from-blue-300 to-white ">
            <Navbar />
            <div className='md:h-[80vh] max-md:mt-4 flex justify-center items-center max-sm:pb-12'>
                <div className='flex justify-center items-center '>
                    <div className='relative py-3  '>
                        <div className="absolute z-0 inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform  skew-y-0  sm:-rotate-3 -rotate-0 rounded-3xl"></div>
                        <div className=' bg-white max-w-[700px] max-md:mx-3 md:max-h-[400px] relative z-10 grid md:grid-cols-2 grid-cols-1 [800px] border-solid border-[1px] rounded-3xl mx-auto p-5 justify-center items-center  shadow-xl  border-blue-600 '>
                            <div>
                                <img src={require('../../assets/forgot.jpg')} className='sm:w-[400px] w-[90%] flex justify-center items-center  h-[250px] sm:h-[350px] rounded-3xl' alt="" />
                            </div>
                            <div className="   mx-auto rounded-xl ">
                                <div className="p-4 sm:p-7 flex flex-col max-md:mx-2 justify-between">
                                    <div className="text-center">
                                        <h1 className="block text-[12vmin] sm:text-[40px] text-left max-md:font-semibold font-bold md:mt-0 mt-[-10px] text-gray-800">Forgot <br /> password?
                                            <p className="block text-[16px] font-medium ml-1 mb-2">Please enter your email address below</p>
                                        </h1>
                                    </div>
                                    <div className="mt-5">
                                        <form onSubmit={handleSubmit}>

                                            <div>
                                                <div className="relative">
                                                    <input autocomplete="off" value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                        aria-describedby="email-error" id="email" name="email" type="email" className="peer bg-transparent placeholder-transparent font-medium text-lg px-3 py-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 outline-none border-none focus:outline-none focus:borer-slate-400" placeholder='Email Address' />
                                                    <hr className='relative bg-blue-900 h-[2px] bottom-5' />
                                                    <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="py-3 w-[150px] max-md:mb-4 px-4 inline-flex justify-center max-md:mx-auto items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                                            >
                                                {loading ? (
                                                    <CgSpinner size={20} className=" animate-spin " />
                                                ) : (
                                                    <span>Reset Password</span>
                                                )}                                            </button>

                                        </form>
                                    </div>
                                </div>
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