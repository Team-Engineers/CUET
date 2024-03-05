import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";


function ResetPassword() {
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const { id, token } = useParams()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8800/api/auth/reset-password/${id}/${token}`, { password })
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/login')

                }
            }).catch(err => console.log(err))
    }

    return (
        <div className="flex justify-center align-middle bg-whitesmoke h-[100vh]">
            <div className="bg-white p-3 rounded w-25">
                <h4>Reset Password</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>New Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0" onClick={handleSubmit}>
                        Update
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ResetPassword;

