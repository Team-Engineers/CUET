import React from 'react'
import CourseCard from '../Card';
import Layout from '../../layout/Layout';
import { Link } from 'react-router-dom';
import i1 from "./img/math.png";
import i2 from "./img/Socialogy.png";
import i3 from "./img/Psychology.png";
import i4 from "./img/geo.png";
import i5 from "./img/History.png";
import i6 from "./img/Political.png";

import image from "./img/Vector.png"


const coursesData = [
  { id: 1, imageUrl: i1, courseName: 'Mathematics' },
  { id: 2, imageUrl: i2, courseName: 'Sociology' },
  { id: 3, imageUrl: i3, courseName: 'Psychology' },
  { id: 4, imageUrl: i4, courseName: 'Geography' },
  { id: 5, imageUrl: i5, courseName: 'History' },
  { id: 6, imageUrl: i6, courseName: 'Political Science' },
];

function HumanitiesAndSocialSciences() {
  const gradientBackground = {
    background: 'linear-gradient(136.22deg, #ACBCFF -4.3%, #FFFFFF 98.5%)',
  };

  return (
    <Layout>
     <div className='courses'  style={gradientBackground}>
        <div className='title_border'>
        <h1 className='title_courses'>
        {/* onClick={navigate(/home)} */}
        <Link to="/courses">
            <img className='title_courses_img' src={image} alt='back_btn'/>
            </Link>
            Humanities & Social Sciences</h1>
    </div> 
    <div className="courses_grid">

      {coursesData.map((course) => (
             <Link key={course.id} to={`/${course.courseName}`}>
             <CourseCard imageUrl={course.imageUrl} courseName={course.courseName} />
           </Link>
      ))}
   
    </div>
    </div> 


    </Layout>
  
  )

}

export default HumanitiesAndSocialSciences;
