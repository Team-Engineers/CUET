import React from 'react'
import CourseCard from '../Card';
import Layout from '../../layout/Layout';
import { Link } from 'react-router-dom';
import i1 from "./img/math.png";
import i2 from "./img/Eco.png";
import i3 from "./img/BST.png";
import i4 from "./img/accounts.png";
import image from "./img/Vector.png"


const coursesData = [
  { id: 1, imageUrl: i1, courseName: 'Mathematics' },
  { id: 2, imageUrl: i2, courseName: 'Economics' },
  { id: 3, imageUrl: i3, courseName: 'Business Studies' },
  { id: 4, imageUrl: i4, courseName: 'Accountancy' },
];
function Commerce() {
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
            Commerce</h1>
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

export default Commerce