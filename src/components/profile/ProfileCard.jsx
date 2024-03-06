import React, { useState } from "react";
import User from "./User";
import { AiFillHome } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { MdOutlineLocalActivity } from "react-icons/md";

function GroupsPage() {
  const [activeTab, setActiveTab] = useState('tab1'); // State to track active tab
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <div className="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
          <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
            <div className={`p-4 font-bold  no-underline inline-flex justify-center items-center rounded-md ${activeTab === 'tab1' ? 'bg-gray-800 text-white' : 'text-white/50 hover:bg-gray-800 hover:text-white smooth-hover'}`} href="#" onClick={() => handleTabClick('tab1')}>
              <AiFillHome className="text-[20px] mr-2"/>
              Dashboard
            </div>
            <div className={`p-4 no-underline  font-bold inline-flex justify-center rounded-md ${activeTab === 'tab2' ? 'bg-gray-800 text-white' : 'text-white/50 hover:bg-gray-800 hover:text-white smooth-hover'}`} href="#" onClick={() => handleTabClick('tab2')}>
             <MdOutlineLocalActivity className="text-[20px] mr-2"/>
              Plan
            </div>
            <div className={`p-4 no-underline  font-bold  inline-flex justify-center rounded-md ${activeTab === 'tab3' ? 'bg-gray-800 text-white' : 'text-white/50 hover:bg-gray-800 hover:text-white smooth-hover'}`} href="#" onClick={() => handleTabClick('tab3')}>
             <GiProgression className="text-[20px] mr-2"/>
             Progress
            </div>
          </nav>
        </div>
        <div className="flex-1 min-h-[500px] px-2 sm:px-0">
          {activeTab === 'tab1' && (
            <User/>
          )}
          {activeTab === 'tab2' && (
            <div>
            </div>
          )}
          {activeTab === 'tab3' && (
            <div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GroupsPage;
