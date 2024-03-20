import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';


export default function ShareButtons() {
  const currentUrl = window.location.href;   // URL of the current blog post


  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareOnInstagram = () => {
    window.open(`https://www.instagram.com/share?url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareOnTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  return (
    <div className="flex-col  justify-center items-center float-left  space-x-4 w-[70%] bg-slate h-auto p-4  rounded-lg ">
          <div>share:</div>

     <div className='flex ml-[-15px]'>
      <button className='bg-white w-fit flex item-centre justify-center  cursor-pointer my-2 rounded-lg m-1 ' onClick={shareOnWhatsApp}><FaWhatsapp className=' h-[32px] w-[36px]' /></button>
      <button className='bg-white w-fit flex item-centre justify-center  cursor-pointer my-2 rounded-lg m-1 ' onClick={shareOnFacebook}><FaFacebook className=' h-[32px] w-[36px]' /></button>
      <button className='bg-white w-fit flex item-centre justify-center  cursor-pointer my-2 rounded-lg m-1 ' onClick={shareOnInstagram}><FaInstagram className=' h-[32px] w-[36px]' /></button>
      <button className='bg-white w-fit flex item-centre justify-center  cursor-pointer my-2 rounded-lg m-1 ' onClick={shareOnTelegram}><FaTelegram className=' h-[32px] w-[36px]' /></button>
    </div>
    </div>
  );
}
