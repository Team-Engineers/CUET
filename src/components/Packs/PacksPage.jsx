import axios from 'axios';
import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { API } from '../../utils/constants';
import { useAuth } from "../../utils/context";
import Footer from '../Footer';
import Navbar from '../Navbar';
import FAQ from "../home/FAQ";

const PriceCard = ({ _id, nameOfPlan, amount, setActiveTab, activeTab }) => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const renderIcon = (benefit) => {
    const packageItem = Packages.find(item => item.nameOfPlan === nameOfPlan);
    if (packageItem && packageItem.benefitsIcons && packageItem.benefitsIcons[benefit]) {
      const iconData = packageItem.benefitsIcons[benefit];
      if (typeof iconData === 'object') {
        if ('text' in iconData) {
          return <span className="text font-normal w-[50%]">{iconData.text}</span>;
        } else {
          const IconComponent = iconData.icon;
          return (
            <div className="icon-with-text">
              <IconComponent className="icon" style={{ color: iconData.color }} />
              <span className="text">{iconData.text}</span>
            </div>
          );
        }
      } else {
        const IconComponent = iconData;
        return <IconComponent className="icon" style={{ color: iconData === FaCheck ? 'green' : 'red' }} />;
      }
    } else {
      return null;
    }
  };



  const handleCardClick = () => {
    setActiveTab(_id);
  };

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
              setActiveTab(_id);
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
      setActiveTab(_id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`max-w-[350px]  transition-all relative cursor-pointer z-20 duration-100 justify-center items-center flex ${activeTab === _id ? 'scale-105' : ''}`} onClick={handleCardClick} >
      <div className='max-w-[250px] relative left-20 z-10 h-[680px] bg-white transition-all duration-100 shadow-xl mx-[6px] my-8 rounded-md backdrop-blur[40px] text-center text-black'>
        <div className='p-1 py-3'>
          <h2 className='text-[16px] mb-8 py-2 px-1 w-[100%] mx-auto text-black whitespace-nowrap bg-[#85ffeb] '>{nameOfPlan}</h2>
          <div className="benefits">
            {fixedBenefits.map((benefit, index) => (
              <div key={index} className="benefit my-8">
                {renderIcon(benefit)}
              </div>
            ))}
          </div>
          <div className='w-[30px] rounded-full mx-auto h-[30px] border-[1px] flex justify-center items-center border-solid border-black'>
            {activeTab === _id && (
              <div className="relative z-50 h-[20px] w-[20px] mx-auto flex justify-center items-center  bg-blue-500 rounded-full">

              </div>
            )}
          </div>

          <h1 className='text-xl text-slate-700'>Rs {amount}</h1>
          <button className='bg-blue-500 w-[80%] mt-3 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={initPayment}>Get <br /> started</button>

        </div>
      </div>
    </div >
  );
};


const PriceCardsContainer = ({ packages, setActiveTab, activeTab }) => {
  return (
    <div className="flex ">
      <div className='w-[250px] absolute left-10 z-10  h-[480px] bg-white transition-all duration-100 shadow-xl  my-8 rounded-md backdrop-blur[40px] hover:scale-105 text-center  text-black '>
        <h4 className='text-[20px] font-medium'>Plan Benefits:</h4>
        <hr className='mt-[-5px] grey' />
        <ul className='leading-[13px] text-[16px] font-normal px-6'>
          {fixedBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <p>{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
      {packages.map((packageItem) => (
        <PriceCard
          key={packageItem._id}
          {...packageItem}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      ))}
    </div>
  );
};

const Tabs = ({ packages, setActiveTab, activeTab, setBgColor }) => {
  const changeBgColor = (color) => {
    setBgColor(color);
  }

  return (
    <div className="tabs border relative left-24 bg-white p-1 mt-4 mb-6 rounded-lg shadow-sm ">
      {packages.map((packageItem) => (
        <div
          key={packageItem._id}
          onClick={() => { setActiveTab(packageItem._id); changeBgColor(packageItem.bgColor); }}
          className={`tab-button px-3 bg-white shadow-2xl shadow-gray-400 cursor-pointer rounded p-4 m-2 ${activeTab === packageItem._id ? 'active bg-yellow-200' : ''}`}
        >
          {packageItem.nameOfPlan}
        </div>
      ))
      }
    </div >
  );
};

const PriceCardPage = ({ packages }) => {
  const initialActiveTabId = packages.find(packageItem => packageItem.nameOfPlan === 'SOLO PACK')._id;
  const [activeTab, setActiveTab] = useState(initialActiveTabId);
  const [bgColor, setBgColor] = useState(packages.find(packageItem => packageItem._id === initialActiveTabId).bgColor);

  return (
    <div className="price-card-page bg-[#c4e9f0]" style={{ backgroundColor: bgColor }}>
      <Navbar />
      <Tabs packages={packages} setActiveTab={setActiveTab} activeTab={activeTab} setBgColor={setBgColor} />
      <PriceCardsContainer
        packages={packages}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <FAQ />
      <Footer />
    </div>
  );
};


const Packages = [
  {
    _id: "65d93ff1aaf8ebc47c522ced",
    nameOfPlan: 'SOLO PACK',
    amount: 699,
    bgColor: '#c4e9f0',
    benefitsIcons: {
      'GENERAL ENGLISH': { text: 'Can be chosen' },
      'GENERAL TEST': { text: 'Can be chosen' },
      'DOMAIN SUBJECT': { text: 'Any 1' },
      'PREP MODULES': { text: "FULL ACCESS" },
      'PRACTICE TESTS': { text: "12" },
      'MOCK TESTS': { text: "12" },
      'UNLIMITED ATTEMPT': FaCheck,
      'TOTAL SUBJECT': { text: "1" }
    }
  },
  {
    _id: "65d94008aaf8ebc47c522cef",
    nameOfPlan: 'PAIR PACK',
    amount: 1299,
    bgColor: '#f0eac4',
    benefitsIcons: {
      'GENERAL ENGLISH': { text: 'Can be chosen' },
      'GENERAL TEST': { text: 'Can be chosen' },
      'DOMAIN SUBJECT': { text: 'Any 2' },
      'PREP MODULES': { text: "FULL ACCESS" },
      'PRACTICE TESTS': { text: "12" },
      'MOCK TESTS': { text: "12" },
      'UNLIMITED ATTEMPT': FaCheck,
      'TOTAL SUBJECT': { text: "2" }
    }
  },
  {
    _id: "65d9428fd3267bf1efe0f364",
    nameOfPlan: 'MEGA PACK',
    amount: 2599,
    bgColor: '#6B9292',
    benefitsIcons: {
      'GENERAL ENGLISH': FaCheck,
      'GENERAL TEST': FaCheck,
      'DOMAIN SUBJECT': { text: 'Any 3' },
      'PREP MODULES': { text: "FULL ACCESS" },
      'PRACTICE TESTS': { text: "12" },
      'MOCK TESTS': { text: "12" },
      'UNLIMITED ATTEMPT': FaCheck,
      'TOTAL SUBJECT': { text: "5" }
    }
  },
  {
    _id: "65e352e265a057561b4dcb67",
    nameOfPlan: 'JUMBO PACK',
    amount: 2999,
    bgColor: '#94B0DA',
    benefitsIcons: {
      'GENERAL ENGLISH': FaCheck,
      'GENERAL TEST': FaCheck,
      'DOMAIN SUBJECT': { text: 'Any 4' },
      'PREP MODULES': { text: "FULL ACCESS" },
      'PRACTICE TESTS': { text: "12" },
      'MOCK TESTS': { text: "12" },
      'UNLIMITED ATTEMPT': FaCheck,
      'TOTAL SUBJECT': { text: "6" }
    }
  },
  {
    _id: "65e67846183e38473cf606f7",
    nameOfPlan: 'ROOKIE PACK',
    amount: 0,
    bgColor: '##B1EDE8',
    benefitsIcons: {
      'GENERAL ENGLISH': FaTimes,
      'GENERAL TEST': FaTimes,
      'DOMAIN SUBJECT': FaTimes,
      'PREP MODULES': { text: "1" },
      'PRACTICE TESTS': { text: "1" },
      'MOCK TESTS': { text: "1" },
      'UNLIMITED ATTEMPT': FaCheck,
      'TOTAL SUBJECT': { text: "0" }
    }
  },
  {
    _id: "65e6796c183e38473cf606f8",
    nameOfPlan: 'NOVICE PACK',
    amount: 0,
    bgColor: '#94B0DA',
    benefitsIcons: {
      'GENERAL ENGLISH': FaTimes,
      'GENERAL TEST': FaTimes,
      'DOMAIN SUBJECT': FaTimes,
      'PREP MODULES': { text: "3" },
      'PRACTICE TESTS': { text: "3" },
      'MOCK TESTS': { text: "3" },
      'UNLIMITED ATTEMPT': FaCheck,
      'TOTAL SUBJECT': { text: "0" }
    }
  },
];


const fixedBenefits = [
  'GENERAL ENGLISH',
  'GENERAL TEST',
  'DOMAIN SUBJECT',
  'PREP MODULES',
  'PRACTICE TESTS',
  'MOCK TESTS',
  'UNLIMITED ATTEMPT',
  'TOTAL SUBJECT'
];

export default function App() {
  return (
    <div className="">
      <PriceCardPage packages={Packages} />
    </div>
  );
}

