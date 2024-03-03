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
      <div className=" overflow-hidden left-0 w-full max-w-[1280px]  flex flex-col justify-center items-center  mx-auto ">
        <h1 className='gradient-text2'>Pricing</h1>
        <div className=" my-10 grid grid-cols-2 self-center max-md:grid-cols-1 lg:grid-cols-4 mx-4">
          {packages.map((packages, index) => (
            <div key={index}>
              <PriceCard packages={packages} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
