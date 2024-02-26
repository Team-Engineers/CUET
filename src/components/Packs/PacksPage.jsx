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
  return (
    <>
      {isOpen && (
        <div className="absolute overflow-hidden left-0 w-full flex flex-col justify-center items-center h-screen backdrop-blur-[10px] bg-[#00000045] mx-auto ">
                      <div className="close-btn cursor-pointer h-[50px] w-[50px] text-black" onClick={onClose}><RxCross1 /></div>

          <div className="">
            <Swiper
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
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
