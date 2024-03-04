import axios from 'axios';
import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { API } from '../../utils/constants';
import { useAuth } from "../../utils/context";
import Footer from '../Footer';
import Navbar from '../Navbar';
import FAQ from "../home/FAQ";
const PriceCard = ({ _id, nameOfPlan, amount, description, benefits }) => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const initPayment = async () => {
    try {
      const response = await axios.post(`${API}/payment/initiate`, {
        packageId: _id,
        userId: auth.user?._id,
      });
      const { data } = response;
      const options = {
        key: "rzp_test_NAYbSHvOM4lmPb",
        amount: data.amount,
        currency: data.currency,
        name: nameOfPlan,
        description: "Test Transaction",
        image: "",
        order_id: data.order_id,
        handler: async (response) => {
          try {
            const verifyResponse = await axios.put(`${API}/payment/verify`, {
              userId: auth.user?._id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              packageId: _id,
            });

            console.log(verifyResponse.data);
            if (verifyResponse.data.success) {
              const userResponse = await axios.get(`${API}/users/find/${auth.user?._id}`);
              const updatedUser = userResponse.data;
              const updatedAuth = { ...auth, user: updatedUser };
              setAuth(updatedAuth);
              localStorage.setItem("auth", JSON.stringify(updatedAuth));
              navigate('/courses');
            }
          } catch (error) {
            console.error(error);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="price-card h-[550px] justify-center items-center flex">
      <div className="benefits rounded hover:scale-105 shadow-2xl transition-all duration-100 p-5 top-[-30px] relative left-5 z-0 bg-white h-[400px]">
        <h4>Plan Benefits:</h4>
        <ul className='flex flex-col justify-between'>
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              {benefit.includes('Unlimited') ? <FaCheck className="text-green-500 mr-2" /> : <FaTimes className="text-red-500 mr-2" />}
              <p>{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='price-card max-w-[350px] relative  z-10  max-h-[500px] bg-white transition-all duration-100 shadow-2xl  my-8 rounded-2xl backdrop-blur[40px] hover:scale-105 text-center  text-black mx-3 mt-[-30px]'>
        <div className='p-2 py-3 pt-7'>
          <h2 className='text-[25px] p-2 w-[100%] mx-auto  text-black whitespace-nowrap bg-[#85ffeb] '>{nameOfPlan}</h2>
          <h1 className='text-10xl text-slate-700'>Rs {amount}</h1>
          <p className='text-[12px] text-slate-600 px-1 md:h-[100px] '>{description}</p>
          <div className='features text-[20px]'>
            <div className='feature-cont'>
              <div className='icon'></div>
              <div className='feature-name bg-gradient-to-br w-[70%] mx-auto border-[1px] border-solid cursor-pointer border-black p-2 rounded-3xl'>General English</div>
            </div>
            <div className='feature-cont'>
              <div className='icon'></div>
              <div className='feature-name bg-gradient-to-br w-[70%] mx-auto border-[1px] border-solid cursor-pointer border-black p-2 my-2 rounded-3xl'>General Test</div>
            </div>
            <div className='feature-cont'>
              <div className='icon'></div>
              <div className='feature-name bg-gradient-to-br w-[70%] mx-auto border-[1px] border-solid cursor-pointer border-black p-2 rounded-3xl'>Any Domain Subject</div>
            </div>
          </div>
          <button className='bg-blue-500 w-[70%] mt-3 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={initPayment}>Get started</button>
        </div>
      </div>
    </div>
  );
};

const PriceCardsContainer = ({ packages }) => {
  return (
    <div className="price-cards-container">
      {packages.map((packageItem) => (
        <PriceCard key={packageItem._id} {...packageItem} />
      ))}
    </div>
  );
};

const Tabs = ({ packages, setActiveTab, activeTab, setBgColor }) => {
  const changeBgColor = (color) => {
    setBgColor(color);
  }

  return (
    <div className="tabs border bg-white p-5 rounded-lg shadow-2xl ">
      {packages.map((packageItem) => (
        <div
          key={packageItem._id}
          onClick={() => { setActiveTab(packageItem._id); changeBgColor(packageItem.bgColor); }}
          className={`tab-button  bg-white shadow-2xl shadow-black cursor-pointer rounded p-5 m-2  ${activeTab === packageItem._id ? 'active bg-yellow-200' : ''}`}
        >
          {packageItem.nameOfPlan}
        </div>
      ))}
    </div>
  );
};

const PriceCardPage = ({ packages }) => {
  const initialActiveTabId = packages.find(packageItem => packageItem.nameOfPlan === 'CUET SOLO PACK')._id;
  const [activeTab, setActiveTab] = useState(initialActiveTabId);
  const [bgColor, setBgColor] = useState(packages.find(packageItem => packageItem._id === initialActiveTabId).bgColor);

  return (
    <div className="price-card-page bg-[#c4e9f0]" style={{ backgroundColor: bgColor }}>
      <Navbar />

      <Tabs packages={packages} setActiveTab={setActiveTab} activeTab={activeTab} setBgColor={setBgColor} />
      <PriceCardsContainer
        packages={packages.filter((packageItem) => packageItem._id === activeTab)}
      />
      <FAQ />
      <Footer />
    </div>
  );
};


const Packages = [
  {
    _id: "65d93ff1aaf8ebc47c522ced",
    nameOfPlan: 'CUET SOLO PACK',
    amount: 699,
    description:
      'Maximize your exam readiness with our Solo Pack. Choose from General English or General Test or any domain subject. Includes preparatory module, 12 practice tests, and 12 mock tests.',
    benefits: [
      '70,000+ Mock Test',
      'Unlimited Pro Live Test',
      'Unlimited Practice Pro Questions',
      '17,000+ Previous Year Papers',
      'Unlimited Re-Attempt mode for All Tests'
    ],
    bgColor: '#c4e9f0'
  },
  {
    _id: "65d94008aaf8ebc47c522cef",
    nameOfPlan: 'CUET PAIR PACK',
    amount: 1299,
    description:
      'Supercharge your preparation with our Pair Pack. Choose any from: General English and any one domain subject, General Test and one domain subject, or any two domain subjects. Includes preparatory modules, 12 practice tests, and 12 mock tests for each.',
    benefits: [
      '70,000+ Mock Test',
      'Unlimited Pro Live Test',
      'Unlimited Practice Pro Questions',
      '17,000+ Previous Year Papers',
      'Unlimited Re-Attempt mode for All Tests'
    ],
    bgColor: '#f0eac4'
  },
  {
    _id: "65d9428fd3267bf1efe0f364",
    nameOfPlan: 'CUET MEGA PACK',
    amount: 2599,
    description:
      'Introducing our MEGA pack! Choose any three domain subjects of your choice, along with general English and general Test. Includes preparatory modules, 12 practice tests, and 12 mock tests for each.',
    benefits: [
      '70,000+ Mock Test',
      'Unlimited Pro Live Test',
      'Unlimited Practice Pro Questions',
      '17,000+ Previous Year Papers',
      'Unlimited Re-Attempt mode for All Tests'
    ],
    bgColor: '#e9c4f0'
  },
  {
    _id: "65e352e265a057561b4dcb67",
    nameOfPlan: 'CUET JUMBO PACK',
    amount: 2999,
    description:
      'Elevate your exam readiness with our Jumbo Pack. Choose any four domain subjects along with general Test and general English. Includes preparatory modules, 12 practice tests, and 12 mock tests for each.',
    benefits: [
      '70,00+ Mock Test',
      'Unlimited Pro Live Test',
      'Unlimited Practice Pro Questions',
      '17,000+ Previous Year Papers',
      'Unlimited Re-Attempt mode for All Tests'
    ],
    bgColor: '#c4f0e9'
  },
];

export default function App() {
  return (
    <div className="">
      <PriceCardPage packages={Packages} />
    </div>
  );
}