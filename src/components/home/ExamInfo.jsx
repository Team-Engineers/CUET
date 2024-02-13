import React, { useState } from 'react';

const ExamInfo = () => {
    const [activeTab, setActiveTab] = useState('cuetNotifications');
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    const cuetNotificationsNotices = [
      { id: 1, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 2, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 3, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 4, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 5, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 6, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 7, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 8, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 9, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 10, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 11, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 12, title: 'CUET Notifications 2', date: '02/01/2023', link: 'https://example.com/cuet-notifications2' },
    ];
  
    const otherExamsNotificationsNotices = [
  
      { id: 1, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 2, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 3, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 4, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 5, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 6, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 7, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 8, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 9, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 10, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 11, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
      { id: 12, title: 'CUET Notifications 2', date: '02/01/2023', link: 'https://example.com/cuet-notifications2' },
    ];
  
    const getNoticesForTab = () => {
      switch (activeTab) {
        case 'cuetNotifications':
          return cuetNotificationsNotices.map((notice) => (
            <React.Fragment key={notice.id}>
              <a href={notice.link} target="_blank" rel="noreferrer" className=' no-underline text-white '>
                <li className={`my-[8px]  ${activeTab === 'cuetNotifications' ? '' : ''}`}>
                  <p className='text-black '>{notice.title}</p>
                </li>
                <div className="text-slate-600 mb-8">Published on {notice.date}</div>
              </a>
            </React.Fragment>
          ));
        case 'otherExamsNotifications':
          return otherExamsNotificationsNotices.map((notice, index) => (
            <React.Fragment key={notice.id}>
              <a href={notice.link} target="_blank" rel="noreferrer" className=' no-underline text-black'>
                <li className={`my-[8px]  ${activeTab === 'cuetNotifications' ? '' : ''}`}>
                  {notice.title}
                </li>
                <div className="text-slate-600 mb-8">Published on {notice.date}</div>
              </a>
            </React.Fragment>
          ));
        default:
          return [];
  
      }
    };
  
    const notices = getNoticesForTab();
  
    return (
      <div className=" mx-auto max-w-[1500px] justify-center mb-[40px]">
        <div className="grid lg:grid-cols-2 grid-cols-1  mt-[40px] mb-[80px] mx-[5vw] gap-10 ">
          <div className='max-w-[600px] max-md:mx-auto   '>
            <div className="bg-[#ffffff00] backdrop-filter backdrop-blur-[30px] shadow-xl  rounded-xl"
            >
              <div className="pb-8 px-8 text-center mb-[-30px]">
                <ul className="flex flex-wrap justify-center gap-[20px]">
                  {['cuetNotifications', 'otherExamsNotifications'].map((tab) => (
                    <h key={tab}  >
                      <p
                        className={` font-bold  hover:text-blue-500 text-black   ${activeTab === tab ? 'text-blue-500' : ''}`}
                        onClick={() => handleTabClick(tab)}
                      >
                        {tab === 'cuetNotifications' ? 'CUET Notifications' : 'Other Exams Notifications'}
                      </p>
                      <hr className={`my-2 ${activeTab === tab ? 'border-b border-blue-500' : ''}`} />
                    </h>
                  ))}
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
      </div>
    );
  };
export default ExamInfo