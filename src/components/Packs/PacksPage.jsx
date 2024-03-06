import axios from 'axios';
import { FaCheck, FaQuestionCircle } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { API } from '../../utils/constants';
import { useAuth } from "../../utils/context";
import Footer from '../Footer';
import Navbar from '../Navbar';
import FAQ from "../home/FAQ";
<<<<<<< Updated upstream

const PriceCard = ({ _id, nameOfPlan, amount, setActiveTab, activeTab }) => {
=======
import PriceTables from './PriceCard';
const PriceCard = ({ _id, nameOfPlan, bgColor, amount, description, benefits }) => {
>>>>>>> Stashed changes
  const [auth, setAuth] = useAuth();

<<<<<<< Updated upstream
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

=======
  const navigate = useNavigate();
  const [selectedGeneral, setSelectedGeneral] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const renderIcon = (benefit) => {
    switch (benefit) {
      case 'Both General English & General Test':
      case 'Unlimited Attempt ':
      case 'Full Access to Prep Mudules':
      case 'Full Access to Practice Tests':
        return <FaCheck className='text-green-400' />;
      default:
        return <FaQuestionCircle className='text-blue-400' />;
    }
  };
>>>>>>> Stashed changes
  const initPayment = async () => {
    try {
      const response = await axios.post(`${API}/payment/initiate`, {
        packageId: _id,
        userId: auth.user?._id,
        selectedGeneral,
        selectedSubjects,
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
  const handleGeneralChange = (e) => {
    setSelectedGeneral(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSelectedSubjects(Array.from(e.target.selectedOptions, (option) => option.value));
  };

  return (
<<<<<<< Updated upstream
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
=======
    <div id='select'  className="price-card flex-col-reverse lg:flex-row lg:h-[550px] my-4 j items-center flex">
      <div className="rounded-3xl max-lg:justify-center max-lg:top-[-30px] flex flex-col justify-center px-10 hover:scale-105 shadow-2xl transition-all duration-100 p-5 relative lg:left-5 z-0 bg-white h-[400px]">
        <h4 className='font-bold text-[25px]'>Plan Benefits:
          <hr className='my-1' />
        </h4>
        <h className='font-medium text-[13px] md:text-[18px]'>
          {benefits.map((benefit, index) => (
            <p key={index} className="my-4">
              {renderIcon(benefit)}
              <span className='ml-3'>{benefit}</span>
            </p>
>>>>>>> Stashed changes
          ))}
        </h>
      </div>
<<<<<<< Updated upstream
=======

      <div className='p-4 max-w-[350px] relative z-10 max-h-[700px] bg-white transition-all duration-100 shadow-2xl my-8 rounded-3xl backdrop-blur[40px] hover:scale-105 text-center text-black mx-3 '>
        <div className='p-2 py-3 '>
          <h2 style={{ background: bgColor }} className='text-[25px] mb-6 border-dashed border-2 border-blue-950 p-2 mx-auto text-black whitespace-nowrap rounded-3xl '>{nameOfPlan}</h2>
          <hr className='my-2' />
          <h1 className='text-10xl text-slate-700'>Rs {amount}
            <span className="text-gray-400 font-medium text-xl">/ year</span>
            <p className='ml-0 text-[12px]'>*GST Excluded</p>
          </h1>
          <hr className='my-2' />
          <p className='text-[15px] text-slate-600 px-1 md:h-[100px] '>{description}</p>
          <div className="pt-8">
            <h onClick={() => {
              if (!auth.user) {
                navigate('/login');
                return;
              }
              setShowOptions(true);
            }}>
              <p className="w-full py-4 cursor-pointer text-black border transition-colors duration-100 border-blue-800 border-solid hover:bg-blue-600 mt-8 rounded-xl hover:text-white">
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
            <div className="rounded-3xl bg-[#ffffff] p-5 backdrop-blur-[100px] shadow-2xl  ">
              <div className="flex justify-between">
                <h2 className="font-bold mx-2 text-xl">Select Subjects for <span className='p-4 rounded-3xl' style={{ background: bgColor }}>{nameOfPlan}</span></h2>
                <h2 className="mx-4 cursor-pointer" onClick={() => setShowOptions(false)} ><RxCross1 /></h2>
              </div>
              <hr className="my-1" />
              <div className='flex flex-col justify-center items-center'>
                <div className="mt-4 relative">
                  <select value={selectedGeneral} onChange={handleGeneralChange} className="border w-[400px] bg-[#aaa0] appearance-none text-center font-bold  border-gray-300 o rounded-md px-3 py-2">
                    <option className='bg-[#aaa0]' value="">Select General</option>
                    <option className='bg-[#aaa0]' value="General English">General English</option>
                    <option value="General Test">General Test</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M5 10a5 5 0 1110 0 1 1 0 00-2 0 3 3 0 00-6 0 1 1 0 00-2 0zm5-7a1 1 0 00-1 1v8a1 1 0 102 0V4a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <select
                    value={selectedSubjects}
                    onChange={handleSubjectChange}
                    className="border w-[400px] bg-[#aaa0] text-center font-bold border-gray-300 rounded-md px-3 py-2 appearance-none cursor-pointer"
                  >
                    <option value="">Domain</option>
                    <option value="Science">Science</option>
                    <option value="Math">Math</option>
                    <option value="Humanities">Humanities</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M5 10a5 5 0 1110 0 1 1 0 00-2 0 3 3 0 00-6 0 1 1 0 00-2 0zm5-7a1 1 0 00-1 1v8a1 1 0 102 0V4a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

              </div>


              <div className="flex mx-4 my-3  justify-end">
                <h onClick={initPayment} className="block cursor-pointer mx-auto mt-4 border-2 border-solid border-blue-400 hover:text-white px-4 py-2 rounded-md hover:bg-blue-700">Confirm Selection</h>

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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <div className="tabs border relative left-24 bg-white p-1 mt-4 mb-6 rounded-lg shadow-sm ">
=======
    <div  className=" border max-sm:fixed max-sm:mx-2  bottom-0 max-sm:w-full  z-50 flex justify-between  bg-white rounded-lg shadow-2xl ">
>>>>>>> Stashed changes
      {packages.map((packageItem) => (
        <div
          key={packageItem._id}
          onClick={() => { setActiveTab(packageItem._id); changeBgColor(packageItem.bgColor); }}
<<<<<<< Updated upstream
          className={`tab-button px-3 bg-white shadow-2xl shadow-gray-400 cursor-pointer rounded p-4 m-2 ${activeTab === packageItem._id ? 'active bg-yellow-200' : ''}`}
=======
          className={`  bg-white font-medium max-sm:text-[3vw] shadow-2xl cursor-pointer rounded p-2 md:p-5 m-1  ${activeTab === packageItem._id ? 'active bg-yellow-200' : ''}`}
>>>>>>> Stashed changes
        >
          {packageItem.nameOfPlan}
        </div>
      ))
      }
    </div >
  );
};

const PriceCardPage = ({ packages }) => {
<<<<<<< Updated upstream
  const initialActiveTabId = packages.find(packageItem => packageItem.nameOfPlan === 'SOLO PACK')._id;
=======
  const initialActiveTabId = packages.find(packageItem => packageItem.nameOfPlan === ' SOLO PACK')._id;
>>>>>>> Stashed changes
  const [activeTab, setActiveTab] = useState(initialActiveTabId);
  const [bgColor, setBgColor] = useState(packages.find(packageItem => packageItem._id === initialActiveTabId).bgColor);

  return (
    <div className="flex overflow-hidden  flex-col justify-center items-center  bg-[#c4e9f0]" style={{ backgroundColor: bgColor, transition: "background-color 0.3s ease" }}>
      <Navbar />
      <Tabs packages={packages} setActiveTab={setActiveTab} activeTab={activeTab} setBgColor={setBgColor} />
<<<<<<< Updated upstream
      <PriceCardsContainer
        packages={packages}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
=======
      <PriceCardsContainer  packages={packages.filter((packageItem) => packageItem._id === activeTab)}/>
      <PriceTables />

>>>>>>> Stashed changes
      <FAQ />
      <Footer />
    </div>
  );
};


const Packages = [
  {
    _id: "65d93ff1aaf8ebc47c522ced",
<<<<<<< Updated upstream
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
=======
    nameOfPlan: ' SOLO PACK',
    amount: 699,
    description:
      'Maximize your exam readiness with our Solo Pack. Choose from General English or General Test or any domain subject. Includes preparatory module, 12 practice tests, and 12 mock tests.',
    benefits: [
      'General English/ General Test',
      'Any one Domain Subject',
      'Full Access to Prep Mudules',
      '12 Practice Tests',
      '12 Mock Tests',
      'Unlimited Attempt '
    ],
    bgColor: '#c4e9f0'
  },
  {
    _id: "65d94008aaf8ebc47c522cef",
    nameOfPlan: ' PAIR PACK',
    amount: 1299,
    description:
      'Supercharge your preparation with our Pair Pack. Choose any from: General English and any one domain subject, General Test and one domain subject, or any two domain subjects. Includes preparatory modules, 12 practice tests, and 12 mock tests for each.',
    benefits: [
      'General English /General Test',
      'Any two Domain Subject',
      'Full Access to Prep Mudules',
      '12 Practice Tests',
      '12 Mock Tests',
      'Unlimited Attempt '
    ],
    bgColor: '#f0eac4'
  },
  {
    _id: "65d9428fd3267bf1efe0f364",
    nameOfPlan: ' MEGA PACK',
    amount: 2599,
    description:
      'Introducing our MEGA pack! Choose any three domain subjects of your choice, along with general English and general Test. Includes preparatory modules, 12 practice tests, and 12 mock tests for each.',
    benefits: [
      'Both General English & General Test',
      'Any three Domain Subject',
      'Full Access to Prep Mudules',
      'Full Access to Practice Tests',
      '12 Mock Tests',
      'Unlimited Attempt '
    ],
    bgColor: '#e9c4f0'
  },
  {
    _id: "65e352e265a057561b4dcb67",
    nameOfPlan: ' JUMBO PACK',
    amount: 2999,
    description:
      'Elevate your exam readiness with our Jumbo Pack. Choose any four domain subjects along with general Test and general English. Includes preparatory modules, 12 practice tests, and 12 mock tests for each.',
    benefits: [
      'Both General English & General Test',
      'Any four Domain Subject',
      'Full Access to Prep Mudules',
      'Full Access to Practice Tests',
      '12 Mock Tests',
      'Unlimited Attempt '
    ],
    bgColor: '#c4f0e9'
>>>>>>> Stashed changes
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

