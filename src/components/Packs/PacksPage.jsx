import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './css/PackPage.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import PriceCard from './PriceCard';
import Navbar from "../Navbar"
import Footer from '../Footer'

export default function PackPage() {
  return (
    <>
      <Navbar/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PriceCard/>
        </SwiperSlide>
        <SwiperSlide>
        <PriceCard/>
        </SwiperSlide>
        <SwiperSlide>
        <PriceCard/>
        </SwiperSlide>
        <SwiperSlide>
        <PriceCard/>
        </SwiperSlide>
        <SwiperSlide>
        <PriceCard/>
        </SwiperSlide>
        <SwiperSlide>
        <PriceCard/>
        </SwiperSlide>
        <SwiperSlide>
        <PriceCard/>
        </SwiperSlide>
        <SwiperSlide>
        <PriceCard/>
        </SwiperSlide>
        <SwiperSlide>
        <PriceCard/>
        </SwiperSlide>
      </Swiper>
      <Footer/>
    </>
  );
}
