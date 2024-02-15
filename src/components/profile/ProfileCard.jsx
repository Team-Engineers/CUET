import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import profileImg from "../../assets/ProfileImg.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ProfileCard = () => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    location: "",
  });

  const schema = z.object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long")
      .refine(
        (value) => /^[a-zA-Z]+$/.test(value),
        "First name should contain only alphabets"
      ),
    lastName: z
      .string()
      .refine(
        (value) => /^[a-zA-Z]+$/.test(value),
        "First name should contain only alphabets"
      ),
    dob: z.coerce
      .date("Date of birth must be in the past")
      .max(new Date(), "Date of birth cannot be in the future"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().length(10, "Phone number must be 10 digits long"),
    location: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: details,
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-[500px] md:w-full">
      <div className="flex items-center justify-center leading-none md:w-[18%] border-blueviolet-100 border-b-4 mt-5">
        <FiArrowLeft className="text-blueviolet-100 size-7" />
        <div>
          <h2 className="pl-0 mb-1 text-blueviolet-100 text-5xl xl:text-10xl leading-none">
            Profile
          </h2>
          <hr className="bg-blueviolet-100 h-1 border-none w-10 m-0 mb-3" />
        </div>
      </div>
      <form
        className=" px-4 md:flex md:items-start md:justify-around"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center md:mt-5">
          <img src={profileImg} alt="" className="w-24 md:w-28 xl:w-36 " />
        </div>
        <div className="md:w-[75%]">
          <p className="text-blueviolet-100 font-semibold text-lg ">
            Personal Information
          </p>
          <div className="md:flex md:flex-wrap md:justify-between ">
            <div className="flex flex-col mb-5 xl:mb-6">
              <label
                htmlFor="firstName"
                className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-blueviolet-100 font-semibold "
              >
                First Name
              </label>
              <input
                required
                name="firstName"
                type="text"
                autoComplete="true"
                autoCorrect="true"
                placeholder="Thomas"
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96 text-[#00000080] 2xl:w-[510px]"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-500 font-semibold mb-0 mt-2">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-5 xl:mb-6">
              <label
                htmlFor="lastName"
                className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-blueviolet-100 font-semibold"
              >
                Last Name
              </label>
              <input
                required
                name="lastName"
                type="text"
                autoComplete="true"
                autoCorrect="true"
                placeholder="J"
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 text-[#00000080] xl:w-96 2xl:w-[510px]"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-500 font-semibold mb-0 mt-2">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-5 xl:mb-6">
              <label
                htmlFor="email"
                className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-blueviolet-100 font-semibold"
              >
                Email
              </label>
              <input
                required
                name="email"
                type="email"
                autoComplete="true"
                autoCorrect="true"
                placeholder="Thomas.j@gmail.com"
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96 text-[#00000080] 2xl:w-[510px]"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 font-semibold mb-0 mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-5 xl:mb-6">
              <label
                htmlFor="dob"
                className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-blueviolet-100 font-semibold"
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
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96 text-[#00000080] 2xl:w-[510px]"
                {...register("dob")}
              />
              {errors.dob && (
                <p className="text-red-500 font-semibold mb-0 mt-2">
                  {errors.dob.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-5 xl:mb-6">
              <label
                htmlFor="phoneNumber"
                className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-blueviolet-100 font-semibold"
              >
                Phone Number
              </label>
              <input
                required
                name="phoneNumber"
                type="number"
                autoComplete="true"
                autoCorrect="true"
                placeholder="+000-000-0000"
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96 text-[#00000080] 2xl:w-[510px]"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 font-semibold mb-0 mt-2">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-5 xl:mb-6">
              <label
                htmlFor="location"
                className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-blueviolet-100 font-semibold"
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
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96 text-[#00000080] 2xl:w-[510px]"
                {...register("location")}
              />
              {errors.location && (
                <p className="text-red-500 font-semibold mb-0 mt-2">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <p className="text-blueviolet-100 font-semibold text-lg">
              Membership
            </p>
            <div className="flex items-center justify-between md:justify-start md:gap-8">
              <button className="px-6 py-2 text-lg rounded-full border-none bg-white shadow-md shadow-gray-500 text-[#00000080] flex items-center gap-1 cursor-pointer">
                <BsFillPersonLinesFill /> CUET GENERAL PACK
              </button>
              <button className="px-6 py-2 text-md rounded-full border-none bg-tomato-100 shadow-md shadow-gray-500 text-white text-lg cursor-pointer">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileCard;