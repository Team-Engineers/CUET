import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import Coursespage from "./pages/Coursespage";
import SubtopicPage from "./components/Courses/SubtopicPage";
import Learningpage from "./pages/Learningpage";
import TestPage from "./components/Test/TestPage";
import Payment from "./pages/Payment";
import { UserContext } from "./context";
import { useState } from "react";

import Profile from "./pages/Profile";
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

          <Route path="/test" element={<TestPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
