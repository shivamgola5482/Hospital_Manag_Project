import React from 'react'
// import { FaHeart, FaReact } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot } from 'react-icons/si';
import { SiPostgresql } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-6 mt-12 shadow-inner">
      <div className="container mx-auto text-center px-4 max-w-screen-xl">
        <p className="text-base sm:text-lg font-medium">
          &copy; {new Date().getFullYear()} <span className="font-bold text-indigo-400">Shivam</span>. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-3 text-sm sm:text-base text-gray-300">
          <p className="flex items-center gap-2 flex-wrap justify-center">
            Built with
            <FaReact className="text-cyan-400 animate-spin-slow" />
            <SiTailwindcss className="text-blue-400" />
            <SiSpringboot className="text-green-700" />
            <SiPostgresql className="text-blue-400" />
            {/* <FaHeart className="text-red-500" /> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
