// MetricCard.js
import React from 'react';

function MetricCard({ icon, title, percentage, description }) {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4 shadow-md text-center   cursor-pointer transform transition duration-300 ease-in-out hover:scale-105">
      <div className="text-4xl mb-3">{icon}</div>
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-2xl font-bold text-blue mt-2">{percentage}</p>
      <p className="text-sm text-gray-300 mt-1">{description}</p>
    </div>
  );
}

export default MetricCard;
