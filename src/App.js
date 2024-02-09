
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './components/about/About';
import Course from './components/course/course';
import Science from './components/course/domain_subjects/Science';
import Commerce from './components/course/domain_subjects/Commerce';
import HumanitiesAndSocialSciences from './components/course/domain_subjects/Humanities & Social Sciences';
import Learning from './components/Learning/Learning';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path='/courses' element={<Course />} />
    <Route path='/courses/Science' element={<Science />} />
    <Route path='/courses/Commerce' element={<Commerce  />}/>
    <Route path ='/courses/Humanities & Social Sciences' element={<HumanitiesAndSocialSciences/>}/>
    <Route path ='/learning' element={<Learning/>}/>
    </Routes>
    </Router>
  );
}

export default App;
