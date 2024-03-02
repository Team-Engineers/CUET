import React from 'react';
import axios from 'axios';
import { useAuth } from "../../utils/context";
import { API } from '../../utils/constants';
import { useNavigate } from "react-router-dom";

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
    <div className='price-card bg-gradient-to-br  from-[#ea6161] to-blue-400 transition-all duration-100  backdrop-blur[40px] hover:scale-105 border-[1px] rounded-2xl border-[#121c43] text-center h-[500px] text-white m-3'>
      <div className='p-2 py-4 pt-10'>
        <h2 className='text-[25px] p-1 w-[80%] mx-auto rounded-3xl text-black bg-[#38d4e2]'>{nameOfPlan}</h2>
        <h1 className='text-10xl'>Rs {amount}</h1>
        <p className='text-[12px]'>{description}</p>
        <div className='features text-[20px]'>
          <div className='feature-cont'>
            <div className='icon'></div>
            <div className='feature-name bg-gradient-to-br w-[70%] mx-auto p-2 rounded-3xl from-[#5146e7] to-[#111]'>General English</div>
          </div>
          <div className='feature-cont'>
            <div className='icon'></div>
            <div className='feature-name my-3 bg-gradient-to-br w-[70%] mx-auto p-2 rounded-3xl from-[#5146e7] to-[#111]'>General Test</div>
          </div>
          <div className='feature-cont'>
            <div className='icon'></div>
            <div className='feature-name bg-gradient-to-br w-[70%] mx-auto p-2 rounded-3xl from-[#5146e7] to-[#111]'>Any Domain Subject</div>
          </div>
        </div>
        <button className='confirmation-btn cursor-pointer  text-[20px] p-2 mt-14 rounded-3xl mx-auto w-[80%] ' onClick={initPayment}>Click here to get started</button>
      </div>
    </div>
  );
}

export default PriceCard;
