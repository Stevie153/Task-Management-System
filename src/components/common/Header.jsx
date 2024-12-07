import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/tasks" className="hover:text-gray-300 transition duration-300">Tasks</Link>
          <Link to="/profile" className="hover:text-gray-300 transition duration-300">Profile</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
