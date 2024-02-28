import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './css/PackPage.css';
import { RxCross1 } from "react-icons/rx";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { API } from '../../utils/constants';
import PriceCard from './PriceCard';

export default function PackPage({ isOpen, onClose }) {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await fetch(`${API}/package/`);
      if (!response.ok) {
        throw new Error('Failed to fetch packages');
      }
      const data = await response.json();
      setPackages(data);
    } catch (error) {
      console.error(error);
    }
  };

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
              modules={[Pagination]}
              className="mySwiper h-[500px]"
            >
              {packages.map((packages, index) => (
                <SwiperSlide key={index}>
                  <PriceCard packages={packages} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
