import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import ForgotPassword from "./components/Forgotpassword1.jsx";
import Oncology from "./components/Oncology.jsx";
import Gynecology from "./components/Gynecology.jsx";
import Home from "./components/Home.jsx";
import Appointment from "./components/Appointment.jsx";
import Facilities from "./components/Facilities.jsx";
import Contact from "./components/Contact.jsx";
import Departments from "./components/Dept.jsx";
import Navbar from "./components/Navbar.jsx";
import Neurologist from "./components/Neurologist.jsx";
import Cardiology from "./components/Cardiology.jsx";
import Psychiatrist from "./components/Psychiatrist.jsx";
import Orthopedic from "./components/Orthopedia.jsx";
import Profile from "./components/Profile.jsx";
import IntroductionPage from "./components/IntroductionPage.jsx";
import Footer from "./components/Footer.jsx";

import "./Assets/Login.css";
import "./Assets/SignUp.css";
import "./Assets/Dept.css";
import "./Assets/Oncology.css";
import "./Assets/Gynecology.css";
import "./Assets/Home.css";
import "./Assets/Navbar.css";
import "./Assets/IntroductionPage.css";
import "./Assets/ForgotPassword1.css";

function AppContent() {
  const location = useLocation();

  const hideNavbarPaths = ["/", "/login", "/sign_up", "/forgot_assword"];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/oncology" element={<Oncology />} />
        <Route path="/gynecology" element={<Gynecology />} />
        <Route path="/neurologist" element={<Neurologist />} />
        <Route path="/cardiology" element={<Cardiology />} />
        <Route path="/psychiatry" element={<Psychiatrist />} />
        <Route path="/orthopedic" element={<Orthopedic />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
