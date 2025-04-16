import React, { useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

const songs = [
  { 
    title: "Blinding Lights", 
    artist: "The Weeknd", 
    duration: "3:22",
    audio: "/audio/audio_1.mp3",
    cover: "/imgs/album1.jpg"
  },
  { 
    title: "Save Your Tears", 
    artist: "The Weeknd", 
    duration: "3:35",
    audio: "/audio/audio_2.mp3",
    cover: "/imgs/album1.jpg"
  },
  { 
    title: "In Your Eyes", 
    artist: "The Weeknd", 
    duration: "3:58",
    audio: "/audio/audio_3.mp3",
    cover: "/imgs/album1.jpg"
  },
  { 
    title: "After Hours", 
    artist: "The Weeknd", 
    duration: "6:01",
    audio: "/audio/audio_4.mp3",
    cover: "/imgs/album1.jpg"
  },
  // ... rest of your songs with audio and cover added
];

const PlaylistPage = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = (index) => {
    if (currentSongIndex === index && isPlaying) {
      // Pause current song
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Play new song or resume current
      setCurrentSongIndex(index);
      setIsPlaying(true);
      // Play will be handled in the useEffect below
    }
  };

  const handlePlayAll = () => {
    if (songs.length === 0) return;
    
    if (currentSongIndex !== null && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const indexToPlay = currentSongIndex !== null ? currentSongIndex : 0;
      setCurrentSongIndex(indexToPlay);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (currentSongIndex === null || songs.length === 0) return;
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (currentSongIndex === null || songs.length === 0) return;
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  // Effect to handle audio playback
  React.useEffect(() => {
    if (currentSongIndex === null || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Playback failed:", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [currentSongIndex, isPlaying]);

  // Set up event listeners
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      handleNext();
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex]);

  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 sm:px-12 py-8 pb-24">
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
        <button 
          onClick={handlePlayAll}
          className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full flex items-center gap-2 shadow-lg"
        >
          {currentSongIndex !== null && isPlaying ? (
            <>
              <Pause size={20} />
              Pause
            </>
          ) : (
            <>
              <Play size={20} />
              Play
            </>
          )}
        </button>
      </div>

      {/* Song List */}
      <div className="mt-6">
        {songs.map((song, index) => (
          <div
            key={index}
            onClick={() => handlePlay(index)}
            className={`flex justify-between items-center py-3 px-4 hover:bg-gray-800 rounded-lg transition cursor-pointer ${
              currentSongIndex === index ? 'bg-gray-800' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              {currentSongIndex === index && isPlaying ? (
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-1 h-3 bg-green-500 mx-0.5 animate-pulse"></div>
                  <div className="w-1 h-5 bg-green-500 mx-0.5 animate-pulse"></div>
                  <div className="w-1 h-3 bg-green-500 mx-0.5 animate-pulse"></div>
                </div>
              ) : (
                <span className="w-5 text-center text-gray-400">{index + 1}</span>
              )}
              <div>
                <p className={`font-medium ${
                  currentSongIndex === index ? 'text-green-500' : ''
                }`}>{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">{song.duration}</p>
          </div>
        ))}
      </div>

      {/* Music Player */}
      {currentSongIndex !== null && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-3 shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center">
            {/* Song Info */}
            <div className="flex items-center w-1/4">
              <img
                src={songs[currentSongIndex].cover}
                alt="Album Cover"
                className="w-12 h-12 rounded-lg mr-3"
              />
              <div>
                <h4 className="font-semibold text-sm truncate">
                  {songs[currentSongIndex].title}
                </h4>
                <p className="text-xs text-gray-400 truncate">
                  {songs[currentSongIndex].artist}
                </p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex-1 flex justify-center items-center gap-6">
              <button
                onClick={handlePrevious}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <SkipBack size={20} />
              </button>
              <button
                onClick={() => handlePlay(currentSongIndex)}
                className="p-2 bg-green-500 rounded-full hover:bg-green-400 transition-colors"
              >
                {isPlaying ? (
                  <Pause size={20} className="text-white" />
                ) : (
                  <Play size={20} className="text-white" />
                )}
              </button>
              <button
                onClick={handleNext}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <SkipForward size={20} />
              </button>
            </div>

            {/* Duration */}
            <div className="w-1/4 flex justify-end">
              <p className="text-sm text-gray-400">
                {songs[currentSongIndex].duration}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentSongIndex !== null ? songs[currentSongIndex].audio : undefined}
        preload="metadata"
      />
    </div>
  );
};

export default PlaylistPage;