import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/context';
const PriceTable = ({ handleGetStarted, hidden }) => {
  const [auth] = useAuth();

  const navigate = useNavigate();
  return (
    <section className="text-gray-700 max-md:hidden  mt-10 mb-10 mx-auto body-font overflow-hidden border-t border-gray-200">
      <div className="   flex py-3 justify-center item-center ">
        <div className=" w-1/6 font-medium mt-48  block">
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
        <div className="flex  flex-row max-md:flex-wrap  w-3/4 border-solid  border border-gray-300 rounded-lg">
          <div className={`${hidden} w-1/4  max-lg:hidden mt-px mb-0 border-2  border-gray-300  border-none  rounded-none`}>
            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
              <h3 className="tracking-widest">ROOKIE</h3>
              <h2 className="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">Free</h2>
              <span className="text-sm text-gray-900 font-medium">Without Login</span>
            </div>
            <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300"><span className='font-bold mr-2 md:hidden'>General English </span>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>General Test </span>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>Domain Subject </span>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </p>
            <p className="h-12 text-gray-900 px-6 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>PREP MODULES </span>1 Module</p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>Practice Test </span>
              1 for each subject
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>Mock Test </span>
              1 for each subject
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>UNLIMITED ATTEMPT </span>
              <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center"> <span className='font-bold mr-2 md:hidden'>Total</span>
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
          <div className=" w-1/4 max-lg:hidden  mt-px mb-0 border-[1px] border-t-0 border-b-0 border-solid  border-gray-300  ">
            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
              <h3 className="tracking-widest">NOVICE</h3>
              <h2 className="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">Free</h2>
              <span className="text-sm text-gray-900 font-medium">Login</span>
            </div>
            <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
              <span className='font-bold mr-2 md:hidden'>General English </span>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>General Test </span>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>Domain Subject </span>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-red-500 " viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </p>
            <p className="h-12 text-gray-900 px-6 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>PREP MODULES </span>3 Modules</p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>Practice Test </span>
              3 for each subject
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>Mock Test </span>
            3 for each subject
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>UNLIMITED ATTEMPT </span>
              <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center"> <span className='font-bold mr-2 md:hidden'>Total</span>
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
          <div className=" w-1/4   mt-px mb-0 border-2   border-gray-300  border-none   rounded-none">
            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
              <h3 className="tracking-widest">SOLO</h3>
              <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">₹699
                <span className="text-gray-900 text-base ml-1">/year</span>
              </h2>
              <span className="text-sm text-gray-900 font-medium">Charging ₹58.25 per month</span>

            </div>
            <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
              <span className='font-bold mr-2 md:hidden'>General English </span>Can be Chosen</p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>General Test </span>Can be Chosen
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>Domain Subject </span>
              Any one
            </p>
            <p className="h-12 text-gray-900 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>PREP MODULES </span>Full Access</p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>Practice Test </span>
              1 for each subject
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>Mock Test </span>
              12 for each subject
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>UNLIMITED ATTEMPT </span>
              <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
            </p>

            <p className=" text-gray-900 text-center h-12 flex items-center justify-center"> <span className='font-bold mr-2 md:hidden'>Total</span>
              1
            </p>
            <div className="p-6 text-center border-t border-gray-300">
              <button onClick={() => handleGetStarted('SOLO PACK')} className="flex no-underline text-sm cursor-pointer items-center mt-auto text-white bg-blue-500 border-0 py-2 px-1 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className=" w-1/4   -mt-px mb-0 border-2 border-solid rounded-lg border-[#5b42b8] relative">
            <span className="bg-[#5b42b8] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
              <h3 className="tracking-widest">PAIR</h3>
              <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">1299
                <span className="text-gray-900 text-base ml-1">/year</span>
              </h2>
              <span className="text-sm text-gray-900 font-medium">Charging ₹108.25 per month</span>

            </div>
            <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300"><span className='font-bold mr-2 md:hidden'>General English </span>Can be Chosen</p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>General Test </span>Can be Chosen
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>Domain Subject </span>
              Any two
            </p>
            <p className="h-12 text-gray-900 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>PREP MODULES </span>Full Access</p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>Practice Test </span>
              1 for each subject
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>Mock Test </span>
              12 for each subject
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>UNLIMITED ATTEMPT </span>
              <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
            </p>

            <p className=" text-gray-900 text-center h-12 flex items-center justify-center"> <span className='font-bold mr-2 md:hidden'>Total</span>
              2
            </p>
            <div className="p-6 text-center border-t border-gray-300">
              <button onClick={() => handleGetStarted('PAIR PACK')} className="flex no-underline text-sm cursor-pointer items-center mt-auto text-white bg-blue-500 border-0 py-2 px-1 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className=" w-1/4   mt-px mb-0 border-2  border-gray-300  border-none  rounded-none">
            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
              <h3 className="tracking-widest">MEGA</h3>
              <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">₹2599
                <span className="text-gray-900 text-base ml-1">/year</span>
              </h2>
              <span className="text-sm text-gray-900 font-medium">Charging ₹216.5 per month</span>

            </div>
            <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
              <span className='font-bold mr-2 md:hidden'>General English </span>
              <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>General Test </span>

              <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>Domain Subject </span> Any three
            </p>
            <p className="h-12 text-gray-900 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>PREP MODULES </span>Full Access</p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>Practice Test </span>
              1 for each subject
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>Mock Test </span>
              12 for each subject
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>UNLIMITED ATTEMPT </span>
              <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
            </p>

            <p className=" text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>Total</span>
              5
            </p>
            <div className="p-6 text-center border-t border-gray-300">
              <button onClick={() => handleGetStarted('MEGA PACK')} className="flex no-underline text-sm cursor-pointer items-center mt-auto text-white bg-blue-500 border-0 py-2 px-1 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className=" w-1/4   -mt-px mb-0 border-2 border-solid rounded-lg border-[#c2a948] relative">
            <span className="bg-[#c2a948] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">RECOMMENDED</span>
            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
              <h3 className="tracking-widest">JUMBO</h3>
              <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">2999
                <span className="text-gray-900 text-base ml-1">/year</span>
              </h2>
              <span className="text-sm text-gray-900 font-medium">Charging ₹249.91 per month</span>

            </div>
            <p className="bg-white text-gray-900 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
              <span className='font-bold mr-2 md:hidden'>General English </span>
              <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>General Test </span>

              <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>Domain Subject </span>Any four
            </p>
            <p className="h-12 text-gray-900 text-center leading-relaxed flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>PREP MODULES </span>Full Access</p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>Practice Test </span>1 for each subject
            </p>
            <p className="text-gray-900 text-center h-12 flex items-center justify-center">
              <span className='font-bold mr-2 md:hidden'>Mock Test </span>12 for each subject
            </p>
            <p className="bg-white text-gray-900 text-center h-12 flex items-center justify-center"><span className='font-bold mr-2 md:hidden'>UNLIMITED ATTEMPT </span>
              <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                <span className='font-bold mr-2 md:hidden'>Total</span>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
            </p>

            <p className=" text-gray-900 text-center h-12 flex items-center justify-center">
              6
            </p>
            <div className="p-6 text-center border-t border-gray-300">
              <button onClick={() => handleGetStarted('JUMBO PACK')} className="flex no-underline text-sm cursor-pointer items-center mt-auto text-white bg-blue-500 border-0 py-2 px-1 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;