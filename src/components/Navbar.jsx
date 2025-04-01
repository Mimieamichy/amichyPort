import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 shadow flex justify-between items-center relative z-50">
      <div className="text-2xl font-bold text-black dark:text-white">
        <Link to="/" className="hover:text-darkPink"> 
        My Portfolio
        </Link>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/" className="text-black dark:text-white hover:text-darkPink">
          Home
        </Link>
        
        <Link
          to="/projects"
          className="text-black dark:text-white hover:text-darkPink"
        >
          Projects
        </Link>
        <Link
          to="/#contact"
          className="text-black dark:text-white hover:text-darkPink"
        >
          Contact
        </Link>
       
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-xl font-bold text-black dark:text-white"
        >
          ☰
        </button>
      </div>
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 flex flex-col gap-4 px-6 py-4 md:hidden z-40 shadow-md">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-black dark:text-white hover:text-darkPink"
          >
            Home
          </Link>
          
          <Link
            to="/projects"
            onClick={toggleMenu}
            className="text-black dark:text-white hover:text-darkPink"
          >
            Projects
          </Link>
          <Link
            to="/#contact"
            onClick={toggleMenu}
            className="text-black dark:text-white hover:text-darkPink"
          >
            Contact
          </Link>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
