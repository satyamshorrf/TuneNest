import React from "react";
import { Link } from "react-router-dom";
import { Search, User, Home, Music, Disc, Users } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-600 text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Title */}
        <Link to="/" className="flex items-center gap-2 text-cyan-300 text-2xl font-bold">
          <img src="/logo.jpeg" alt="TuneNest Logo" className="w-10 h-10"  />
          TuneNest
        </Link>

        {/* Navigation Links */}
<nav className="hidden md:flex gap-6 items-center">
  <Link to="/" className="flex items-center space-x-2 hover:text-cyan-400 font-small transition">
    <Home size={18} /> 
    <span>HOME</span>
  </Link>
  <Link to="/songs" className="flex items-center space-x-2 hover:text-cyan-400 font-small transition">
    <Music size={18} />
    <span>SONGS</span>
  </Link>
  <Link to="/albums" className="flex items-center space-x-2 hover:text-cyan-400 font-small transition">
    <Disc size={18} />
    <span>ALBUMS</span>
  </Link>
  <Link to="/artists" className="flex items-center space-x-2 hover:text-cyan-400 font-small transition">
    <Users size={18} />
    <span>ARTISTS</span>
  </Link>
</nav>


        {/* Icons */}
        <div className="flex gap-4 items-center">
          <button className="p-2 rounded-full hover:bg-gray-800 transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800 transition">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
