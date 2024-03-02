import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './css/PackPage.css';
import {  Pagination } from 'swiper/modules';
import { API } from '../../utils/constants';
import PriceCard from './PriceCard';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function PackPage() {
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
    <Navbar/>
     
        <div className=" overflow-hidden left-0 w-full flex flex-col justify-center items-center h-screen mx-auto ">
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
        <Footer/>
    </>
  );
}
