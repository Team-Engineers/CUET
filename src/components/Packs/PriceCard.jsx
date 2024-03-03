import axios from 'axios';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { API } from '../../utils/constants';
import { useAuth } from "../../utils/context";

function PriceCard({ packages }) {
  const navigate = useNavigate();
  const { _id, amount, nameOfPlan, description } = packages;
  const [auth, setAuth] = useAuth();

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
    <div className='price-card bg-white transition-all duration-100 border border-solid border-[#121c43] my-8 rounded-2xl backdrop-blur[40px] hover:scale-105 text-center md:max-h-[600px] text-black mx-3 mt-[-30px]'>
      <div className='p-2 py-3 pt-7'>
        <h2 className='text-[25px] p-1 w-[80%] mx-auto rounded-3xl text-black whitespace-nowrap bg-[#ffffff]'>{nameOfPlan}</h2>
        <h1 className='text-10xl text-slate-700'>Rs {amount}</h1>
        <p className='text-[12px] text-slate-600 px-1 md:h-[100px] '>{description}</p>
        <div className='features text-[20px]'>
          <div className='feature-cont'>
            <div className='icon'></div>
            <div className='feature-name bg-gradient-to-br w-[70%] mx-auto p-2 rounded-3xl from-[#5146e7] to-[#fff]'>General English</div>
          </div>
          <div className='feature-cont'>
            <div className='icon'></div>
            <div className='feature-name my-3 bg-gradient-to-br w-[70%] mx-auto p-2 rounded-3xl from-[#5146e7] to-[#fff]'>General Test</div>
          </div>
          <div className='feature-cont'>
            <div className='icon'></div>
            <div className='feature-name bg-gradient-to-br w-[70%] mx-auto p-2 rounded-3xl from-[#5146e7] to-[#fff]'>Any Domain Subject</div>
          </div>
        </div>
        <button className='confirmation-btn hover:bg-blue-300 cursor-pointer  text-[18px] py-2 px-1 mt-10 rounded-3xl mx-auto w-[75%] ' onClick={initPayment}>Get started</button>
      </div>
    </div>
  );
}

export default PriceCard;
