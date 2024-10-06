import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="flex justify-center space-x-4">
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
