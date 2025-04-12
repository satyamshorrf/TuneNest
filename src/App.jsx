import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage.jsx";
import ArtistPage from "./pages/ArtistPage.jsx";
import AlbumPage from "./pages/AlbumPage.jsx";
import SongPage from "./pages/SongPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import PlaylistPage from "./pages/PlaylistPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="relative z-10 pt-20 min-h-screen bg-black text-white">
      <Navbar />

      <div className="pb-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artists/:artistId" element={<ArtistPage />} />
          <Route path="/albums/:albumId" element={<AlbumPage />} />
          <Route path="/songs/:songId" element={<SongPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/playlists/:playlistId" element={<PlaylistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

export default App;
