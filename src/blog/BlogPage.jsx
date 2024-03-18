import React from 'react'
import Navbar from '../components/Navbar'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import BlogCard from '../components/BlogCard/BlogCard';
import Article1img from "../assets/article1.jpeg";


// const router = createBrowserRouter([
//     {
//       path: "/articl1",
//       element: <Article1 />
//     },
//   ]);

function Blog01() {
  const Articles = [
    {
      to: "/blog/article1",
      Name: "How to Prepare for CUET Biology – plans and strategies",
      image: Article1img,
      publishDate: "March 14, 2024",
    },
    {
      to: "/blog/article2",
      Name: "Article 2",
      publishDate: "March 15, 2024",
    },
  
  ]
  return (
    <>
    <Navbar />
     <div className="container mx-auto py-8">
      <div className='mt-[-23px]'>
        <h1 className="text-2xl font-bold mb-4 text-center">CUET Blogs</h1>
        <hr className="border-t-2 border-rgb(186 191 180) mb-4 w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {Articles.map((article, key) => (
            <BlogCard key={key} to={article.to} Article={article} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog01;