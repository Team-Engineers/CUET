import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

const ExamInfo = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('cuetNotifications');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const cuetNotificationsNotices = [
    { id: 1, title: 'CUET', date: 'February 27, 2024', closingDate: ' March 26, 2024, at 11:50 PM', link: ' https://cuetug.ntaonline.in/' },
  ];

  const otherExamsNotificationsNotices = [

    {
      id: 1, title: 'NMIMS', date: 'December 6, 2023', closingDate: 'May 20, 2024', link: 'https://npat.nmims.edu/'
    },
    { id: 2, title: 'CHRIST', date: 'December 08, 2023 ', closingDate: 'April 28, 2024', link: 'https://christuniversity.in/admission-ug' },
    { id: 3, title: 'SYMBIOSIS', date: 'December, 2023', closingDate: 'April 12, 2024', link: 'https://www.siu.edu.in/' },
    { id: 4, title: 'IP UNIVERSITY', date: 'February 19,2024  ', closingDate: 'March 31, 2024', link: 'https://admissions.nic.in/' },
    { id: 5, title: 'FLAME', date: 'December 3, 2023', closingDate: 'May 5, 2024', link: ' https://application.flame.edu.in' },
    { id: 6, title: 'KREA', date: 'October 3, 2023 ', closingDate: 'May 6, 2024', link: ' https://siasadmissions.krea.edu.in' },
    { id: 7, title: 'ASHOKA', date: 'November 22, 2023', closingDate: 'June 10, 2024  ', link: 'https://apply.ashoka.edu.in/' },
    { id: 8, title: 'OP JINDAL', date: 'November 15, 2023   ', closingDate: 'June 05, 2024', link: 'https://jgu.edu.in/' },
  ];

  const getNoticesForTab = () => {
    switch (activeTab) {
      case 'cuetNotifications':
        return cuetNotificationsNotices.map((notice) => (
          <React.Fragment key={notice.id}>
            <a href={notice.link} target="_blank" rel="noreferrer" className=' hover:underline decoration-blue-800 no-underline text-black '>
              <li className={`my-[8px] max-md:mx-4  ${activeTab === 'cuetNotifications' ? '' : ''}`}>
                <p className='text-black '>{notice.title}</p>
              </li>
              <div className="text-slate-600 max-md:text-sm mb-1">Published on {notice.date}</div>
              <div className="text-slate-600  max-md:text-sm mb-8">Closing on {notice.closingDate}</div>
            </a>
          </React.Fragment>
        ));
      case 'otherExamsNotifications':
        return otherExamsNotificationsNotices.map((notice, index) => (
          <React.Fragment key={notice.id}>
            <a href={notice.link} target="_blank" rel="noreferrer" className='hover:underline decoration-blue-800 no-underline text-black'>
              <li className={`my-[8px]  ${activeTab === 'cuetNotifications' ? '' : ''}`}>
                {notice.title}
              </li>
              <div className="text-slate-600 mb-1">Published on {notice.date}</div>
              <div className="text-slate-600 mb-8">Closing on {notice.closingDate}</div>
            </a>
          </React.Fragment>
        ));
      default:
        return [];

    }
  };

  const notices = getNoticesForTab();

  return (
    <div className=" mx-auto relative z-[1000] w-full justify-center mb-[40px]">
      <div className='md:min-w-[30em] z-50 max-sm:w-[20em]  max-md:mx-auto   '>
        <div className="bg-[#ffffff00]  backdrop-filter backdrop-blur-[30px] shadow-xl  rounded-xl"
        >
          <div className="pb-8 px-8 flex  text-center mb-[-30px]">
            <ul className="flex  justify-center gap-[20px]">
              {['cuetNotifications', 'otherExamsNotifications'].map((tab) => (
                <h key={tab}  >
                  <p
                    className={` cursor-pointer font-bold max-md:text-[12px]  hover:text-blue-500 text-black   ${activeTab === tab ? 'text-blue-500' : ''}`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab === 'cuetNotifications' ? 'CUET Notifications' : 'Other Exams Notifications'}
                  </p>
                  <hr className={`my-2 ${activeTab === tab ? 'border-b border-blue-500' : ''}`} />
                </h>
              ))}
              <div className="absolute top-0 right-0 m-3">
                <RxCross1 className="cursor-pointer" onClick={onClose} />
              </div>
            </ul>


          </div>
          <div
            className="pt-0 h-[20rem] overflow-y-scroll"
          >
            <div >
              <div className={`tab-pane fade ${activeTab === 'cuetNotifications' ? 'active show' : ''}`} id="cuetNotifications">
                <ul className="my-6 mx-6 ps-4 ">{notices}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExamInfo