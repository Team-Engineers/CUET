import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Domain from "./components/Courses/Domain";
import SubtopicPage from "./components/Courses/SubtopicPage";
import ForgotPassword from "./components/Login/ForgotPassword";
import ResetPassword from "./components/Login/ResetPassword";
import PackPage from "./components/Packs/PacksPage";
import TestPage from "./components/Test/TestPage";
import MainLayout from "./components/dashboardNew/DashBoardLayout";
import AccountSettings from "./components/dashboardNew/pages/AccountSetting";
import Nopage from "./components/nopage/Nopage";
import PracticeTestMain from "./components/practicetest/PracticeTestMain";
import PrepModules from "./components/prepmodules/PrepModules";
import AboutPage from "./pages/Aboutpage";
import Coursespage from "./pages/Coursespage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Syllabus from "./pages/Syllabus";
import University from "./pages/UniversityPage";
import PrivateRoutes from "./utils/PrivateRoutes";
// import DashBoardNew from "./components/dashboardNew/pages/Dashboard";
import Cards from "./components/dashboardNew/Cards/Cards";
import UserPlans from "./components/dashboardNew/pages/UserPlans";
import BoughtPack from "./pages/BoughtPack";
// import PriceTable from "./components/Packs/PriceCard";
import Blog from "./pages/Blog";

import { useAuth } from "./utils/context";

import BlogStructure from "./components/BlogCard/Structure";
import CoursesNew from "./components/Courses/CoursesNew";
const App = () => {
  const [auth, setAuth] = useAuth();
  const selectedSubjects = auth?.user?.selectedSubjects;
  return (
    <Routes>
      <Route path="/login" element={!auth?.user ? <Login /> : <Homepage />} />
      <Route path="/signup" element={!auth?.user ? <Signup /> : <Homepage />} />
      <Route
        path="/forgot-password"
        element={!auth?.user ? <ForgotPassword /> : <Homepage />}
      />
      <Route
        path="/reset_password/:id/:token"
        element={!auth?.user ? <ResetPassword /> : <Homepage />}
      />
      <Route
        path="/courses"
        element={!auth?.user ? <Coursespage /> : <CoursesNew />}
      />
      <Route path="/Domain" element={<Domain />} />
      <Route
        path="/"
        element={
          selectedSubjects && selectedSubjects.length > 0 ? (
            <BoughtPack />
          ) : (
            <Homepage />
          )
        }
      />{" "}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:topic" element={<BlogStructure />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/purchase" element={<PackPage />} />
      <Route path="/university" element={<University />} />
      <Route path="/courses/:topic" element={<TestPage />} />
      <Route path="/courses/:topic/:testCategory" element={<TestPage />} />
      <Route path="/courses/domain/:heading" element={<SubtopicPage />} />
      <Route
        path="/courses/prep/:subject/:topic/:subTopic"
        element={<PrepModules />}
      />
      <Route path="/courses/prep/:topic/:subTopic" element={<PrepModules />} />
      <Route
        path="/courses/practice/:topic/:subTopic"
        element={<PracticeTestMain />}
      />
      <Route element={<PrivateRoutes />}>
        <Route
          path="/courses/practice/:subTopic"
          element={<PracticeTestMain />}
        />
        {/* <Route path="/profile" element={<MainLayout />} /> */}
        <Route path="/profile" element={<MainLayout />}>
          <Route index element={<AccountSettings />} />
          <Route path="progress" element={<Cards />} />
          <Route path="plans" element={<UserPlans />} />
          {/* <Route path="plans" element={<PriceTable hidden="hidden" />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<Nopage />} />
    </Routes>
  );
};

export default App;
