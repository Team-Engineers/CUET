import React from 'react'
import image from "../../assets/Vector1.png"
import '../../Css/Courses.css'
// import CourseCard from './Card';
import i1 from "./img/brick.png"; 
import i2 from "./img/exam paper.png";
import i3 from "./img/mathematics learning app interface (1).png"
import i4 from "./img/Microscope, books and chemistry flasks.png"
import i5 from "./img/Stationery and physics book for education.png"
import Layout from "../layout/Layout"
import { Link } from 'react-router-dom';
import DomainTopic from '../home/DomainTopic';

const coursesData = [
    { id: 1, imageUrl: i1, courseName: 'General English' },
    { id: 2, imageUrl: i2, courseName: 'General Test' },
    
  ];
  const DomainSubjects = [
    { id: 1, imageUrl: i3, courseName: 'Science' },
    { id: 2, imageUrl: i4, courseName: 'Commerce' },
    { id: 3, imageUrl: i5, courseName: 'Humanities & Social Sciences' },
    // { id: 1, imageUrl: i3, courseName: 'Science' },
    // { id: 2, imageUrl: i4, courseName: 'Commerce' },
    // { id: 3, imageUrl: i5, courseName: 'Humanities & Social Sciences' },

  ];

function course() {
  const gradientBackground = {
    background: 'linear-gradient(136.22deg, #ACBCFF -4.3%, #FFFFFF 98.5%)',
  };

  return (
    <>
      <Layout>
        <div className="gradient-container" style={gradientBackground}>
          <div className="courses">
            <div className="title_border">
              <h1 className="title_courses">
                <Link to="/">
                  <img
                    className="title_courses_img"
                    src={image}
                    alt="back_btn"
                  />
                </Link>
                Courses
              </h1>
            </div>
            <div className="courses_grid">
              {coursesData.map((course) => (
                <Link key={course.id} to={`/${course.courseName}`}>
                  <DomainTopic
                    brick={course.imageUrl}
                    general={course.courseName}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="_domain_subjects">
            <div className="title_domain">
              <h1>Domain Subjects</h1>
            </div>
            <div className="courses_grid">
              {DomainSubjects.map((course) => (
                <Link key={course.id} to={`/courses/${course.courseName}`}>
                  <DomainTopic
                    brick={course.imageUrl}
                    general={course.courseName}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default course