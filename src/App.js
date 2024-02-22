import React from "react";
import { Route,  Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SubtopicPage from "./components/Courses/SubtopicPage";
import TestPage from "./components/Test/TestPage";
import Payment from "./pages/Payment";
import PacksPage from "./components/Packs/PacksPage";
import Profile from "./pages/Profile";
import Syllabus from "./pages/Syllabus";
import Coursespage from "./pages/Coursespage";
import PrivateRoutes from "./utils/PrivateRoutes";
const App = () => {
  // const isUserSignedIn = () => {
  //   const tokenData = JSON.parse(localStorage.getItem("accessToken"));
  //   return tokenData && new Date().getTime() < tokenData.expiry;
  // };

  return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/courses" element={<Coursespage />} />
          <Route path="/courses/:subtopic" element={<SubtopicPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/test" element={<TestPage />} />
            <Route exact path="/user" element={<Profile />} />
          </Route>
          <Route path="*" element={<>Error 404 </>} />
        </Routes>
  );
};

export default App;
