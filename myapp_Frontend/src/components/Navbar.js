import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white p-4 flex flex-col md:flex-row md:justify-between items-center">
      <div className="flex justify-between w-full md:w-auto items-center">
        <h1 className="text-xl font-bold">
          <Link
            to="/"
            className="font-serif rounded hover:shadow-md hover:shadow-black"
          >
            Hospital Management
          </Link>
        </h1>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex-row md:flex gap-4 mt-2 md:mt-0 ${
          isOpen ? "flex" : "hidden"
        } md:gap-4`}
      >
        <Link
          to="/"
          className="hover:text-black rounded transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/doctors"
          className="hover:text-black rounded transition-all duration-300"
        >
          Doctors
        </Link>
        <Link
          to="/patients"
          className="hover:text-black rounded transition-all duration-300"
        >
          Patients
        </Link>
        <Link
          to="/appointments"
          className="hover:text-black rounded transition-all duration-300"
        >
          Appointments
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
