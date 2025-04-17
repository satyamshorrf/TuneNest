import React, { useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Music } from "lucide-react";
import FirstGirlModal from "../models/FirstGirlModal";
import SecondGirlModal from "../models/SecondGirlModal";
import ThirdGirlModal from "../models/ThirdGirlModal";
import FourthGirlModal from "../models/FourthGirlModal";
import BlueHeadPhoneModel from "../models/BlueHeadPhone";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";

// Sample song data for each artist
const songs = {
  "Billie Eilish": {
    title: "bad guy",
    audioSrc: "/songs/billie-eilish-bad-guy.mp3",
    coverArt: "/covers/billie.jpg"
  },
  "Lady Gaga": {
    title: "Poker Face",
    audioSrc: "/songs/lady-gaga-poker-face.mp3",
    coverArt: "/covers/gaga.jpg"
  },
  "Ariana Grande": {
    title: "thank u, next",
    audioSrc: "/songs/ariana-grande-thank-u-next.mp3",
    coverArt: "/covers/ariana.jpg"
  },
  "Lisa": {
    title: "Money",
    audioSrc: "/songs/lisa-money.mp3",
    coverArt: "/covers/lisa.jpg"
  }
};

const ArtistPage = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  const models = [
    { component: <SecondGirlModal />, label: "Billie Eilish" },
    { component: <ThirdGirlModal />, label: "Lady Gaga" },
    { component: <FourthGirlModal />, label: "Ariana Grande" },
    { component: <FirstGirlModal />, label: "Lisa" },
    { component: <BlueHeadPhoneModel />, label: "" },
  ];

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSongSelect = (artist) => {
    if (songs[artist]) {
      setCurrentSong(songs[artist]);
      setIsPlaying(true);
      // Wait for audio source to update then play
      setTimeout(() => audioRef.current.play(), 0);
    }
  };

  const handleTimeUpdate = () => {
    const duration = audioRef.current.duration || 1;
    const currentTime = audioRef.current.currentTime;
    setProgress((currentTime / duration) * 100);
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8 pb-32"> {/* Added padding-bottom for player */}
      <div className="flex flex-col items-center gap-16">
        {/* First row - 2 items */}
        <div className="flex gap-8 justify-center w-full">
          {models.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="bg-purple-300 rounded-xl p-4 flex flex-col items-center w-[550px] cursor-pointer hover:bg-purple-800 transition-colors"
              onClick={() => handleSongSelect(item.label)}
            >
              <div className="w-full h-[500px] flex items-center justify-center">
                {item.component}
              </div>
              <h3 className="text-white mt-4 text-xl font-semibold">
                {item.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Second row - 2 items */}
        <div className="flex gap-8 justify-center w-full">
          {models.slice(2, 4).map((item, index) => (
            <div
              key={index + 2}
              className="bg-cyan-700 rounded-xl p-4 flex flex-col items-center w-[550px] cursor-pointer hover:bg-cyan-600 transition-colors"
              onClick={() => handleSongSelect(item.label)}
            >
              <div className="w-full h-[500px] flex items-center justify-center">
                {item.component}
              </div>
              <h3 className="text-white mt-4 text-xl font-semibold">
                {item.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Third row - 1 item */}
        <div className="flex justify-center w-full">
          <div className="rounded-xl p-4 flex flex-col items-center">
            <div className="w-[30vw] h-[300px]">{models[4].component}</div>
            <h3 className="text-white mt-4 text-xl font-semibold">
              {models[4].label}
            </h3>
          </div>
        </div>
      </div>

      {/* Audio element (hidden) */}
      <audio
        ref={audioRef}
        src={currentSong?.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={handleTimeUpdate}
      />

      {/* Music Player */}
      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4">
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            {/* Album Cover */}
            <div className="flex-shrink-0">
              <img
                src={currentSong.coverArt}
                alt="Album cover"
                className="w-16 h-16 rounded-md object-cover"
              />
            </div>

            {/* Song Info */}
            <div className="flex-grow min-w-0">
              <h4 className="text-white font-medium truncate">{currentSong.title}</h4>
              <p className="text-gray-400 text-sm truncate">{currentSong.artist || currentSong.label}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white">
                <SkipBack size={20} />
              </button>
              <button 
                className="bg-white rounded-full p-2 hover:bg-gray-200"
                onClick={handlePlayPause}
              >
                {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" />}
              </button>
              <button className="text-gray-400 hover:text-white">
                <SkipForward size={20} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex-grow max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 w-10 text-right">
                  {formatTime(audioRef.current?.currentTime || 0)}
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-gray-400 w-10">
                  {formatTime(audioRef.current?.duration || 0)}
                </span>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2 w-32">
              <Volume2 size={18} className="text-gray-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
      <MusicPlayer /> 
    </div>
  );
};

export default ArtistPage;