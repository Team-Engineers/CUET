import React, { useState } from "react";
// import { FiArrowLeft } from "react-icons/fi";
import profileImg from "../../assets/user.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineModeEdit } from "react-icons/md";

import { useAuth } from "../../utils/context";
const User = () => {

    const [auth] = useAuth();
    console.log(auth?.user?.user?.name);
    const [details,] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        phoneNumber: "",
        location: "",
    });

    // const navigate = useNavigate();
    const schema = z.object({
        firstName: z
            .string()
            .min(2, "First name must be at least 2 characters long")
            .refine((value) => /^[a-zA-Z]+$/.test(value), "First name should contain only alphabets"),
        lastName: z.string().refine((value) => /^[a-zA-Z]+$/.test(value), "First name should contain only alphabets"),
        dob: z.coerce.date("Date of birth must be in the past").max(new Date(), "Date of birth cannot be in the future"),
        email: z.string().email("Invalid email address"),
        phoneNumber: z.string().length(10, "Phone number must be 10 digits long"),
        location: z.string(),
    });

    const {
        register,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: details,
    });
    return (
        <div>
            <div className="flex flex-col justify-center h-[500px]  items-center">
                <form className="flex flex-col   w-full pb-6 md:flex-row justify-center items-center md:gap-[5%] ">
                    <div className="relative flex flex-col justify-center">
                        <div className="relative flex justify-center items-centers">
                            <img src={profileImg} alt="" className="w-24 md:w-28  mx-auto xl:w-36 md:mt-5" />
                        </div>
                        <div className="relative text-white ">
                            <div className="relative  flex flex-col justify-center items-center h-full ">
                                <BsLinkedin className="w-6 my-2 h-6 " />
                                <input
                                    className="px-6 py-2 text-lg  rounded-full border-none w-[230px] shadow-md shadow-gray-500  text-[#00000080]  bg-[#aaa] "

                                    placeholder="linkedin.com/in/xyz/" type="text" name="" id="" />
                                <BsGithub className="w-6 my-2 h-6" />
                                <input
                                    className="px-6 py-2 text-lg  rounded-full border-none w-[230px] shadow-md shadow-gray-500  text-[#00000080]  bg-[#aaa] "
                                    placeholder="github.com/xyz" type="text" name="" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[75%]">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="mt-4 flex flex-wrap justify-center md:justify-between">
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex flex-col mb-3 xl:mb-6">
                                        <label
                                            htmlFor="firstName"
                                            className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-white font-semibold "
                                        >
                                            Name
                                        </label>
                                        <input
                                            required
                                            name="firstName"
                                            type="text"
                                            defaultValue={auth.user?.name}
                                            autoComplete="true"
                                            autoCorrect="true"
                                            placeholder="name"
                                            className="px-6 py-2 text-lg  rounded-full border-none w-[230px] shadow-md shadow-gray-500  text-[#00000080]  bg-[#aaa] mr-2"
                                            {...register("name")}
                                        />
                                        {errors.firstName && <p className="text-red-500 font-semibold mb-0 mt-2">{errors.firstName.message}</p>}
                                    </div>
                                    <div className="flex flex-col mb-3 xl:mb-6">
                                        <label
                                            htmlFor="email"
                                            className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-white font-semibold"
                                        >
                                            Email
                                        </label>
                                        <input
                                            required
                                            name="email"
                                            type="email"

                                            defaultValue={auth.user?.email}
                                            className="px-6 py-2 text-lg rounded-full border-none w-[230px] shadow-md shadow-gray-500  text-[#00000080]  bg-[#aaa] mr-2"
                                        />
                                        {errors.email && <p className="text-red-500 font-semibold mb-0 mt-2">{errors.email.message}</p>}
                                    </div>
                                    <div className="flex flex-col mb-3 xl:mb-6">
                                        <label
                                            htmlFor="dob"
                                            className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-white font-semibold"
                                        >
                                            Date of Birth
                                        </label>
                                        <input
                                            required
                                            name="dob"
                                            type="date"
                                            autoComplete="true"
                                            autoCorrect="true"
                                            placeholder="1998-12-5"
                                            onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => (e.target.type = "text")}
                                            className="px-6 py-2 text-lg rounded-full border-none w-[230px] shadow-md shadow-gray-500  text-[#00000080]  bg-[#aaa] mr-2"
                                            {...register("dob")}
                                        />
                                        {errors.dob && <p className="text-red-500 font-semibold mb-0 mt-2">{errors.dob.message}</p>}
                                    </div>
                                    <div className="flex flex-col mb-3 xl:mb-6">
                                        <label
                                            htmlFor="phoneNumber"
                                            className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-white font-semibold"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            required
                                            name="phoneNumber"
                                            type="number"
                                            autoComplete="true"
                                            autoCorrect="true"
                                            defaultValue={auth.user?.contact}

                                            placeholder="+000-000-0000"
                                            className="px-6 py-2 text-lg rounded-full border-none w-[230px] shadow-md shadow-gray-500  text-[#00000080]  bg-[#aaa] mr-2"
                                            {...register("phoneNumber")}
                                        />
                                        {errors.phoneNumber && <p className="text-red-500 font-semibold mb-0 mt-2">{errors.phoneNumber.message}</p>}
                                    </div>
                                    <div className="flex flex-col mb-3 xl:mb-6">
                                        <label
                                            htmlFor="location"
                                            className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-white font-semibold"
                                        >
                                            Location
                                        </label>
                                        <input
                                            required
                                            name="location"
                                            type="text"
                                            autoComplete="true"
                                            autoCorrect="true"
                                            placeholder="Banglore"
                                            className="px-6 py-2 text-lg rounded-full border-none w-[230px] shadow-md shadow-gray-500  text-[#00000080]  bg-[#aaa] mr-2"
                                            {...register("location")}
                                        />
                                        {errors.location && <p className="text-red-500 font-semibold mb-0 mt-2">{errors.location.message}</p>}

                                    </div>
                                    <div className="flex flex-col mb-3 xl:mb-6">
                                        <label
                                            htmlFor="location"
                                            className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-white font-semibold"
                                        >
                                            Institute
                                        </label>
                                        <input
                                            required
                                            name="location"
                                            type="text"
                                            autoComplete="true"
                                            autoCorrect="true"
                                            placeholder="institute"
                                            className="px-6 py-2 text-lg rounded-full border-none w-[230px] shadow-md shadow-gray-500  text-[#00000080]  bg-[#aaa] mr-2"
                                            {...register("location")}
                                        />
                                        {errors.location && <p className="text-red-500 font-semibold mb-0 mt-2">{errors.location.message}</p>}

                                    </div>
                                    <button className="min-h-0 h-10 mx-auto my-4  py-0 text-md rounded-full border-none w-[150px] bg-blue-500 shadow-md shadow-gray-500 text-white  text-lg cursor-pointer">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default User