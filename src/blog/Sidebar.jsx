import React from 'react';

const latestBlogs = [
  { title: 'Latest Blog 1', date: 'March 14, 2024' },
  { title: 'Latest Blog 2', date: 'March 15, 2024' },
  { title: 'Latest Blog 3', date: 'March 16, 2024' },
];

const popularBlogs = [
  { title: 'Popular Blog 1', date: 'March 10, 2024' },
  { title: 'Popular Blog 2', date: 'March 11, 2024' },
  { title: 'Popular Blog 3', date: 'March 12, 2024' },
];

export default function Sidebar() {
  return (
    <div className="w-full mx-[-50px] bg-slate-200 h-auto p-4 mt-[3rem]">
      <h3 className="text-xl font-bold mb-4">Latest Blogs</h3>
      <ul>
        {latestBlogs.map((blog, index) => (
          <li key={index} className="mb-2">
            <a href="#">{blog.title}</a> - {blog.date}
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-bold mt-8 mb-4">Popular Blogs</h3>
      <ul>
        {popularBlogs.map((blog, index) => (
          <li key={index} className="mb-2">
            <a href="#">{blog.title}</a> - {blog.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
