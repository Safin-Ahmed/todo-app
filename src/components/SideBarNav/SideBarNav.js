import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBarNav = (props) => {
    const [toggle, setToggle] = useState(false);
    const handleMobileMenu = () => {
        setToggle(!toggle);
    }
    return (
      <>  
      {/* mobile menu bar */}
      <div className="bg-gray-800 text-gray-100 flex justify-between">
        {/* logo */}
        <Link to="#" className="p-4 block text-white font-bold">Workopolo</Link>        
        {/* nav */}
        <button onClick={handleMobileMenu} id="mobile-button" className = "p-4 focus:outline-none focus:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button>
      </div>
      {/* Sidebar */}
      <div id="sidebar" className={`fixed min-h-screen bg-purple-800 text-blue-100 w-64 space-y-6 px-2 py-7 inset-y-0 left-0 transform ${toggle ? '-translate-x-full' : ''} transition duration-200 ease-in-out`}>
      {/* logo */}
      <Link to="#" className="text-white flex items-center space-x-2 px-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"       viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span className="text-2xl font-extrabold">
        Workopolo
      </span>
      </Link>
      {/* nav */}
      <nav>
        <Link to="/home" className="block py-2 5 px-4 hover:bg-blue-700 hover:text-white transition duration-200 rounded">Home</Link>
        <Link to="#" className="block py-2 5 px-4 hover:bg-blue-700 hover:text-white transition duration-200 rounded">About</Link>
        <Link to="#" className="block py-2 5 px-4 hover:bg-blue-700 hover:text-white transition duration-200 rounded">Features</Link>
        <Link to="#" className="block py-2 5 px-4 hover:bg-blue-700 hover:text-white transition duration-200 rounded">Pricing</Link>
      </nav>
      </div>

      {/* Main Content
      <div className="p-10 text-2xl font-bold flex-grow">
        {props.children}
      </div> */}
      </>
    );
};

export default SideBarNav;