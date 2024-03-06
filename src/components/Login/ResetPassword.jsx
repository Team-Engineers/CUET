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
                console.log(err);
            });
    };

    return (
        <div className="overflow-hidden bg-gradient-to-br from-[#fff] to-[#a691f5de]">
            <Navbar />
            <div className="flex justify-center items-center h-[90vh]">
                <div className="bg-white p-6 relative bottom-20 rounded shadow-lg max-w-sm w-full">
                    <h4 className="text-[24px] font-medium mb-6">Reset Password</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="password" className="block text-md font-normal">New Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                autoComplete="off"
                                name="password"
                                className="form-input h-6 rounded-md mt-1 block w-[95%]"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-md font-normal">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                autoComplete="off"
                                name="confirmPassword"
                                className="form-input h-6 rounded-md mt-1 block w-[95%]"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        <button type="submit" className="bg-[#123456] text-white mt-2 text-[14px] rounded-md py-2 px-4">
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
