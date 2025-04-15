import React from "react";
import { Play } from "lucide-react";

const songs = [
  { title: "Blinding Lights", artist: "The Weeknd", duration: "3:22" },
  { title: "Save Your Tears", artist: "The Weeknd", duration: "3:35" },
  { title: "In Your Eyes", artist: "The Weeknd", duration: "3:58" },
  { title: "After Hours", artist: "The Weeknd", duration: "6:01" },
  { title: "Blinding Lights", artist: "The Weeknd", duration: "3:22" },
  { title: "Save Your Tears", artist: "The Weeknd", duration: "3:35" },
  { title: "In Your Eyes", artist: "The Weeknd", duration: "3:58" },
  { title: "After Hours", artist: "The Weeknd", duration: "6:01" },
  { title: "Blinding Lights", artist: "The Weeknd", duration: "3:22" },
  { title: "Save Your Tears", artist: "The Weeknd", duration: "3:35" },
  { title: "In Your Eyes", artist: "The Weeknd", duration: "3:58" },
  { title: "After Hours", artist: "The Weeknd", duration: "6:01" },
];

const PlaylistPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 sm:px-12 py-8">
      {/* Header Section */}
      <div className="flex flex-col bg-gradient-to-r from-red-400 to-red-600 rounded-2xl sm:flex-row items-center sm:items-end sm:gap-10">
        <img
          src="/imgs/album1.jpg"
          alt="Playlist Cover"
          className="w-48 p-3 h-48 sm:w-60 sm:h-60 object-cover rounded-3xl shadow-lg"
        />
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <p className="uppercase text-sm text-gray-300">Playlist</p>
          <h1 className="text-3xl sm:text-5xl font-bold mt-1">Weekend Vibes</h1>
          <p className="text-gray-300 mt-2">A mix of The Weeknd's top hits</p>
          <p className="text-xl text-gray-200 mt-1 mb-2">Created by NeuroAgent</p>
        </div>
      </div>

      {/* Play Button */}
      <div className="mt-8 flex items-center gap-4">
        <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full flex items-center gap-2 shadow-lg">
          <Play size={20} />
          Play
        </button>
      </div>

      {/* Song List */}
      <div className="mt-6">
        {songs.map((song, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 px-4 hover:bg-gray-800 rounded-lg transition"
          >
            <div>
              <p className="font-medium">{song.title}</p>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
            <p className="text-sm text-gray-400">{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;
