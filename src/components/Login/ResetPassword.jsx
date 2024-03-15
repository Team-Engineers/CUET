import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from '../../utils/constants';
import Navbar from '../Navbar';

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { id, token } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        axios.post(`${API}/auth/reset-password/${id}/${token}`, { password })
            .then(res => {
                if (res.data.Status === "Success") {
                    toast.success("Your password has been updated successfully.", { toastId: "success-toast" });
                    setTimeout(() => {
                        navigate('/login');
                    }, 5000);
                }
            })
            .catch(err => {
                setError("An error occurred while updating your password. Please try again later.");
            });
    };

    return (
        <div className="overflow-hidden bg-gradient-to-b from-[#af9fe9de] to-[#fff]">
            <Navbar />
            <div className="flex justify-center items-center h-[90vh]">
                <div className="bg-white max-md:mx-3 border-solid border-[1px] mx-auto  rounded-xl shadow-lg  border-blue-600 p-6 relative bottom-20  max-w-sm w-full">
                    <h4 className="text-[24px] font-medium mb-6">Reset Password</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="password" className="block font-medium my-2 text-md ">New Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                autoComplete="off"
                                name="password"
                                className="py-3 px-4 w-[90%] block  border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-md  font-medium my-2">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                autoComplete="off"
                                name="confirmPassword"
                                className="py-3 px-4 w-[90%] block  border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                            Update
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ResetPassword;