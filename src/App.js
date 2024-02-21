import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SubtopicPage from "./components/Courses/SubtopicPage";
import Learningpage from "./pages/Learningpage";
import TestPage from "./components/Test/TestPage";
import Payment from "./pages/Payment";
import { UserContext } from "./context";
import { useState } from "react";
import PacksPage from "./components/Packs/PacksPage";
import TestNew from "./components/testNew/TestNew";

import Profile from "./pages/Profile";
import Syllabus from "./pages/Syllabus";
import Coursespage from "./pages/Coursespage";
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const packname = "CUET GENERAL PACK";
  const packprice = 999;

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
          <Route path='/test-new' element={<TestNew/>} />

          <Route path="/payment" element={<Payment />} />
          <Route path="/packs" element={<PacksPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
