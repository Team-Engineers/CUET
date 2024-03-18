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
    <div className="flex space-x-4 w-[80%] mx-[-50px] bg-slate-200 h-auto p-4 flex-col">
      <button className='bg-white w-fit flex item-centre justify-center cursor-pointer' onClick={shareOnWhatsApp}><FaWhatsapp className=' h-12 w-12 mr-2' /></button>
      <button className='bg-white w-fit flex item-centre justify-center cursor-pointer' onClick={shareOnFacebook}><FaFacebook className=' h-12 w-12' /></button>
      <button className='bg-white w-fit flex item-centre justify-center cursor-pointer' onClick={shareOnInstagram}><FaInstagram className=' h-12 w-12' /></button>
      <button className='bg-white w-fit flex item-centre justify-center cursor-pointer' onClick={shareOnTelegram}><FaTelegram className=' h-12 w-12' /></button>
    </div>
  );
}
