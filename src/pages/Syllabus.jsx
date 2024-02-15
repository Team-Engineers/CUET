import React from 'react'
import Navbar from '../components/Navbar'
import SyllabusCard from '../components/Syllabus/SyllabusCard'

const Syllabus = () => {
    const subjects=['Accountancy',"Agriculture","Anthropology","Art Education Sculpture","Biology","Business Studies","Chemistry","Computer Science","Econimics/Business Economics","Languages (IA & IB)","Engineering Graphics","Entrepreneurship","Environmental Studies","General Test","Legal Studies","Geography","History","Home Science","Knowledge Tradition -Practices India","Mass Media/ Mass Communication","Mathematics","Performing Arts","Physical Education","Physics","Political Science","Psychology","Sanskrit","Sociology","Teaching Aptitide"]
  return (
    <div>
        <Navbar/>
        {subjects.map((subject)=><SyllabusCard subject={subject}/>)}
    </div>
  )
}

export default Syllabus