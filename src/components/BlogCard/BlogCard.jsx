import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ to, Article }) {
  return (
    <div className="max-w-xs rounded overflow-hidden border shadow-2xl border-gray-300 transition duration-300 hover:bg-blue-100 hover:text-blue-700">
      <Link to={to} style={{ textDecoration: "none" }}>
        <img src={Article.image} alt="Article Thumbnail" className="w-full h-32 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 hover:text-blue-500 cursor-pointer">{Article.Name}</div>
          <p className="text-sm text-gray-500">Published on: {Article.publishDate}</p>
        </div>
      </Link>
    </div>
  );
}
