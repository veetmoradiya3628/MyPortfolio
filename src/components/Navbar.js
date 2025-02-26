import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white h-16 fixed top-0 w-full flex items-center justify-center shadow-lg z-50">
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/about" className="hover:text-blue-300">About</Link>
        <Link to="/resume" className="hover:text-blue-300">Resume</Link>
        <Link to="/projects" className="hover:text-blue-300">Projects</Link>
        <Link to="/blogs" className="hover:text-blue-300">Blogs</Link>
        <Link to="/contact" className="hover:text-blue-300">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
