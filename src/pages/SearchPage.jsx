import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleSearch = () => {
    setIsOpen(false);
    setTimeout(() => {
      console.log("Searching for:", query);
      // Add search logic here
      navigate("/"); // Redirect after searching
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100vh", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100vh", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative min-h-screen bg-blue-600 flex items-center justify-center"
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button onClick={() => setIsOpen(false)}>
              <X className="text-blue-200" size={36} />
            </button>
          </div>

          {/* Search Input Area */}
          <div className="w-full max-w-4xl px-4">
            <div className="flex items-center border-b border-blue-200 py-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your search here"
                className="w-full bg-transparent text-white text-4xl placeholder-blue-200 outline-none"
              />
              <Search
                className="text-blue-200 cursor-pointer ml-2"
                size={36}
                onClick={handleSearch}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
