import { useState } from "react";
import {
  Play,
  Home,
  Music,
  Disc,
  Users,
  Search,
  ChevronRight,
} from "lucide-react";
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
      coverImage: "/HeadPhone.jpg",
      audioUrl: "/audio/song1.mp3",
    },
    {
      id: 2,
      title: "Electric Dreams",
      artist: "Neen Circuit",
      description: "Upbeat electronic beats to energize your day",
      duration: "4:12",
      plays: "890K",
      coverImage: "/PlayButton.jpeg",
      audioUrl: "/audio/song2.mp3",
    },
  ];

  const topArtists = [
    {
      id: 1,
      name: "Elon Black",
      genre: "Electronic",
      monthlyListeners: "5.7M",
      image: "/Circle_pink.jpg",
    },
    {
      id: 2,
      name: "Nova Wave",
      genre: "Synthwave",
      monthlyListeners: "3.2M",
      image: "/Robot.jpg",
    },
    {
      id: 3,
      name: "Neon Lights",
      genre: "Retrowave",
      monthlyListeners: "2.8M",
      image: "/av_1.jpg",
    },
  ];

  const genresData = [
    {
      id: 1,
      name: "Gravity",
      description: "Heavy bass and deep tones",
      image: "/circle_tt.jpg",
    },
    {
      id: 2,
      name: "Dreamscape",
      description: "Ethereal and atmospheric",
      image: "/Circle_l.webp",
    },
    {
      id: 3,
      name: "Beyond the Stars",
      description: "Cosmic and expansive",
      image: "/Circle_5.jpg",
    },
    {
      id: 4,
      name: "Future Waves",
      description: "Futuristic and innovative",
      image: "/Triangle.jpg",
    },
  ];

  const environments = ["/ve_1.jpg", "/ve_2.jpg", "/ve_3.jpg", "/ve_1.jpg"];

  const avatars = [
    "/av_1.jpg",
    "/av_2.jpg",
    "/av_3.jpg",
    "/av_4.jpg",
    "/av_5.jpg",
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
      {/* <header className="p-6 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="w-2 h-2 rounded-full bg-white mx-0.5"></div>
            <div className="w-2 h-2 rounded-full bg-white mx-0.5"></div>
            <div className="w-2 h-2 rounded-full bg-white mx-0.5"></div>
          </div>
          <h1 className="text-2xl font-bold">Cloud</h1>
        </div>
      </header> */}
      

      <main className="p-6 max-w-7xl mx-auto">
        {/* Featured Song Section */}
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
                    src={song.coverImage}
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
                    onClick={() => openSongModal(song)}
                    alt="Play"
                    className="w-18 h-16 object-contain rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Trending Songs Section */}
        <section className="mb-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
            <h2 className="text-2xl font-bold">Trending Songs</h2>
            <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300">
              <Play size={18} />
              <span>Play All</span>
            </button>
          </div>

          {/* 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: 2 stacked cards */}
            <div className="flex flex-col gap-4">
              {trendingSongs.slice(0, 2).map((song) => (
                <Card
                  key={song.id}
                  className="bg-gray-800 border border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
                  onClick={() => openSongModal(song)}
                >
                  <div className="flex items-center p-4 gap-4">
                    {/* Left Image */}
                    <img
                      src={song.coverImage}
                      alt={song.title}
                      className="w-16 h-16 rounded-md object-cover"
                    />

                    {/* Middle Content (Title on top, description below) */}
                    <div className="flex flex-col justify-between flex-grow h-full">
                      <CardTitle className="text-white text-sm">
                        {song.title}
                      </CardTitle>
                      <p className="text-gray-400 text-sm">
                        {song.description}
                      </p>
                    </div>

                    {/* Right Play Icon */}
                    <div className="flex items-center justify-center h-full">
                      <ChevronRight size={24} className="text-purple-400" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Right Column: Custom display box */}
            <div className="relative w-full h-[13rem] border-2 border-gray-700 rounded-xl px-6 sm:px-12 py-6 bg-gray-800 flex flex-wrap content-between">
              <div className="w-1/2 text-4xl sm:text-6xl font-bold pt-2">
                ELON
              </div>
              <div className="w-1/2 text-right text-3xl sm:text-5xl pt-4">
                STARLIGHT
              </div>
              <div className="w-1/2 text-4xl sm:text-6xl font-bold pb-4">
                BLACK
              </div>
              <div className="w-1/2 text-center text-3xl sm:text-5xl">
                DRIVE
              </div>
            </div>
          </div>
        </section>

        {/* Top Artists Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Artists This Week</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {topArtists.map((artist) => (
              <div
                key={artist.id}
                className="p-0 rounded-xl overflow-hidden w-[22.5rem] h-[22rem] transition-all cursor-pointer relative group"
                onClick={() => openArtistModal(artist)}
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-semibold">{artist.name}</h3>
                  <p className="text-gray-300">{artist.genre}</p>
                  <p className="text-sm text-gray-400">
                    {artist.monthlyListeners} monthly listeners
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Genres Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Genres You May Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {genresData.map((genre) => (
              <div
                key={genre.id}
                className="p-0 rounded-xl overflow-hidden h-48 relative group cursor-pointer"
                onClick={() => openGenreModal(genre)}
              >
                <img
                  src={genre.image}
                  alt={genre.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold mb-1">{genre.name}</h3>
                  <p className="text-sm text-gray-200">{genre.description}</p>
                </div>
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
                className="rounded-md hover:opacity-90 cursor-pointer h-32 w-full object-cover"
              />
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Add artist's avatar</h2>

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
                className="flex flex-col items-center bg-gray-800 p-2 rounded-xl w-[15rem] h-[12rem]"
              >
                <img
                  src={avatar}
                  alt={`Avatar ${idx + 1}`}
                  className="rounded-lg mb-2 w-20 h-20 object-cover hover:scale-150 transition-transform"
                />
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
