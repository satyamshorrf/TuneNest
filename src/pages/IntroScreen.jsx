import React, { useEffect, useState } from "react";
import RoomModal from "../models/RoomModal"; // Adjust the import path as necessary

const IntroScreen = ({ onStart }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/audio/entry.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full bg-black bg-opacity-50">
        <div className="text-center text-white pt-10">
          <h1 className="text-5xl font-bold">TuneNest</h1>
          <p className="mt-3 text-xl">Your Personalized Music World</p>
        </div>
      </div>

      {/* RoomModal Section - Centered */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="h-[400px] w-[400px]  rounded-xl p-4 flex flex-col items-center justify-center">
          <RoomModal />
        </div>
      </div>

      {/* Get Started Button - Bottom Right */}
      {showButton && (
        <div className="absolute bottom-8 right-8 z-30">
          <button
            onClick={onStart}
            className="px-8 py-4 text-xl font-semibold text-blue-500 bg-white rounded-lg shadow-xl hover:bg-gray-200 transition-all"
          >
            Get Started
          </button>
        </div>
      )}

      {/* Bottom Center "Hello World" Text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 text-white text-lg">
        <h2 className="text-4xl font-extrabold tracking-wide">
          <span className="text-cyan-400">Neuro</span>
          <span className="text-blue-500">Agent</span>
        </h2>
      </div>
    </div>
  );
};

export default IntroScreen;
