import React, { useState } from "react";
import { BlogData } from "./Data";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import { Pagination } from 'antd';
import locale from "rc-pagination/lib/locale/en_US";
import { useLocation } from 'react-router';

const BlogGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9); // Update to 9 for 9 cards per page

  // Filter blog entries based on search term
  const filteredBlogs = BlogData.filter(blogEntry =>
    blogEntry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate index of the first post on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="max-w-[1280px] mt-[7rem] mb-[7rem] mx-auto px-4">
      <div className='flex flex-col md:flex-row md:items-center mt-[-107px] mb-[45px] justify-between'>
        <h1 className="text-lg md:text-3xl font-bold">CUET Blogs</h1>
        <div className="relative flex items-center">
          <label htmlFor="default-search" className="sr-only">Search</label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full py-2 pl-10 pr-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid justify-center items-center md:ml-16  md:grid-cols-3 gap-7">
        {currentPosts.map((blogEntry, index) => (
          <div
            key={index}
            className="max-w-xs rounded overflow-hidden border shadow-2xl border-gray-300 transition duration-300 hover:bg-blue-100 hover:text-blue-700"
          >
            <Link to={`blog_${index + 1}`} style={{ textDecoration: "none", display: "flex", flexDirection: "column", height: "100%" }}>
              <img
                src={blogEntry.image.url}
                alt={blogEntry.image.alt}
                className="w-full h-32 object-cover"
              />
              <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2 hover:text-blue-500 cursor-pointer">
                  {blogEntry.title}
                </div>
                <p className="text-gray-700">
                  {blogEntry.description}
                </p>
              </div>
              <div className="px-6 py-4">
                <Link to={`blog_${index + 1}`} style={{ textDecoration: "none" }}
                  className="text-blue-500 text-sm font-medium flex items-center justify-start transition duration-300 ">
                  Read More <FaArrowRight className="ml-2" />
                </Link>
                <p className="text-sm text-gray-500">
                  Published on: {blogEntry.publishedOn}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination mt-10 flex justify-center">
        <Pagination
          current={currentPage}
          locale={locale}
          total={filteredBlogs.length}
          pageSize={postsPerPage}
          onChange={setCurrentPage} 
          showPrevNextJumpers
          showQuickJumper
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
        />
      </div>
    </div>
  );
};

export default BlogGrid;
