import React from 'react';

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
  return (
    <div>
      <div className="w-[20vw]  bg-white h-auto p-4 mt-[3rem] rounded-3xl flex-col  ">
        <p className="text-xl text-blue-500  float-left">Latest Blogs</p>
        {/* <div class="border-b border-black p-[.25vw]"></div> */}

        <div className='list-none float-left'>
          {latestBlogs.map((blog, index) => (

            <div key={index} className=" flex justify-center items-center  bg-white rounded-xl   hover:cursor-pointer ">
              <img src={blog.image} className='h-[5vw] w-[5vw]' alt='image cant display'></img>
              <div className='text-[.75vw]' >{blog.title}<br></br> - {blog.date}</div>
            </div>
          ))}
        </div>

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
