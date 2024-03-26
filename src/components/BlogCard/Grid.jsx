import React from "react";
import { BlogData } from "./Data";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';


const BlogGrid = () => {
  return (
    <div className=" max-w-[1280px]  mt-[7rem] mb-[7rem] mx-auto">
      <div className="flex justify-center items-center flex-wrap">
        {BlogData.map((blogEntry, index) => (
          <div
            key={index}
            className="max-w-xs rounded mt-0 mb-7 me-7 overflow-hidden border shadow-2xl border-gray-300 transition duration-300 hover:bg-blue-100 hover:text-blue-700"
          >
            <Link to={`blog_${index+1}`} style={{ textDecoration: "none" }}>
              <img
                src={blogEntry.image.url} // Assuming you want to display the first image
                alt={blogEntry.image.alt}
                className="w-full h-32 object-cover"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 hover:text-blue-500 cursor-pointer">
                  {blogEntry.title}
                </div>
                <p className="text-gray-700">
                  {blogEntry.description}
                  </p> 
                  <Link to={`blog_${index+1}`} style={{ textDecoration: "none" }}
                  className=" text-blue-500 text-sm font-medium  flex items-center justify-start  transition duration-300 ">
                     Read More <FaArrowRight className="ml-2" />
                  </Link>
                <p className="text-sm text-gray-500">
                  Published on: {blogEntry.publishedOn}
                </p>
                {/* <p className="text-sm text-gray-500">  //FOR AUTHOR
                  Author: {blogEntry.author}
                </p> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
