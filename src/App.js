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
import TabNew from "./components/dashboardNew/pages/account-settings/TabNew";
// import PriceTable from "./components/Packs/PriceCard";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset_password/:id/:token" element={<ResetPassword />} />
      <Route path="/Domain" element={<Domain />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/courses" element={<Coursespage />} />
      <Route path="/purchase" element={<PackPage />} />
      <Route path="/university" element={<University />} />
      <Route path="/courses/:subtopic" element={<SubtopicPage />} />
      <Route path="/test/:topic" element={<TestPage />} />
      <Route path="/test/:subheading/:heading" element={<SubtopicPage />} />
      <Route
        path="/test/prep/:subject/:topic/:subTopic"
        element={<PrepModules />}
      />
      <Route path="/test/prep/:topic/:subTopic" element={<PrepModules />} />

      <Route
        path="/test/practice/:topic/:subTopic"
        element={<PracticeTestMain />}
      />
      <Route element={<PrivateRoutes />}>
        <Route path="/test/practice/:subTopic" element={<PracticeTestMain />} />
        {/* <Route path="/profile" element={<MainLayout />} /> */}
        <Route path="/profile" element={<MainLayout />}>
          <Route index element={<AccountSettings />} />
          <Route path="progress" element={<Cards />} />
          <Route path="plans" element={<TabNew />} />
          {/* <Route path="plans" element={<PriceTable hidden="hidden" />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<Nopage />} />
    </Routes>
  );
};

export default App;
