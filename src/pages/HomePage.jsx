import { useState } from "react";
import { Play, Home, Music, Disc, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";

export function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const [showSongModal, setShowSongModal] = useState(false);
  const [showArtistModal, setShowArtistModal] = useState(false);
  const [showGenreModal, setShowGenreModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const genres = [
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
      <header className="p-6 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="w-2 h-2 rounded-full bg-white mx-0.5"></div>
            <div className="w-2 h-2 rounded-full bg-white mx-0.5"></div>
            <div className="w-2 h-2 rounded-full bg-white mx-0.5"></div>
          </div>
          <h1 className="text-2xl font-bold">Cloud</h1>
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        {/* First section */}
        <section className="mb-12">
          {/* <div className="flex items-center justify-between mb-6">
        
            <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300">
             
            </button>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {trendingSongs.slice(0, 1).map((song) => (
              <Card
                key={song.id}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer flex flex-col md:flex-row"
                onClick={() => openSongModal(song)}
              >
                <div className="w-full md:w-1/3 h-48 md:h-auto p-5">
                  <img
                    src="public/HeadPhone.jpg"
                    alt={song.title}
                    style={{ borderRadius: "10px" }}
                    className="w-40 h-full object-cover"
                  />
                </div>

                {/* Right Section: Content + Play Button */}
                <div className="flex justify-between items-center w-full md:w-2/3 p-4">
                  {/* Text Content */}
                  <div>
                    <CardTitle className="text-3xl">{song.title}</CardTitle>
                    <CardContent className="mt-2 px-0 py-0">
                      <p className="text-purple-400 mb-1">{song.artist}</p>
                      <p className="text-gray-400 text-sm border border-gray-700 p-1 rounded-3xl ">
                        AI powered recommendations
                        <Music size={16} className="inline-block ml-1" />
                      </p>
                    </CardContent>
                  </div>

                  {/* Play Button Image (Right Side) */}
                  <img
                    src="public/PlayButton.jpeg"
                    alt="Play"
                    className="w-18 h-16 object-contain rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending Songs</h2>
            <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300">
              <Play size={18} />
              <span>Play All</span>
            </button>
          </div>

          <div className="w-full flex relative mb-8">
            {/* Container for the black box with grid text */}
            <div className="grid grid-cols-2 w-[37rem] h-[13rem] border-2 border-gray-700 rounded-xl absolute top-10 right-0 px-12 py-6">
              {/* First Row */}
              <h2 className="text-7xl font-bold pt-2">ELON</h2>
              <h2 className="text-5xl text-right pt-6 ">STARLIGHT</h2>
              {/* Second Row */}
              <h2 className="text-6xl font-bold pb-12">BLACK</h2>
              <h2 className="text-5xl text-center">DRIVE</h2>
            </div>
          </div>

          <div className="md:grid-cols-2 ">
            {trendingSongs.map((song) => (
              <Card
                key={song.id}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 w-1/2 mb-4 transition-colors cursor-pointer"
                onClick={() => openSongModal(song)}
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">{song.title}</CardTitle>
                  <Play size={20} className="text-purple-400" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{song.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* text design */}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Artists This Week</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {topArtists.map((artist) => (
              <div
                key={artist.id}
                className={`p-6 rounded-xl ${artist.color}  w-[22.5rem] h-[22rem] bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer`}
                onClick={() => openArtistModal(artist)}
              >
              
             
            
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Genres You May Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {genres.map((genre) => (
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

export default HomePage;
