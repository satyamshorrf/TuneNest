import React, { useState, useRef } from "react";
import { Search, XCircle, Play, AudioLines, Bookmark } from "lucide-react";

const mockResults = [
  {
    title: "Song of the Wind",
    artist: "Artist A",
    duration: "3:32",
    cover: "public/logo.jpeg",
  },
  {
    title: "Midnight Drive",
    artist: "Artist C",
    duration: "3:32",
    cover: "public/logo.jpeg",
  },
  {
    title: "Purple Lights",
    artist: "Artist D",
    duration: "3:32",
    cover: "public/logo.jpeg",
  },
  {
    title: "Neon Rain",
    artist: "Artist E",
    duration: "3:32",
    cover: "public/logo.jpeg",
  },
  {
    title: "Dreamscape",
    artist: "Artist F",
    duration: "3:32",
    cover: "public/logo.jpeg",
  },
];

const SongPage = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState(mockResults);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = mockResults.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  const clearSearch = () => {
    setQuery("");
    setFilteredResults(mockResults);
    inputRef.current.focus();
  };

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

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-between mb-4">
            <button className="border border-gray-700 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-800 transition-colors">
              <h3 className="text-lg font-semibold text-gray-300">For you</h3>
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <button className="border border-gray-700 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-800 transition-colors">
              <h3 className="text-lg font-semibold text-gray-300">Tranding</h3>
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <button className="border border-gray-700 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-800 transition-colors">
              <h3 className="text-lg font-semibold text-gray-300">Saved</h3>
            </button>
          </div>
        </div>

        {/* <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-300">Search Results</h3>
          {query && (
            <button
              className="text-sm text-cyan-400 hover:text-cyan-500 transition-colors"
              onClick={clearSearch}
            >
              Clear Search
            </button>
          )}

        </div> */}

        {/* <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-300">Results</h3>
          <button className="text-sm text-cyan-400 hover:text-cyan-500 transition-colors">
            Clear All
          </button>

        </div> */}

        {/* Search Results Count */}
        {/* <div>
          <p className="text-gray-400 text-sm mb-2">
            {filteredResults.length} results found
          </p>
        </div> */}

        {/* Results */}
        <div className=" sm:grid-cols-2 gap-4">
          {filteredResults.length > 0 ? (
            filteredResults.map((result, index) => (
              <div
                key={index}
                className="bg-gray-800 mb-3 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-300 transition-shadow flex items-center p-4 relative"
              >
                {/* Left: Circular Image */}
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

                {/* Center: Song Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{result.title}</h3>
                  <p className="text-sm text-gray-400">
                    {result.artist} {result.duration}
                  </p>
                </div>

                <div className=" grid grid-cols-2 gap-3">
                  {/* Right: Duration + Play */}
                  <div className="flex flex-col items-end justify-center">
                    {/* <p className="text-sm text-gray-400 mb-1">{result.duration}</p> */}
                    <button className="p-2 bg-white rounded-full hover:bg-cyan-400 transition-colors">
                      <Play size={18} className="text-gray-800" />
                    </button>
                  </div>

                  <div className="flex flex-col items-end justify-center">
                    <button className="p-2 bg-white rounded-full hover:bg-cyan-400 transition-colors">
                      <Bookmark size={18} className="text-gray-800" />
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
