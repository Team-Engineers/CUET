import React from "react";

import email from "./blogImages/EMail1.png";
import facebook from "./blogImages/facebook1.png";
import telegram from "./blogImages/telegram.webp";
import twitter from "./blogImages/twitter1.png";
import whatsap from "./blogImages/whatsap1.png";

import { Link } from "react-router-dom";

export default function ShareButtons() {
  const currentUrl = window.location.href; // URL of the current blog post

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(currentUrl)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank"
    );
  };

  const shareOnInstagram = () => {
    window.open(
      `https://www.instagram.com/share?url=${encodeURIComponent(currentUrl)}`,
      "_blank"
    );
  };

  const shareOnTelegram = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`,
      "_blank"
    );
  };

  return (
    <div className="flex-col  justify-center items-center float-left ml-[-18px]  space-x-4 w-[70%] bg-slate h-auto   rounded-lg ">
      <div className="ml-[18px]">share:</div>

      <div className="flex  items-center justify-center float-left ml-[-20px] leading-4">
        <Link to="" onClick={shareOnWhatsApp}>
          <img src={facebook} className="h-[38px] w-[40px]" />
        </Link>
        <Link to="" onClick={shareOnWhatsApp}>
          <img src={whatsap} className="h-[28px] w-[28px]" />
        </Link>
        <Link to="" onClick={shareOnWhatsApp}>
          <img src={telegram} className="h-[28px] w-[28px]" />
        </Link>
        <Link to="" onClick={shareOnWhatsApp}>
          <img src={twitter} className="h-[28px] w-[28px]" />
        </Link>
        <Link to="" onClick={shareOnWhatsApp}>
          <img src={email} className="h-[28px] w-[28px]" />
        </Link>
      </div>
    </div>
  );
}
