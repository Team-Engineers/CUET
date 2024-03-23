import React from 'react'
import Footer from '../components/Footer'
import BlogGrid from '../components/BlogCard/Grid'
import Header from '../components/Header'

const Blog = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header/>
      <BlogGrid/>
      <Footer/>
    </div>
  )
}

export default Blog
