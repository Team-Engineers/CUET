import axios from 'axios';
import React, { useState } from 'react';
import { FaCheck, FaQuestionCircle } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { API } from '../../utils/constants';
import { useAuth } from "../../utils/context";
import Footer from '../Footer';
import Navbar from '../Navbar';
import PackFaq from "./PackFaq";
import PriceTables from './PriceCard';
const PriceCard = ({ _id, nameOfPlan, bgColor, amount, description, benefits }) => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  let options;
  if (nameOfPlan === 'SOLO PACK' || nameOfPlan === 'PAIR PACK') {
    options = [
      { value: "General English", label: "General English" },
      { value: "General Test", label: "General Test" },
      { value: "Mathematics", label: "Mathematics" },
      { value: "Physics", label: "Physics" },
      { value: "Chemistry", label: "Chemistry" },
      { value: "Biology", label: "Biology" },
      { value: "Accountancy", label: "Accountancy" },
      { value: "Economics", label: "Economics" },
      { value: "Business Studies", label: "Business Studies" },
      { value: "History", label: "History" },
      { value: "Political Science", label: "Political Science" },
      { value: "Geography", label: "Geography" },
      { value: "Psychology", label: "Psychology" },
      { value: "Sociology", label: "Sociology" }
    ];
  } else {
    options = [
      { value: "Mathematics", label: "Mathematics" },
      { value: "Physics", label: "Physics" },
      { value: "Chemistry", label: "Chemistry" },
      { value: "Biology", label: "Biology" },
      { value: "Accountancy", label: "Accountancy" },
      { value: "Economics", label: "Economics" },
      { value: "Business Studies", label: "Business Studies" },
      { value: "History", label: "History" },
      { value: "Political Science", label: "Political Science" },
      { value: "Geography", label: "Geography" },
      { value: "Psychology", label: "Psychology" },
      { value: "Sociology", label: "Sociology" }
    ];
  }
  const handleSelectChange = (selected) => {
    if ((nameOfPlan === 'SOLO PACK') && selected.length > 1) {
      setErrorMessage("Select only one option.");
    } else if ((nameOfPlan === 'PAIR PACK') && selected.length > 2) {
      setErrorMessage("Select only two options");
    }
    else if ((nameOfPlan === 'MEGA PACK') && selected.length > 3) {
      setErrorMessage("Select only three options");
    }
    else if ((nameOfPlan === 'JUMBO PACK') && selected.length > 4) {
      setErrorMessage("Select only four options");
    } else {
      setSelectedOptions(selected);
      setErrorMessage('');
    }
  };



  const renderIcon = (benefit) => {
    switch (benefit) {
      case 'Both General English & General Test':
      case 'Unlimited Attempts ':
      case 'Full Access to Prep Mudules':
      case 'Full Access to Practice Tests':
        return <FaCheck className='text-green-400' />;
      default:
        return <FaQuestionCircle className='text-blue-400' />;
    }
  };
  const initPayment = async () => {
    try {
      const response = await axios.post(`${API}/payment/initiate`, {
        packageId: _id,
        userId: auth.user?._id,
        selectedOptions: selectedOptions.map(option => option.value),
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
    <div id='select' className="price-card flex-col-reverse lg:flex-row lg:h-[550px] my-4 j items-center flex">
      <div className="max-md:hidden rounded-3xl max-lg:justify-center max-lg:top-[-30px] flex flex-col justify-center px-10 hover:scale-105 shadow-2xl transition-all duration-100 p-5 relative lg:left-5 z-0 bg-white h-[400px]">
        <h4 className='font-bold text-[25px]'>Plan Benefits:
          <hr className='my-1' />
        </h4>
        <h className='font-medium text-[13px] md:text-[18px]'>
          {benefits.map((benefit, index) => (
            <p key={index} className="my-4">
              {renderIcon(benefit)}
              <span className='ml-3'>{benefit}</span>
            </p>
          ))}
        </h>
      </div>

      <div className='p-4 md:max-w-[350px] max-md:w-full relative z-10 md:max-h-[700px] max-h-[800px] bg-white transition-all duration-100 shadow-2xl my-8 rounded-3xl backdrop-blur[40px] hover:scale-105 text-center text-black mx-3 '>
        <div className='p-2 py-3 '>
          <h2 style={{ background: bgColor }} className='text-[25px] mb-6 border-dashed border-2 border-blue-950 p-2 mx-auto text-black whitespace-nowrap rounded-3xl '>{nameOfPlan}</h2>
          <hr className='my-2' />
          <h1 className='text-10xl text-slate-700'>Rs {amount}
            <span className="text-gray-400 font-medium text-xl">/ year</span>
            <p className='ml-0 text-[12px]'>*GST Excluded</p>
          </h1>
          <hr className='my-2 ' />
          <h className='md:hidden font-medium text-[13px] md:text-[18px]'>
            {benefits.map((benefit, index) => (
              <p key={index} className="mt-4">
                {renderIcon(benefit)}
                <span className='ml-3'>{benefit}</span>
              </p>
            ))}
          </h>
          <p className='max-md:hidden text-[15px] text-slate-600 px-1 md:h-[100px] '>{description}</p>
          <div className="md:pt-8 pt-5">
            <h onClick={() => {
              if (!auth.user) {
                navigate('/login');
                return;
              }
              setShowOptions(true);
            }}>
              <p className="w-full py-4 cursor-pointer text-black border transition-colors duration-100 border-blue-800 bg-[#bbbbbb8e] border-solid hover:bg-blue-600 md:mt-8 rounded-xl hover:text-white">
                <span className="font-medium">
                  Get Started
                </span>
              </p>
            </h>
          </div>
        </div>
      </div>
      {showOptions && (
        <>
          <div className="popup-overlay  ">
            <div className="rounded-3xl bg-[#ffffffee] p-4 px-6 max-md:px-2 max-md:mx-4 backdrop-blur-[100px] shadow-2xl  ">
              <div className="flex justify-between">
                <h2 className="font-semibold mx-2 md:text-xl whitespace-nowrap max-md:text-[17px]">Select Subjects for <span className='px-4 py-2 rounded-3xl max-md:px-2 max-md:text-[16px] ' style={{ background: bgColor }}>{nameOfPlan}</span></h2>
                <h3 className="mx-4 cursor-pointer" onClick={() => setShowOptions(false)} ><RxCross1 /></h3>
              </div>
              <hr className="my-1" />
              <div className='flex flex-col justify-center items-center'>
                {(nameOfPlan === 'MEGA PACK' || nameOfPlan === 'JUMBO PACK') && (
                  <p className='font-medium text-[18px] text-gray-700'>General English & General Test is free for this Pack</p>
                )}
                <p className='font-medium text-[18px]'>Select Any&nbsp;
                  {nameOfPlan === 'SOLO PACK' && (
                    <span>One</span>
                  )}
                  {nameOfPlan === 'PAIR PACK' && (
                    <span>Two</span>
                  )}
                  {nameOfPlan === 'MEGA PACK' && (
                    <span>Three</span>
                  )}
                  {nameOfPlan === 'JUMBO PACK' && (
                    <span>Four</span>
                  )}
                  {(nameOfPlan === 'JUMBO PACK' || nameOfPlan === 'MEGA PACK') && (
                    <span>&nbsp;Domain Subject</span>
                  )}
                </p>
                <div className="mt-4 relative">
                  <Select
                    isMulti
                    options={options}
                    value={selectedOptions}
                    onChange={handleSelectChange}
                  />
                  <div className="text-red-600 text-l mt-2">{errorMessage}</div>
                </div>
              </div>
              <div className="flex mx-4 my-3  justify-end">
                <h onClick={initPayment} className="block cursor-pointer mx-auto mt-4 border-[2px] border-solid border-blue-400 bg-[#dfdbdbe8] hover:text-white px-3 py-2 rounded-md hover:bg-blue-600">Confirm Selection</h>

              </div>
            </div>
          </div>

        </>
      )}
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

const Tabs = ({ packages, setActiveTab, activeTab, setBgColor, bgColor }) => {
  const changeBgColor = (color) => {
    setBgColor(color);
  }

  return (
    <div className=" border max-sm:fixed max-sm:w-[95%]  bottom-2  z-50 flex justify-between  bg-white rounded-lg shadow-2xl ">
      {packages.map((packageItem) => (
        <div
          key={packageItem._id}
          onClick={() => { setActiveTab(packageItem._id); changeBgColor(packageItem.bgColor); }}
          className={`bg-white font-medium max-sm:text-[3vw] shadow-2xl cursor-pointer rounded p-2 md:p-5 m-1 ${activeTab === packageItem._id ? 'active' : ''}`}
          style={{ backgroundColor: activeTab === packageItem._id ? bgColor : '' }}
        >
          {packageItem.nameOfPlan}
        </div>
      ))}
    </div>
  );
};

const PriceCardPage = ({ packages }) => {
  const initialActiveTabId = packages.find(packageItem => packageItem.nameOfPlan === 'SOLO PACK')._id;
  const [activeTab, setActiveTab] = useState(initialActiveTabId);
  const [bgColor, setBgColor] = useState(packages.find(packageItem => packageItem._id === initialActiveTabId).bgColor);

  return (
    <div className="flex overflow-hidden  flex-col justify-center items-center  bg-[#c4e9f0]" style={{ backgroundColor: bgColor, transition: "background-color 0.3s ease" }}>
      <Navbar />

      <Tabs packages={packages} setActiveTab={setActiveTab} activeTab={activeTab} setBgColor={setBgColor} bgColor={bgColor} />
      <PriceCardsContainer packages={packages.filter((packageItem) => packageItem._id === activeTab)} />
      <PriceTables />

      <PackFaq />
      <Footer />
    </div>
  );
};


const Packages = [
  {
    _id: "65d93ff1aaf8ebc47c522ced",
    nameOfPlan: 'SOLO PACK',
    amount: 699,
    description:
      'Maximize your exam readiness with our Solo Pack. Choose from General English or General Test or any domain subject. Includes preparatory module, 12 practice tests, and 12 mock tests.',
    benefits: [
      'General English / General Test',
      'Any one Domain Subject',
      'Full Access to Prep Mudules',
      '12 Practice Tests',
      '12 Mock Tests',
      'Unlimited Attempts '
    ],
    bgColor: '#c4e9f0'
  },
  {
    _id: "65d94008aaf8ebc47c522cef",
    nameOfPlan: 'PAIR PACK',
    amount: 1299,
    description:
      'Supercharge your preparation with our Pair Pack. Choose any from: General English and any one domain subject, General Test and one domain subject, or any two domain subjects. Includes preparatory modules, 12 practice tests, and 12 mock tests for each.',
    benefits: [
      'General English / General Test',
      'Any two Domain Subject',
      'Full Access to Prep Mudules',
      '12 Practice Tests',
      '12 Mock Tests',
      'Unlimited Attempts '
    ],
    bgColor: '#C6EBBE'
  },
  {
    _id: "65d9428fd3267bf1efe0f364",
    nameOfPlan: 'MEGA PACK',
    amount: 2599,
    description:
      'Introducing our MEGA pack! Choose any three domain subjects of your choice, along with general English and general Test. Includes preparatory modules, 12 practice tests, and 12 mock tests for each.',
    benefits: [
      'Both General English & General Test',
      'Any three Domain Subject',
      'Full Access to Prep Mudules',
      'Full Access to Practice Tests',
      '12 Mock Tests',
      'Unlimited Attempts '
    ],
    bgColor: '#d9c4f0'
  },
  {
    _id: "65e352e265a057561b4dcb67",
    nameOfPlan: 'JUMBO PACK',
    amount: 2999,
    description:
      'Elevate your exam readiness with our Jumbo Pack. Choose any four domain subjects along with general Test and general English. Includes preparatory modules, 12 practice tests, and 12 mock tests for each.',
    benefits: [
      'Both General English & General Test',
      'Any four Domain Subject',
      'Full Access to Prep Mudules',
      'Full Access to Practice Tests',
      '12 Mock Tests',
      'Unlimited Attempts '
    ],
    bgColor: '#E6D0CF'
  },
];

export default function App() {
  return (
    <div className="">
      <PriceCardPage packages={Packages} />
    </div>
  );
}
