import { useState } from "react";
import { Play, Search } from "lucide-react";

const albums = [
  { name: "Starlight Drive", artist: "Luma" },
  { name: "Beyond the Stars", artist: "Chion" },
];

function AlbumsPage() {
  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Albums</h2>
      <div className="grid grid-cols-2 gap-4">
        {albums.map((album) => (
          <div
            key={album.name}
            className="bg-zinc-900 p-4 rounded-xl text-center shadow"
          >
            <div className="text-xl font-semibold mb-2">{album.name}</div>
            <div className="text-sm text-zinc-400">{album.artist}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumsPage;
