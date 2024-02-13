import React from "react";
import Navbar from "../components/profile/Navbar";
import ProfileCard from "../components/profile/ProfileCard";

const Profile = () => {
  return (
    <div className="bg-[#c9d4ff] min-h-screen pb-4 2xl:max-w-1440">
      <Navbar />
      <div className="flex justify-center mb-5">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Profile;
