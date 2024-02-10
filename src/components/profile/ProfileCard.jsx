import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import profileImg from "../../assets/ProfileImg.png";
import moment from "moment";
import { BsFillPersonLinesFill } from "react-icons/bs";

const ProfileCard = () => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob:"",
    phoneNumber: "",
    location: "",
  });

  let name, value;
  const userDetails = (event) => {
    name = event.target.name;
    value = event.target.value;
    setDetails({ ...details, [name]: value });
  };

  return (
    <div className="w-96 md:w-full">
      <div className="flex items-center justify-center leading-none md:w-[18%] border-blueviolet-100 border-b-4">
        <FiArrowLeft size={25} className="text-blueviolet-100" />
        <h2 className="text-blueviolet-100">Profile</h2>
      </div>
      <div className="md:flex md:justify-around md:items-start">
        <div className="flex justify-center">
          <img src={profileImg} alt="" className="w-24 md:w-28 xl:w-36" />
        </div>
        <form className="md:w-[75%] px-2">
          <p className="text-blueviolet-100 font-semibold text-lg text-center leading-none md:text-left md:w-[75%] underline-offset-1 ">
            Personal Information
          </p>
          <div className="md:flex md:flex-wrap md:justify-around lg:justify-between ">
            <div className="flex flex-col mb-3">
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
                value={details.firstName}
                onChange={userDetails}
                autoComplete="true"
                autoCorrect="true"
                placeholder="Thomas"
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96"
              />
            </div>
            <div className="flex flex-col mb-3">
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
                value={details.lastName}
                onChange={userDetails}
                autoComplete="true"
                autoCorrect="true"
                placeholder="J"
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96"
              />
            </div>
            <div className="flex flex-col mb-3">
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
                value={details.email}
                onChange={userDetails}
                autoComplete="true"
                autoCorrect="true"
                placeholder="Thomas.j@gmail.com"
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label
                htmlFor="dob"
                className="text-lg before:content-['*'] before:ml-0.5 before:text-red-500 mb-1 text-blueviolet-100 font-semibold"
              >
                Date of Birth
              </label>
              <input
                required
                name="dob"
                type="number"
                value={details.dob}
                onChange={userDetails}
                autoComplete="true"
                autoCorrect="true"
                placeholder="1998-12-5"
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96"
              />
            </div>
            <div className="flex flex-col mb-3">
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
                value={details.phoneNumber}
                onChange={userDetails}
                autoComplete="true"
                autoCorrect="true"
                placeholder="+000-000-0000"
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96"
              />
            </div>
            <div className="flex flex-col mb-3">
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
                value={details.location}
                onChange={userDetails}
                autoComplete="true"
                autoCorrect="true"
                placeholder="Thomas"
                className="px-6 py-2 text-lg rounded-full border-none shadow-md shadow-gray-500 md:w-52 lg:w-80 xl:w-96"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end pb-10">
        <div className="w-full md:w-[75%] lg:w-[79%]">
          <div>
            <p className="text-blueviolet-100 font-semibold text-lg">
              Membership
            </p>
            <div className="flex items-center justify-between md:justify-start md:gap-8">
              <button className="px-6 py-2 text-lg rounded-full border-none bg-white shadow-md shadow-gray-500">
              <BsFillPersonLinesFill /> CUET GENERAL PACK
              </button>
              <button className="px-6 py-2 text-md rounded-full border-none bg-tomato-100 shadow-md shadow-gray-500 text-white text-lg">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
