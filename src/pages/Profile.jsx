import React from "react";
import Navbar from "../components/profile/Navbar";
import ProfileCard from "../components/profile/ProfileCard";

const Profile = () => {
  return (
    <div className="bg-[#c9d4ff]">
      <Navbar />
        <ProfileCard />
    </div>
  );
};

export default Profile;
