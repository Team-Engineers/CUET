import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './css/PackPage.css';
import { RxCross1 } from "react-icons/rx";

import { EffectCoverflow, Pagination } from 'swiper/modules';
import PriceCard from './PriceCard';

export default function PackPage({ isOpen, onClose }) {

  const heightCard = ["450px","470px","500px","470px","450px"];
  return (
    <>
      {isOpen && (
        <div className="absolute overflow-hidden left-0 w-full flex flex-col justify-center items-center h-max backdrop-blur-[10px] bg-[#00000045] mx-auto my-6">
          <div className="close-btn cursor-pointer h-[50px] w-[50px] text-black" onClick={onClose}><RxCross1 /></div>

            <div className="flex flex-wrap justify-center items-center my-6">
              {[...Array(5)].map((_, index) => (            
                <PriceCard height={heightCard[index]} index={index}/>
              ))}
            </div>
        </div>
      )}
    </>
  );
}


{/* <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  pagination={true}
  modules={[ Pagination]}
  className="mySwiper h-[500px]"
>
  {[...Array(5)].map((_, index) => (
    <SwiperSlide key={index}>
      <PriceCard />
    </SwiperSlide>
  ))}
</Swiper> */}
