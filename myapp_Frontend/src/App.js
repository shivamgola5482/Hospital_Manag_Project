import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DoctorList from "./components/DoctorList";
import PatientList from "./components/PatientList";
import AppointmentList from "./components/AppointmentList";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => (
  <div className="bg-gradient-to-r from-gray-500 to-gray-300 min-h-screen flex flex-col">
    <Router>
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* <Route path="/" element={<h2 className="text-7xl text-blue-700 text-center font-serif rounded-md shadow-lg shadow-black bg-gradient-to-r from-slate-700 to-gray-400 mt-6">Welcome to HMS</h2>} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/appointments" element={<AppointmentList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
);

export default App;
