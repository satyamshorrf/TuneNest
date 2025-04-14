import { Play, Search } from "lucide-react";

const albums = Array(10).fill({ name: "Starlight Drive", artist: "Luma" });

function AlbumsPage() {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 ml-[10rem] mr-[10rem] gap-20">
        {albums.map((album, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl text-center shadow-md hover:shadow-lg transition"
          >
            <img
              className="mx-auto h-32 w-32 object-cover opacity-70 hover:scale-150 hover:opacity-100 rounded-xl transition"
              src="/HeadPhone.jpg"
              alt={`${album.name} cover`}
            />
            <div className="text-lg font-semibold mt-3 text-white">{album.name}</div>
            <div className="text-sm text-zinc-400">{album.artist}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumsPage;
