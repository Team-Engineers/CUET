import React, { useState, useEffect } from 'react';
import './css/PackPage.css';
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
    < div className=" overflow-hidden">
    <Navbar/>
        <div className=" overflow-hidden left-0 w-full max-w-[1280px]  flex flex-col justify-center items-center h-screen mx-auto ">
          <div className=" grid grid-cols-3 mx-5">
              {packages.map((packages, index) => (
                <div key={index}>
                  <PriceCard packages={packages} />
                </div>
              ))}
          </div>
        </div>
        <Footer/>
    </div>
  );
}
