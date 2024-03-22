import React, { useEffect, useState } from 'react';

const latestBlogs = [
  { title: 'How to Prepare for CUET Biology – plans and strategies 1', image: 'https://gyanville.in/wp-content/uploads/2023/02/20220402152158CUET-.jpg', date: 'March 14, 2024' },
  { title: 'How to Prepare for CUET Biology – plans and strategies 2', image: 'https://gyanville.in/wp-content/uploads/2023/02/20220402152158CUET-.jpg', date: 'March 15, 2024' },
  { title: 'How to Prepare for CUET Biology – plans and strategies 3', image: 'https://gyanville.in/wp-content/uploads/2023/02/20220402152158CUET-.jpg', date: 'March 16, 2024' },
  { title: 'How to Prepare for CUET Biology – plans and strategies 1', image: 'https://gyanville.in/wp-content/uploads/2023/02/20220402152158CUET-.jpg', date: 'March 14, 2024' },
  { title: 'How to Prepare for CUET Biology – plans and strategies 2', image: 'https://gyanville.in/wp-content/uploads/2023/02/20220402152158CUET-.jpg', date: 'March 15, 2024' },
  { title: 'How to Prepare for CUET Biology – plans and strategies 3', image: 'https://gyanville.in/wp-content/uploads/2023/02/20220402152158CUET-.jpg', date: 'March 16, 2024' },

];

const popularBlogs = [
  { title: 'How to Prepare for CUET Biology – plans and strategies 1', image: 'https://gyanville.in/wp-content/uploads/2023/02/20220402152158CUET-.jpg', date: 'March 10, 2024' },
  { title: 'How to Prepare for CUET Biology – plans and strategies 2', image: 'https://gyanville.in/wp-content/uploads/2023/02/20220402152158CUET-.jpg', date: 'March 11, 2024' },
  { title: 'How to Prepare for CUET Biology – plans and strategies 3', image: 'https://gyanville.in/wp-content/uploads/2023/02/20220402152158CUET-.jpg', date: 'March 12, 2024' },
];

export default function Sidebar() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`bg-white p-4 mt-[3rem] flex-col justify-center   md:w-[20vw] leading-5 `} >
        <div className="text-[16px] text-blue-500  w-[90vw] ">Popular</div>
        <hr color='blue' className="mb-[30px] float-left h-1px border-top:1px border-t-1 border-blue w-[25%] solid #f00"></hr>
        <hr className="mb-[30px] float-left  h-1px border-top:1px w-[55%] solid #f00"></hr>
        {/* <div class="border-b border-black p-[.25vw]"></div> */}

        <ul className='list-none flex-col ml-0 pl-0   md:w-[20vw]'>
          {latestBlogs.map((blog, index) => (

            <li key={index} className="ml-0 pl-0 w-[90vw] mb-4 float-left md:w-[20vw] flex justify-center items-center  bg-white rounded-xl   hover:cursor-pointer ">
              <img src={blog.image} className='pl-0  h-[48px] w-[68px] md:ml-0 ' alt='image cant display'></img>
              <div className='ml-0 pl-0 text-[14px]' >{blog.title}<br></br> - {blog.date}</div>
              <br></br>
            </li>

          ))}
        </ul>

      </div>
      {/* <div className="w-full mx-[-50px] bg-white h-auto p-4 mt-[3rem] rounded-3xl flex-col items-center ">
        <h3 className="text-xl font-bold mt-8 mb-4">Popular Blogs</h3>
        <ul className='list-none'>
          {popularBlogs.map((blog, index) => (
            <li key={index} className="mb-2 mt-4 bg-white rounded-xl p-4  hover:cursor-pointer ">
              <div >{blog.title}</div><br></br> - {blog.date}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
