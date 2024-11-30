import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components/pages
import HomePage from "./components/HomePage";
import FarmerDashboard from "./components/FarmerDashboard";
import BuyerDashboard from "./components/buyer/BuyerDashBoard";
import AgentDashboard from "./components/AgentDashBoard";
import Login from "./components/LoginPage";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Services from "./components/Services";
import NotFound from "./components/NotFound"; // Optional 404 Page
import AskingPage from "./components/AskingLoginPage";
import LoginPage from "./components/LoginPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/agent-dashboard" element={<AgentDashboard />} />
        <Route path="/askingpage" element={<AskingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
