import React from "react"
import { Routes, Route } from "react-router-dom"

// Pages
import HomePage from "./pages/HomePage"
import ArtistPage from "./pages/ArtistPage"
import AlbumPage from "./pages/AlbumPage"
import SongPage from "./pages/SongPage"
import SearchPage from "./pages/SearchPage"
import UserPage from "./pages/UserPage"
import PlaylistPage from "./pages/PlaylistPage"
import NotFoundPage from "./pages/NotFoundPage"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MusicPlayer from "./components/MusicPlayer"

function App() {
  return (
    <div className="relative z-10 pt-20 min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="pb-32">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artists" element={<ArtistPage />} />
          <Route path="/albums" element={<AlbumPage />} />
          <Route path="/songs" element={<SongPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <MusicPlayer />
      <Footer />
      </div>
    </div>
  )
}

export default App
