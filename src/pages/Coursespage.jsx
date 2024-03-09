import React from 'react'
import Courses from '../components/Courses/Course'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Coursespage = () => {
  return (
    <div className=' overflow-hidden '>
      <Navbar />
      <Courses />
      <Footer />
    </div>
  )
}

export default Coursespage
