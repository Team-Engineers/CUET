import React from 'react';
import "../../Css/About.css"
import  image  from "../../assets/images/about/About.png";
import vectorImage from "../../assets/images/about/Vector1.png";
import Layout from '../layout/Layout';
function About() {
  return (
   <>
   <Layout>
     <div className='top'>
   <div className='main'>

    <div className='left_container'>
    <h1>About Us</h1>
    <p className='content_para'>
    At TestKnock, we are dedicated to more than just academic success.  Our unwavering commitment extends to providing you with the essential tools and expert guidance. So join us on this transformative expedition and discover where educational excellence is not just an aspiration but an inspiring and achievable pursuit.
    </p>
    </div>

    <div className='right_container'>
     
    <p>
    <img className="right_image" src={image}  alt='About-us_image'/>    </p>
    </div>

   </div>
   <div className='lower'>
    <img className='lower_image' src={vectorImage} alt='design_image'/>
   </div>
   </div>
   </Layout>
   </>
  );
}

export default About;
