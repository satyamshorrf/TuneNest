import { useState } from "react";
import { Play, Home, Music, Disc, Users, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const [showSongModal, setShowSongModal] = useState(false);
  const [showArtistModal, setShowArtistModal] = useState(false);
  const [showGenreModal, setShowGenreModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("Rock");

  const trendingSongs = [
    {
      id: 1,
      title: "Late Night",
      artist: "Zara Dray",
      description: "Chill vibes for your nighttime routine",
      duration: "3:45",
      plays: "1.2M",
    },
    {
      id: 2,
      title: "Electric Dreams",
      artist: "Neen Circuit",
      description: "Upbeat electronic beats to energize your day",
      duration: "4:12",
      plays: "890K",
    },
  ];

  const topArtists = [
    {
      id: 1,
      name: "Elon Black",
      genre: "Electronic",
      monthlyListeners: "5.7M",
      color: "bg-purple-500",
    },
    {
      id: 2,
      name: "Nova Wave",
      genre: "Synthwave",
      monthlyListeners: "3.2M",
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "Neon Lights",
      genre: "Retrowave",
      monthlyListeners: "2.8M",
      color: "bg-pink-500",
    },
  ];

  const genresData = [
    {
      id: 1,
      name: "Gravity",
      description: "Heavy bass and deep tones",
      color: "bg-indigo-600",
    },
    {
      id: 2,
      name: "Dreamscape",
      description: "Ethereal and atmospheric",
      color: "bg-teal-500",
    },
    {
      id: 3,
      name: "Beyond the Stars",
      description: "Cosmic and expansive",
      color: "bg-purple-600",
    },
    {
      id: 4,
      name: "Future Waves",
      description: "Futuristic and innovative",
      color: "bg-cyan-500",
    },
  ];

  const environments = [
    "https://via.placeholder.com/200x120?text=Scene+1",
    "https://via.placeholder.com/200x120?text=Scene+2",
    "https://via.placeholder.com/200x120?text=Scene+3",
    "https://via.placeholder.com/200x120?text=Scene+4",
    "https://via.placeholder.com/200x120?text=Scene+5",
    "https://via.placeholder.com/200x120?text=Scene+6",
    "https://via.placeholder.com/200x120?text=Scene+7",
    "https://via.placeholder.com/200x120?text=Scene+8",
  ];

  const avatars = [
    "https://via.placeholder.com/80x100?text=Rock+1",
    "https://via.placeholder.com/80x100?text=Rock+2",
    "https://via.placeholder.com/80x100?text=Rock+3",
    "https://via.placeholder.com/80x100?text=Rock+4",
    "https://via.placeholder.com/80x100?text=Rock+5",
  ];

  const genres = ["Rock", "Pop", "JAZZ", "Techno", "More"];

  const openSongModal = (song) => {
    setSelectedItem(song);
    setShowSongModal(true);
  };

  const openArtistModal = (artist) => {
    setSelectedItem(artist);
    setShowArtistModal(true);
  };

  const openGenreModal = (genre) => {
    setSelectedItem(genre);
    setShowGenreModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="p-6 max-w-7xl mx-auto">
        {/* Trending Song Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {trendingSongs.slice(0, 1).map((song) => (
              <Card
                key={song.id}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer flex flex-col md:flex-row"
                onClick={() => openSongModal(song)}
              >
                <div className="w-full md:w-1/3 h-48 md:h-auto p-5">
                  <img
                    src="/HeadPhone.jpg"
                    alt={song.title}
                    style={{ borderRadius: "10px" }}
                    className="w-40 h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center w-full md:w-2/3 p-4">
                  <div>
                    <CardTitle className="text-3xl">{song.title}</CardTitle>
                    <CardContent className="mt-2 px-0 py-0">
                      <p className="text-purple-400 mb-1">{song.artist}</p>
                      <p className="text-gray-400 text-sm border border-gray-700 p-1 rounded-3xl">
                        AI powered recommendations
                        <Music size={16} className="inline-block ml-1" />
                      </p>
                    </CardContent>
                  </div>
                  <img
                    src="/PlayButton.jpeg"
                    alt="Play"
                    className="w-18 h-16 object-contain rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Artists */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Artists This Week</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {topArtists.map((artist) => (
              <div
                key={artist.id}
                className={`p-6 rounded-xl ${artist.color} w-[22.5rem] h-[22rem] bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer`}
                onClick={() => openArtistModal(artist)}
              >
                <h3 className="text-xl font-semibold">{artist.name}</h3>
                <p>{artist.genre}</p>
                <p>{artist.monthlyListeners} monthly listeners</p>
              </div>
            ))}
          </div>
        </section>

        {/* Genre Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Genres You May Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {genresData.map((genre) => (
              <div
                key={genre.id}
                className={`p-6 rounded-xl ${genre.color} bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer`}
                onClick={() => openGenreModal(genre)}
              >
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4">
                  <Music size={20} />
                </div>
                <h3 className="text-xl font-bold mb-1">{genre.name}</h3>
                <p className="text-sm text-gray-300">{genre.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Virtual Environment Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Select virtual environment</h2>
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
              <Search className="text-gray-400 mr-2 w-4 h-4" />
              <input
                type="text"
                placeholder="describe your scene"
                className="bg-transparent outline-none text-sm placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-6">
            {environments.map((env, idx) => (
              <img
                key={idx}
                src={env}
                alt={`Env ${idx + 1}`}
                className="rounded-md hover:opacity-90 cursor-pointer"
              />
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Add artist’s avatar</h2>

          <div className="flex space-x-2 mb-4">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
                  selectedGenre === genre
                    ? "bg-fuchsia-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {avatars.map((avatar, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-gray-800 p-2 rounded-xl w-24"
              >
                <img
                  src={avatar}
                  alt={`Avatar ${idx + 1}`}
                  className="rounded-lg mb-2 w-20 h-24 object-cover"
                />
                <button className="bg-white text-black rounded-full p-1 hover:bg-gray-300">
                  ▶
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showSongModal && (
        <SongModal
          song={selectedItem}
          onClose={() => setShowSongModal(false)}
        />
      )}
      {showArtistModal && (
        <ArtistModal
          artist={selectedItem}
          onClose={() => setShowArtistModal(false)}
        />
      )}
      {showGenreModal && (
        <GenreModal
          genre={selectedItem}
          onClose={() => setShowGenreModal(false)}
        />
      )}
    </div>
  );
}
