import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, User, Home, Music, Disc, Users, Menu, X, Compass } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Title */}
        <Link
          to="/"
          className="flex items-center gap-2 text-cyan-300 text-2xl font-bold"
        >
          <img src="/logo.jpeg" alt="TuneNest Logo" className="w-10 h-10" />
          TuneNest
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-2 font-small transition ${
                isActive ? "text-purple-400" : "text-white"
              } hover:text-cyan-400`
            }
          >
            <Home size={18} />
            <span>HOME</span>
          </NavLink>

          <NavLink
            to="/songs"
            className={({ isActive }) =>
              `flex items-center space-x-2 font-small transition ${
                isActive ? "text-purple-400" : "text-white"
              } hover:text-cyan-400`
            }
          >
            <Music size={18} />
            <span>SONGS</span>
          </NavLink>

          <NavLink
            to="/albums"
            className={({ isActive }) =>
              `flex items-center space-x-2 font-small transition ${
                isActive ? "text-purple-400" : "text-white"
              } hover:text-cyan-400`
            }
          >
            <Disc size={18} />
            <span>ALBUMS</span>
          </NavLink>


          <NavLink
            to="/artists"
            className={({ isActive }) =>
              `flex items-center space-x-2 font-small transition ${
                isActive ? "text-purple-400" : "text-white" 
              } hover:text-cyan-400`
            }
          >
          <Users  size={18} />
            <span>ARTISTS</span>
          </NavLink>

          <NavLink
            to="/explores"
            className={({ isActive }) =>
              `flex items-center space-x-2 font-small transition ${
                isActive ? "text-purple-400" : "text-white" 
              } hover:text-cyan-400`
            }
          >
             <Compass  size={18} />
            <span>EXPLORES</span>
          </NavLink>


          

        </nav>

        {/* Icons (hidden on mobile) */}
        <div className="hidden md:flex gap-4 items-center ml-4">
          <Link to="/search">
            <button className="p-2 rounded-full hover:bg-gray-800 transition">
              <Search className="w-5 h-5" />
            </button>
          </Link>
          <Link to="/users">
            <button className="p-2 rounded-full hover:bg-gray-800 transition">
              <User className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cyan-300 ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden absolute right-4 top-[5rem] bg-gray-700 px-4 py-3 text-right rounded-lg shadow-lg w-30 space-y-2">
          <Link to="/" className="block text-white hover:text-cyan-400">
            HOME
          </Link>
          <hr className="border-gray-500" />
          <Link to="/songs" className="block text-white hover:text-cyan-400">
            SONGS
          </Link>
          <hr className="border-gray-500" />
          <Link to="/albums" className="block text-white hover:text-cyan-400">
            ALBUMS
          </Link>
          <hr className="border-gray-500" />
          <Link to="/artists" className="block text-white hover:text-cyan-400">
            ARTISTS
          </Link>
          <hr className="border-gray-500" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
