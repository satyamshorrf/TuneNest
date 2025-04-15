import React, { useState, useRef } from "react";
import { Search, XCircle, Play, Pause, AudioLines, Bookmark } from "lucide-react";

const mockResults = [
  {
    title: "Song of the Wind",
    artist: "Artist A",
    duration: "3:32",
    cover: "/logo.jpeg",
    audio: "/audio.mp3",
    trending: true,
  },
  {
    title: "Midnight Drive",
    artist: "Artist C",
    duration: "3:32",
    cover: "/logo.jpeg",
    audio: "/audio.mp3",
    trending: false,
  },
  {
    title: "Purple Lights",
    artist: "Artist D",
    duration: "3:32",
    cover: "/logo.jpeg",
    audio: "/audio.mp3",
    trending: true,
  },
  {
    title: "Neon Rain",
    artist: "Artist E",
    duration: "3:32",
    cover: "/logo.jpeg",
    audio: "/audio.mp3",
    trending: false,
  },
  {
    title: "Dreamscape",
    artist: "Artist F",
    duration: "3:32",
    cover: "/logo.jpeg",
    audio: "/audio.mp3",
    trending: true,
  },
];

const SongPage = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [savedSongs, setSavedSongs] = useState([]);
  const [activeTab, setActiveTab] = useState("forYou"); // forYou, trending, saved

  const inputRef = useRef(null);
  const audioRefs = useRef([]);

  // Filter logic
  const getFilteredSongs = () => {
    let baseList = mockResults;

    if (activeTab === "trending") {
      baseList = baseList.filter((song) => song.trending);
    } else if (activeTab === "saved") {
      baseList = baseList.filter((song) =>
        savedSongs.some((saved) => saved.title === song.title)
      );
    }

    return baseList.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredResults = getFilteredSongs();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery("");
    inputRef.current.focus();
  };

  const handlePlay = (index) => {
    const currentAudio = audioRefs.current[index];

    // Pause all other audios
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (currentPlayingIndex === index && isPlaying) {
      currentAudio.pause();
      setIsPlaying(false);
    } else {
      currentAudio.play();
      setCurrentPlayingIndex(index);
      setIsPlaying(true);
    }

    currentAudio.onended = () => {
      setIsPlaying(false);
      setCurrentPlayingIndex(null);
    };
  };

  const toggleBookmark = (song) => {
    const isAlreadySaved = savedSongs.some((item) => item.title === song.title);
    if (isAlreadySaved) {
      setSavedSongs(savedSongs.filter((item) => item.title !== song.title));
    } else {
      setSavedSongs([...savedSongs, song]);
    }
  };

  const isBookmarked = (song) =>
    savedSongs.some((item) => item.title === song.title);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">
          Search Music
        </h2>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search
            className={`absolute top-3.5 left-4 transition-all duration-200 ${
              isFocused ? "text-cyan-400" : "text-gray-400"
            }`}
            size={20}
          />
          {query && (
            <XCircle
              className="absolute top-3.5 right-4 text-gray-400 hover:text-cyan-400 cursor-pointer"
              size={20}
              onClick={clearSearch}
            />
          )}
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for a song..."
            value={query}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full pl-12 pr-10 py-3 rounded-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-between mb-6">
          {["forYou", "trending", "saved"].map((tab) => (
            <button
              key={tab}
              className={`border px-4 py-2 rounded-xl font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-cyan-600 border-cyan-500 text-white"
                  : "border-gray-700 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "forYou"
                ? "For You"
                : tab === "trending"
                ? "Trending"
                : "Saved"}
            </button>
          ))}
        </div>

        {/* Songs */}
        <div className="sm:grid-cols-2 gap-4">
          {filteredResults.length > 0 ? (
            filteredResults.map((result, index) => (
              <div
                key={index}
                className="bg-gray-800 mb-3 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-300 transition-shadow flex items-center p-4 relative"
              >
                {/* Left Image */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={result.cover}
                    alt={result.title}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <AudioLines
                    size={16}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>

                {/* Song Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{result.title}</h3>
                  <p className="text-sm text-gray-400">
                    {result.artist} {result.duration}
                  </p>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-end justify-center">
                    <button
                      className="p-2 bg-white rounded-full hover:bg-cyan-400 transition-colors"
                      onClick={() => handlePlay(index)}
                    >
                      {currentPlayingIndex === index && isPlaying ? (
                        <Pause size={18} className="text-gray-800" />
                      ) : (
                        <Play size={18} className="text-gray-800" />
                      )}
                    </button>
                    <audio
                      ref={(el) => (audioRefs.current[index] = el)}
                      src={result.audio}
                    />
                  </div>

                  <div className="flex flex-col items-end justify-center">
                    <button
                      onClick={() => toggleBookmark(result)}
                      className={`p-2 rounded-full transition-colors ${
                        isBookmarked(result)
                          ? "bg-cyan-400"
                          : "bg-white hover:bg-cyan-400"
                      }`}
                    >
                      <Bookmark
                        size={18}
                        className={`${
                          isBookmarked(result)
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No results found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongPage; 
