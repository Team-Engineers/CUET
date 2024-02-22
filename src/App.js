import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SubtopicPage from "./components/Courses/SubtopicPage";
import PacksPage from "./components/Packs/PacksPage";
import TestPage from "./components/Test/TestPage";
import { UserContext } from "./context";
import AboutPage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Signup from "./pages/Signup";

import Coursespage from "./pages/Coursespage";
import Profile from "./pages/Profile";
import Syllabus from "./pages/Syllabus";
import University from "./pages/UniversityPage";
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div>
      <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/courses" element={<Coursespage />} />
          <Route path="/courses/:subtopic" element={<SubtopicPage />} />

          <Route path="/test" element={<TestPage />} />
          <Route path="/university" element={<University />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/packs" element={<PacksPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
