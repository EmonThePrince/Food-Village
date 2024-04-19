import React from 'react';
import { NavLink } from "react-router-dom";

const Advertisement = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-6 rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Special Offer!</h2>
        <p className="text-lg mb-4 text-white">Get 50% off on selected items for a limited time only.</p>
        <button className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded">
          <NavLink to = 'login'>Log In</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
