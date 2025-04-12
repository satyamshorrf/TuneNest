import {
  SkipBack,
  SkipForward,
  Play,
  Repeat,
  Shuffle
} from "lucide-react";

export default function MusicPlayerCard() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 w-full max-w-md">
      {/* Album Art */}
      <img
        src="https://placehold.co/50x50"
        alt="Album cover with a futuristic robot face"
        className="w-12 h-12 rounded-full"
      />

      {/* Song Info */}
      <div className="flex-1">
        <h3 className="text-white text-lg">In the Machine</h3>
        <p className="text-gray-400">Cybernetic</p>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center space-x-2">
        <button className="text-gray-400 hover:text-white">
          <SkipBack size={20} />
        </button>
        <button className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600">
          <Play size={20} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <SkipForward size={20} />
        </button>
      </div>

      {/* Extra Controls */}
      <div className="flex items-center space-x-2">
        <button className="text-cyan-400 hover:text-cyan-300">
          <Shuffle size={20} />
        </button>
        <button className="text-cyan-400 hover:text-cyan-300">
          <Repeat size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-24 h-1 bg-gray-600 rounded-full overflow-hidden">
        <div className="bg-cyan-400 h-full w-1/2"></div>
      </div>
    </div>
  );
}
