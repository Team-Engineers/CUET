import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import BlogPost from "./Post";
import BlogFaq from "./Faq";

const BlogStructure = () => {
  return (
    <div>
      <Navbar />
      <BlogPost />
      <Footer />
    </div>
  );
};

export default BlogStructure;
