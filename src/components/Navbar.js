import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full shadow-lg z-50">
      <div className="flex justify-between items-center h-16 px-6">
        <Link to="/" className="text-xl font-bold hover:text-blue-300">
          Veet M
        </Link>

        {/* Hamburger Button (Shown on Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/projects" className="hover:text-blue-300">Projects</Link>
          <Link to="/resume" className="hover:text-blue-300">Resume</Link>
          <Link to="/blogs" className="hover:text-blue-300">Blogs</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        </div>
      </div>

      {/* Mobile Navigation Menu (Collapsible) */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-900`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/resume" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link to="/projects" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/blogs" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/contact" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
