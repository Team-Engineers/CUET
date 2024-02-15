import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import Coursespage from "./pages/Coursespage";
import SubtopicPage from "./components/Courses/SubtopicPage";
import Learningpage from "./pages/Learningpage";
import Payment from "./pages/Payment";

import Profile from "./pages/Profile";
import Syllabus from "./pages/Syllabus";
function App() {
  const packname = "CUET GENERAL PACK";
  const packprice = 999;
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/syllabus" element={<Syllabus />} />

        <Route path="/courses" element={<Coursespage />} />
        <Route path="/courses/:subtopic" element={<SubtopicPage />} />
        <Route path="/learning" element={<Learningpage />} />
        <Route path="/payment" element={<Payment packname={packname} packprice={packprice} />} />
      </Routes>
    </div>
  );
}

export default App;
