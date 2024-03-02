import React, { useEffect, useState } from 'react';
import { API } from '../../utils/constants';
import Footer from '../Footer';
import Navbar from '../Navbar';
import PriceCard from './PriceCard';
import './css/PackPage.css';

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
    < div className=" overflow-hidden">
      <Navbar />
      <div className=" overflow-hidden left-0 w-full max-w-[1280px] mb-8 mt-4 pt-4 flex flex-col justify-center items-center  mx-auto ">
        <div className=" grid grid-cols-4 mx-4">
          {packages.map((packages, index) => (
            <div key={index}>
              <PriceCard packages={packages} />
            </div>
          ))}
        </div>
        <p className='self-start ml-6'>*Amount listed exludes GST.</p>
      </div>
      <Footer />
    </div>
  );
}
