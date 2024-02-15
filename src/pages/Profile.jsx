import React from "react";
import Navbar from "../components/profile/Navbar";
import ProfileCard from "../components/profile/ProfileCard";

const Profile = () => {
  return (
    <div className="bg-[#c9d4ff] min-h-screen pb-4">
      <Navbar />
      <div className="flex justify-center mb-5 bg-red-500">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Profile;
