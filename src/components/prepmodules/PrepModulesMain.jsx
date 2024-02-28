import React from 'react'
import Navbar from '../Navbar'
import PrepModules from './PrepModules'
import Footer from '../Footer'

const PrepModulesMain = () => {
  return (
    <div className=' bg-white'>
        <Navbar/>
        <PrepModules/>
        <Footer/>
    </div>
  )
}

export default PrepModulesMain