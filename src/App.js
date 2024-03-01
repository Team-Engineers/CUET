import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SubtopicPage from "./components/Courses/SubtopicPage";
import TestPage from "./components/Test/TestPage";
import MockTestMain from "./components/practicetest/MockTestMain";
import AboutPage from "./pages/Aboutpage";
import Coursespage from "./pages/Coursespage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Syllabus from "./pages/Syllabus";
import University from "./pages/UniversityPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import PackPage from "./components/Packs/PacksPage";
import PrepModules from "./components/prepmodules/PrepModules";

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
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/courses" element={<Coursespage />} />
      <Route path="/pack" element={<PackPage />} />

      <Route path="/university" element={<University />} />
      <Route path="/courses/:subtopic" element={<SubtopicPage />} />
      <Route path="/test/:topic" element={<TestPage />} />
      <Route path="/test/:subheading/:heading" element={<SubtopicPage />} />
      <Route
          path="/test/prep/:topic/:subTopic"
          element={<PrepModules />}
        /> 
        <Route
          path="/test/practice/:topic/:subTopic"
          element={<MockTestMain />}
        />
      <Route element={<PrivateRoutes />}>
        <Route path="/test/practice/:subTopic" element={<MockTestMain />} />
        <Route path="/profile" element={<Profile />} />
        
        
      </Route>
      <Route path="*" element={<>Error 404 </>} />
    </Routes>
  );
};

export default App;
