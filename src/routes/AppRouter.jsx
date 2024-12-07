import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TaskPage from "../pages/TaskPage";
import ProfilePage from "../pages/ProfilePage";
import Header from "../components/common/Header";

const AppRouter = () => {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
