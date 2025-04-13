import { useState } from "react";
import { Play, Search } from "lucide-react";

const artists = [
  { name: "Elon Black", album: "Starlight Drive" },
  { name: "Luma", album: "Midnight Drive" },
];

function ArtistsPage() {
  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Artists</h2>
      <div className="grid grid-cols-2 gap-4">
        {artists.map((artist) => (
          <div
            key={artist.name}
            className="bg-zinc-900 p-4 rounded-xl text-center"
          >
            <div className="text-xl font-semibold mb-2">{artist.name}</div>
            <div className="text-sm text-zinc-400">{artist.album}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistsPage;
