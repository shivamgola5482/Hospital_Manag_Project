import React from 'react';

const DashboardCard = ({ title, description, icon }) => (
  <div
    className="bg-blue-50 p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
               flex flex-col items-center text-center cursor-pointer border border-blue-200"
  >
    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600">{description}</p>
  </div>
);

export default DashboardCard;
