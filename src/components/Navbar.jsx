import React from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Title */}
        <Link to="/" className="flex items-center gap-2 text-cyan-300 text-2xl font-bold">
          <img src="/logo.svg" alt="TuneNest Logo" className="w-8 h-8" />
          TuneNest
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-cyan-400 font-small transition">
            HOME
          </Link>
          <Link to="/songs" className="hover:text-cyan-400 font-small transition">
            SONGS
          </Link>
          <Link to="/albums" className="hover:text-cyan-400 font-small transition">
            ALBUMS
          </Link>
          <Link to="/artists" className="hover:text-cyan-400 font-small transition">
            ARTISTS
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
