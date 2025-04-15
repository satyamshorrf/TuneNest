import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Repeat,
  Shuffle
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function MusicPlayerCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audioRef = useRef(null);

  // Array of 5 unique songs
  const songs = [
    {
      title: "Song 1",
      artist: "Artist 1",
      audio: "/audio.mp3",
      cover: "https://placehold.co/50x50"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      audio: "/audio.mp3",
      cover: "https://placehold.co/50x50"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      audio: "/audio1.mp3",
      cover: "https://placehold.co/50x50"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      audio: "/audio1.mp3",
      cover: "https://placehold.co/50x50"
    },
    {
      title: "Song 5",
      artist: "Artist 5",
      audio: "/audio1.mp3",
      cover: "https://placehold.co/50x50"
    }
  ];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleRepeat = () => setIsRepeat((prev) => !prev);
  const toggleShuffle = () => setIsShuffle((prev) => !prev);

  const handleNextSong = () => {
    let nextIndex;
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * songs.length);
    } else {
      nextIndex = (currentSongIndex + 1) % songs.length;
    }
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  // Play new song when index changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // reload audio
      if (isPlaying) {
        audioRef.current.play(); // auto play if already playing
      }
    }
  }, [currentSongIndex, isPlaying]);

  return (
    <div className="absolute bottom-4 left-4 bg-gray-800 p-4 rounded-lg flex items-center space-x-4 w-full max-w-md z-50 shadow-lg">
      {/* Album Art */}
      <img
        src={songs[currentSongIndex].cover}
        alt="Album cover"
        className="w-12 h-12 rounded-full"
      />

      {/* Song Info */}
      <div className="flex-1">
        <h3 className="text-white text-sm font-semibold truncate">
          {songs[currentSongIndex].title}
        </h3>
        <p className="text-gray-400 text-xs truncate">
          {songs[currentSongIndex].artist}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleShuffle}
          className={`${
            isShuffle ? "text-cyan-400" : "text-gray-400"
          } hover:text-cyan-300`}
        >
          <Shuffle size={18} />
        </button>
        <button
          onClick={handlePrevSong}
          className="text-gray-400 hover:text-white"
        >
          <SkipBack size={18} />
        </button>
        <button
          onClick={togglePlay}
          className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button
          onClick={handleNextSong}
          className="text-gray-400 hover:text-white"
        >
          <SkipForward size={18} />
        </button>
        <button
          onClick={toggleRepeat}
          className={`${
            isRepeat ? "text-cyan-400" : "text-gray-400"
          } hover:text-cyan-300`}
        >
          <Repeat size={18} />
        </button>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={songs[currentSongIndex].audio}
        onEnded={handleNextSong}
        loop={isRepeat}
      />
    </div>
  );
}
