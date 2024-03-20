import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';

import facebook from './images/facebook.png'
import whatsap from './images/whatsap.jpg'
import telegram from './images/telegram.webp'
import twitter from './images/twitter.png'
import email from './images/EMail.png'

import { Link } from 'react-router-dom';
import { Gmail } from 'mdi-material-ui';


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
    <div className="flex-col  justify-center items-center float-left ml-[-18px]  space-x-4 w-[70%] bg-slate h-auto   rounded-lg ">
          <div className='ml-[18px]'>share:</div>

     <div className='flex  items-center justify-center float-left ml-[-20px] leading-4'>
     <Link to=''  onClick={shareOnWhatsApp}><img src={facebook} className='h-[36px] w-[44px]' /></Link>
     <Link to=''  onClick={shareOnWhatsApp}><img src={whatsap} className='h-[36px] w-[44px]' /></Link>     
     <Link to=''  onClick={shareOnWhatsApp}><img src={telegram} className='h-[28px] w-[32px]' /></Link>     
     <Link to=''  onClick={shareOnWhatsApp}><img src={twitter} className='h-[32px] w-[36px]' /></Link>    
     <Link to=''  onClick={shareOnWhatsApp}><img src={email} className='h-[32px] w-[36px]' /></Link>
   
    </div>
    </div>
  );
}
