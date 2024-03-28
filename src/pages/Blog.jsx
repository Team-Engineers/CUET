import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogGrid from '../components/BlogCard/Grid'

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogGrid/>
      <Footer/>
    </div>
  )
}

export default Blog
