import React from 'react'
import Courses from '../components/Courses/Course'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Header from '../components/Header'


const Coursespage = () => {
  return (
    <div className=' overflow-hidden '>
      {/* <Navbar /> */}
      <Header/>
      <Courses />
      <Footer />
    </div>
  )
}

export default Coursespage
