import axios from 'axios';
import React, { useState } from 'react';
import { CgSpinner } from "react-icons/cg";
import { FaCheck, FaQuestionCircle } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    setLoading(false);
    setShowOptions(false);
    setSelectedOptions([]);
  }
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
      setErrorMessage("Select only one.");
    } else if ((nameOfPlan === 'PAIR PACK') && selected.length > 2) {
      setErrorMessage("Select only two.");
    }
    else if ((nameOfPlan === 'MEGA PACK') && selected.length > 3) {
      setErrorMessage("Select only three subjects.");
    }
    else if ((nameOfPlan === 'JUMBO PACK') && selected.length > 4) {
      setErrorMessage("Select only four subjects.");
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
    if ((nameOfPlan === 'SOLO PACK') && selectedOptions.length < 1) {
      toast.error("Select atleast 1 option.")
      return;
    } else if ((nameOfPlan === 'PAIR PACK') && selectedOptions.length < 2) {
      toast.error("Select atleast 2 options.")
      return;
    }
    else if ((nameOfPlan === 'MEGA PACK') && selectedOptions.length < 3) {
      toast.error("Select atleast 3 options.")
      return;
    }
    else if ((nameOfPlan === 'JUMBO PACK') && selectedOptions.length < 4) {
      toast.error("Select atleast 4 options.")
      return;
    }

    setLoading(true);
    try {
      const key = await axios.get(`${API}/payment/getKey`);

      const response = await axios.post(`${API}/payment/initiate`, {
        packageId: _id,
        userId: auth.user?._id,
        selectedOptions: (() => {
          if (nameOfPlan === 'JUMBO PACK' || nameOfPlan === 'MEGA PACK') {
            selectedOptions.push({ value: 'General English', label: 'General English' });
            selectedOptions.push({ value: 'General Test', label: 'General Test' });
          }
          console.log(selectedOptions);
          return selectedOptions.map(option => option.value);
        })()

      });
      const { data } = response;
      console.log(data)

      const options = {
        key,
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
              email: auth.user?.email,
              name: auth?.user?.name,
              amount,
              packname: nameOfPlan,
              contact: auth?.user?.contact,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              packageId: _id,
              selectedOptions: selectedOptions.map(option => option.value),
            });

            if (verifyResponse.data.success) {
              const userResponse = await axios.get(`${API}/users/find/${auth.user?._id}`);
              const updatedUser = userResponse.data;
              const updatedAuth = { ...auth, user: updatedUser, password: undefined, razorpay_signature: undefined, razorpay_order_id: undefined, razorpay_payment_id: undefined };
              setAuth(updatedAuth);
              localStorage.setItem("auth", JSON.stringify(updatedAuth));
              setLoading(false);
              toast.success("Pack bought successfully")
              setTimeout(() => {
                navigate('/courses');
              }, 2000);

            }
          } catch (error) {
            setLoading(false);
            toast.error("Cannot process your request at the moment. Please try again later")
            console.error(error);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      setLoading(false);
      rzp1.open();
      setSelectedOptions([]);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };


  return (
    <div id='select' className="price-card flex-col-reverse lg:flex-row lg:h-[550px] my-4 j items-center flex">
      <div className="max-lg:hidden rounded-3xl max-lg:justify-center max-lg:top-[-30px] flex flex-col justify-center px-10 hover:scale-105 shadow-2xl transition-all duration-100 p-5 relative lg:left-5 z-0 bg-white h-[400px]">
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

      <div className='p-4 md:max-w-[350px] max-lg:w-full relative z-10 md:max-h-[700px] max-h-[800px] bg-white transition-all duration-100 shadow-2xl my-8 rounded-3xl backdrop-blur[40px] hover:scale-105 text-center text-black mx-3 '>
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
              <p className="w-full py-4 cursor-pointer border transition-colors duration-100 hover:border-blue-800 border-[#23bd68] bg-[#23bd68] border-solid hover:bg-blue-600 md:mt-8 rounded-xl text-white">
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
            <div className="rounded-3xl bg-[#ffffffee] md:w-[700px] p-4 px-6 max-md:px-2 max-md:mx-6 backdrop-blur-[100px] shadow-2xl  ">
              <div className="flex justify-between">
                <h2 className="font-semibold mx-2 md:text-xl whitespace-nowrap max-md:text-[17px]">Select Subjects for <span className='px-4 py-2 rounded-3xl max-md:px-2 max-md:text-[16px] ' style={{ background: bgColor }}>{nameOfPlan}</span></h2>
                <h3 className="mx-4 cursor-pointer" onClick={closeModal} ><RxCross1 /></h3>
              </div>
              <hr className="my-1" />
              <div className='flex flex-col justify-center items-center'>
                {(nameOfPlan === 'MEGA PACK' || nameOfPlan === 'JUMBO PACK') && (
                  <p className='font-medium max-md:text-center text-[18px] text-gray-700'>General English & General Test is free for this Pack</p>
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
                <div className="mt-4 w-[95%] relative">
                  <Select
                    isMulti
                    options={options}
                    value={selectedOptions}
                    onChange={handleSelectChange}
                    maxMenuHeight={180}
                    minMenuHeight={10}
                  />
                  <div className="text-red-600 text-l mt-2">{errorMessage}</div>
                </div>
              </div>
              <div className="flex mx-4 my-3  justify-end">
                <h onClick={initPayment} className={` flex cursor-pointer mt-4 border-[2px] border-solid border-[#2fa062] bg-[#23bd68] hover:text-white px-3 py-2 font-medium rounded-md hover:border-blue-600 hover:bg-blue-600 w-[200px] mx-auto justify-center ${loading ? 'opacity-50 pointer-events-none' : ''}`}>{loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin " />
                )}
                  {!loading && <span>Confirm Selection</span>}{" "}</h>

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
    <div className="price-cards-container md:pb-6">
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

  const handleGetStarted = (packageName) => {
    const packageItem = packages.find(item => item.nameOfPlan === packageName);
    setActiveTab(packageItem._id);
    setBgColor(packageItem.bgColor);
    window.scrollTo({
      top: 100,
      behavior: 'smooth'
    });
  };

  return (
    <div className="overflow-hidden max-w-full mx-auto  bg-[#c4e9f0]" style={{ background: `linear-gradient(to bottom, ${bgColor}, white 30%,  white)`, transition: "background-color 0.3s ease" }} >
      <Navbar />
      <div className="flex  flex-col justify-center items-center ">
        <Tabs packages={packages} setActiveTab={setActiveTab} activeTab={activeTab} setBgColor={setBgColor} bgColor={bgColor} />
        <PriceCardsContainer packages={packages.filter((packageItem) => packageItem._id === activeTab)} />
        <div style={{ background: `linear-gradient(to bottom, ${bgColor},  white)`, transition: "background-color 0.3s ease", width: "100%" }}>
          <PriceTables handleGetStarted={handleGetStarted} />
        </div>
        <div style={{ background: `linear-gradient(to bottom, #ededed,  white)`, transition: "background-color 0.3s ease", width: "100%" }}>
          <PackFaq />
        </div>
        <Footer />
      </div>
      <ToastContainer />
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
    bgColor: 'rgb(208, 239, 245, 0.8)'
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
    // bgColor: 'rgb(160, 232, 175, 0.6)'
    bgColor: 'rgb(242, 224, 223, 0.6)'
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
    bgColor: 'rgb(217, 196, 240, 0.6)'
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
    // bgColor: 'rgb(242, 224, 223, 0.6)'
    bgColor: 'rgb(203, 179, 84, 0.6)'
  },
];

export default function App() {
  return (
    <div className="">
      <PriceCardPage packages={Packages} />
    </div>
  );
}
