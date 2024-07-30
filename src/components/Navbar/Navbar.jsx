// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       

        <nav className="bg-[#2d3e50] p-1 fixed top-0 left-0 right-0 mb-12 flex justify-between items-center font-extrabold text-xl  z-50">
          <div className="left-nav flex items-center text-white pl-8">
            <span className="text-2xl">Start Framework</span>
          </div>
          
          <div className="right-nav hidden md:flex gap-5 pr-8 text-xl">
            <ul className="list-none flex gap-5">
              <li>
                <Link to="/about" className="text-white text-lg px-2 py-1 rounded-lg transition-colors duration-300 hover:bg-[#00c7d2] hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white text-lg px-1 py-1 rounded-lg transition-colors duration-300 hover:bg-[#00c7d2] hover:text-white">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-lg px-1 py-1 rounded-lg transition-colors duration-300 hover:bg-[#00c7d2] hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
        
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" /> */}
            </svg>
          </button>
        
          <div className="hidden w-full md:hidden" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 bg-[#2d3e50] text-white">
              <li>
                <Link to="/about" className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-[#00c7d2]">About</Link>
              </li>
              <li>
                <Link to="/portfolio" className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-[#00c7d2]">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-[#00c7d2]">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        
      

    );
};

export default Navbar;
