import { Music, Play, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import RoomModal from "../models/RoomModal"; 
import MusicPlayer from "../components/MusicPlayer";

const albums = [
  { name: "Starlight Drive", img: "/imgs/album1.jpg" },
  { name: "Neon Nights", img: "/imgs/album2.jpg" },
  { name: "Dreamwave", img: "/imgs/album3.jpg" },
  { name: "Sunset City", img: "/imgs/album4.jpg" },
  { name: "Retro Vibes", img: "/imgs/album5.jpg" },
  { name: "Night Pulse", img: "/imgs/album6.jpg" },
  { name: "Sky High", img: "/imgs/album7.jpg" },
  { name: "Pixel Rush", img: "/imgs/album8.jpg" },
  { name: "Moonlight Funk", img: "/imgs/album9.jpg" },
  { name: "Synth Bloom", img: "/imgs/album10.jpg" },
  { name: "Starlight Drive", img: "/imgs/album11.jpg" },
  { name: "Neon Nights", img: "/imgs/album12.jpg" },
  { name: "Dreamwave", img: "/imgs/album13.jpg" },
  { name: "Sunset City", img: "/imgs/album14.jpg" },
  { name: "Retro Vibes", img: "/imgs/album15.jpg" },
  { name: "Night Pulse", img: "/imgs/album16.jpg" },
  { name: "Sky High", img: "/imgs/album17.jpg" },
  { name: "Pixel Rush", img: "/imgs/album18.jpg" },
  { name: "Moonlight Funk", img: "/imgs/album19.jpg" },
  { name: "Synth Bloom", img: "/imgs/album20.jpg" },
  { name: "Starlight Drive", img: "/imgs/album21.jpg" },
  { name: "Neon Nights", img: "/imgs/album22.jpg" },
  { name: "Dreamwave", img: "/imgs/album23.jpg" },
  { name: "Sunset City", img: "/imgs/album24.jpg" },
  { name: "Retro Vibes", img: "/imgs/album25.jpg" },
  { name: "Night Pulse", img: "/imgs/album26.jpg" },
  { name: "Sky High", img: "/imgs/album27.jpg" },
  { name: "Pixel Rush", img: "/imgs/album28.jpg" },
  { name: "Moonlight Funk", img: "/imgs/album29.jpg" },
  { name: "Synth Bloom", img: "/imgs/album30.jpg" },
  { name: "Starlight Drive", img: "/imgs/album31.jpg" },
  { name: "Neon Nights", img: "/imgs/album32.jpg" },
  { name: "Dreamwave", img: "/imgs/album33.jpg" },
  { name: "Sunset City", img: "/imgs/album34.jpg" },
  { name: "Retro Vibes", img: "/imgs/album35.jpg" },
  { name: "Night Pulse", img: "/imgs/album36.jpg" },
  { name: "Sky High", img: "/imgs/album37.jpg" },
  { name: "Pixel Rush", img: "/imgs/album38.jpg" },
  { name: "Moonlight Funk", img: "/imgs/album39.jpg" },
  { name: "Synth Bloom", img: "/imgs/album40.jpg" },
];

function AlbumsPage() {
  return (
    <div className="bg-gray-900 min-h-screen p-4 sm:p-8">
      <RoomModal />
      <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center sm:text-left">Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-20 max-w-7xl mx-auto">
        {albums.map((album, index) => (
          <Link to="/playlist" key={index}>
            <div className="bg-gray-800 p-4 sm:p-4 sm:w-full w-fit mx-auto rounded-xl text-center shadow-md hover:shadow-lg transition">
              <img
                className="mx-auto h-32 w-32 object-cover opacity-70 hover:scale-150 hover:opacity-100 rounded-xl transition"
                src={album.img}
                alt={`${album.name} cover`}
              />
              <div className="text-lg font-semibold mt-3 text-white">
                {album.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default AlbumsPage;
