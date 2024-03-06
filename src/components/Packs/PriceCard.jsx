import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/context';
const PriceTable = () => {
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  return (
    <section className="text-gray-700  max-lg:mx-4 mt-2 max-w-[1280px] mx-auto body-font overflow-hidden border-t border-gray-200">
    <div className="   flex py-3 justify-center item-center ">
      <div className="lg:w-1/6 font-medium mt-48 hidden lg:block">
        <div className="mt-px borderyy border-gray-300   rounded-tl-lg rounded-bl-lg overflow-hidden">
          <p className="bg-white text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">GENERAL ENGLISH</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">GENERAL TEST</p>
          <p className="bg-white text-gray-900 h-12 text-center px-4 flex items-center justify-start">DOMAIN SUBJECT</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">PREP MODULES</p>
          <p className="bg-white text-gray-900 h-12 text-center px-4 flex items-center justify-start">PRACTICE TESTS</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">MOCK TESTS</p>
          <p className="bg-white text-gray-900 h-12 text-center px-4 flex items-center justify-start">UNLIMITED ATTEMPT</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">TOTAL SUBJECT</p>
        </div>
      </div>
      <div className="flex max-lg:gap-4 lg:flex-row max-lg:flex-wrap lg:w-3/4 w-full border-solid lg:border border-gray-300 rounded-lg">
        <div className="lg:w-1/4  lg:mt-px w-full mb-10 lg:mb-0 border-2 border-solid border-gray-300 lg:border-none rounded-lg lg:rounded-none">
          <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
            <h3 className="tracking-widest">ROOKIE</h3>
            <h2 className="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">Free</h2>
            <span className="text-sm text-gray-900">Without Login</span>
          </div>
          <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300"><span className='font-bold mr-2 lg:hidden'>General English </span>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>General Test </span>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>Domain Subject </span>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="h-12 text-gray-900 px-6 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>PREP MODULES </span>1 Module</p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>Practice Test </span>
           1 Test
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>Mock Test </span>
            1 Test
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>UNLIMITED ATTEMPT </span>
          <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center"> <span className='font-bold mr-2 lg:hidden'>Total</span>
            0
          </p>
          <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
            <button onClick={() => {
              navigate('/courses');
            }} to="/courses" className="flex cursor-pointer items-center mt-auto text-white bg-blue-500 border-0 py-2 px-2 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            
          </div>
        </div>
        <div className="lg:w-1/4  lg:mt-px w-full mb-10 lg:mb-0 border-[1px] border-solid  border-gray-300   rounded-lg ">
          <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
            <h3 className="tracking-widest">NOVICE</h3>
            <h2 className="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">Free</h2>
            <span className="text-sm text-gray-900">Login</span>
          </div>
          <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
          <span className='font-bold mr-2 lg:hidden'>General English </span>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>General Test </span>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>Domain Subject </span>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="h-12 text-gray-900 px-6 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>PREP MODULES </span>3 Modules</p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>Practice Test </span>
           3 Tests
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>Mock Test </span>
            3 Tests
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>UNLIMITED ATTEMPT </span>
          <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center"> <span className='font-bold mr-2 lg:hidden'>Total</span>
            0
          </p>
          <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
            <button onClick={() => {
              if (!auth.user) {
                navigate('/login');
                return;
              }
              navigate('/courses');
            }} className="flex cursor-pointer items-center mt-auto text-white bg-blue-500 border-0 py-2 px-2 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            
          </div>
        </div>
        <div className="lg:w-1/4  lg:mt-px w-full mb-10 lg:mb-0 border-2 border-solid  border-gray-300 lg:border-none rounded-lg lg:rounded-none">
          <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
            <h3 className="tracking-widest">SOLO</h3>
            <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">₹699
              <span className="text-gray-900 text-base ml-1">/year</span>
            </h2>
            <span className="text-sm text-gray-900">Charging ₹58.25 per month</span>

          </div>
          <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
          <span className='font-bold mr-2 lg:hidden'>General English </span>Can be Chosen</p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>General Test </span>Can be Chosen
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>Domain Subject </span>
           Any one 
          </p>
          <p className="h-12 text-gray-900 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>PREP MODULES </span>Full Access</p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>Practice Test </span>
           Full Access
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>Mock Test </span>
           12 Tests
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>UNLIMITED ATTEMPT </span>
          <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          
          <p className=" text-gray-900 text-center h-12 flex items-center justify-center"> <span className='font-bold mr-2 lg:hidden'>Total</span>
            1
          </p>
          <div className="p-6 text-center border-t border-gray-300">
            <a  href='#select' className="flex no-underline text-sm cursor-pointer items-center mt-auto text-white bg-blue-500 border-0 py-2 px-1 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:w-1/4  lg:-mt-px w-full mb-10 lg:mb-0 border-2 border-solid rounded-lg border-blue-500 relative">
          <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
          <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
            <h3 className="tracking-widest">PAIR</h3>
            <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">1299
              <span className="text-gray-900 text-base ml-1">/year</span>
            </h2>
            <span className="text-sm text-gray-900">Charging ₹108.25 per month</span>

          </div>
          <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300"><span className='font-bold mr-2 lg:hidden'>General English </span>Can be Chosen</p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>General Test </span>Can be Chosen
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>Domain Subject </span>
           Any two
          </p>
          <p className="h-12 text-gray-900 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>PREP MODULES </span>Full Access</p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>Practice Test </span>
           Full Access
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>Mock Test </span>
           12 Tests
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>UNLIMITED ATTEMPT </span>
          <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          
          <p className=" text-gray-900 text-center h-12 flex items-center justify-center"> <span className='font-bold mr-2 lg:hidden'>Total</span>
            2
          </p>
          <div className="p-6 text-center border-t border-gray-300">
            <a  href='#select' className="flex no-underline text-sm cursor-pointer items-center mt-auto text-white bg-blue-500 border-0 py-2 px-1 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:w-1/4  lg:mt-px w-full mb-10 lg:mb-0 border-2 border-solid border-gray-300 lg:border-none rounded-lg lg:rounded-none">
          <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
            <h3 className="tracking-widest">MEGA</h3>
            <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">₹2599
              <span className="text-gray-900 text-base ml-1">/year</span>
            </h2>
            <span className="text-sm text-gray-900">Charging ₹216.5 per month</span>

          </div>
          <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
          <span className='font-bold mr-2 lg:hidden'>General English </span>
          <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>General Test </span>

          <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>Domain Subject </span> Any three
          </p>
          <p className="h-12 text-gray-900 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>PREP MODULES </span>Full Access</p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>Practice Test </span>
           Full Access
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>Mock Test </span>
           12 Tests
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>UNLIMITED ATTEMPT </span>
          <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          
          <p className=" text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>Total</span>
            5
          </p>
          <div className="p-6 text-center border-t border-gray-300">
            <a  href='#select' className="flex no-underline text-sm cursor-pointer items-center mt-auto text-white bg-blue-500 border-0 py-2 px-1 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:w-1/4  lg:-mt-px w-full mb-10 lg:mb-0 border-2 border-solid rounded-lg border-blue-500 relative">
          <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">RECOMMENDED</span>
          <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
            <h3 className="tracking-widest">COMBO</h3>
            <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">2999
              <span className="text-gray-900 text-base ml-1">/year</span>
            </h2>
            <span className="text-sm text-gray-900">Charging ₹249.91 per month</span>

          </div>
          <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
          <span className='font-bold mr-2 lg:hidden'>General English </span>
          <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>General Test </span>

          <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>Domain Subject </span>Any four 
          </p>
          <p className="h-12 text-gray-900 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>PREP MODULES </span>Full Access</p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>Practice Test </span>Full Access
          </p>
          <p className="text-gray-900 text-center h-12 flex items-center justify-center">
          <span className='font-bold mr-2 lg:hidden'>Mock Test </span>12 Tests
          </p>
          <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 lg:hidden'>UNLIMITED ATTEMPT </span>
          <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
          <span className='font-bold mr-2 lg:hidden'>Total</span>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          
          <p className=" text-gray-900 text-center h-12 flex items-center justify-center">
            6
          </p>
          <div className="p-6 text-center border-t border-gray-300">
            <a  href='#select' className="flex no-underline text-sm cursor-pointer items-center mt-auto text-white bg-blue-500 border-0 py-2 px-1 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default PriceTable;