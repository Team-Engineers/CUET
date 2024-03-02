import React from 'react'
import Courses from '../components/Courses/Course'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Coursespage = () => {
  return (
    <div className=' overflow-hidden  flex flex-col items-center'>
      <Navbar />
      <Courses />
      <Footer />
    </div>
  )
}

export default Coursespage
